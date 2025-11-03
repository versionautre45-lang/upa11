import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ArrowDown, MessageSquareText, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/dataChatbotUPA';
import AssistantUPA from '../assets/UPAlogo.jpg';
import Fuse from 'fuse.js';

const quickQuestions = [
  "Nos filières",
  "Frais de scolarité",
  "Localisation",
  "Conditions d'admission",
  "Contacts",
  "Début de l'année universitaire"
];

const floatingMessages = [
  "N'hésitez pas à me consulter 😊",
  "👋",
  "Vous avez des questions ? 😊"
];

// ---------- Utils
const normalize = (str) =>
  str
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const pickRandom = (v) => Array.isArray(v) ? v[Math.floor(Math.random() * v.length)] : v;

const pickAnswer = (item) => pickRandom(item.answer_fr ?? item.answer ?? "");

// Extraction après "que veut dire", "c'est quoi", etc.
const extractFocusKeyword = (raw) => {
  const n = normalize(raw);
  const patterns = [
    /(?:que veut dire|cest quoi|qu est ce que|quand|que signifie|signifie|definition de)\s+(.+)/i
  ];
  for (const p of patterns) {
    const m = n.match(p);
    if (m && m[1]) {
      return m[1].trim();
    }
  }
  return null;
};

const ChatBotAssistant = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [lastTopic, setLastTopic] = useState(null);
  const messagesEndRef = useRef(null);

  const [floatingMsgIndex, setFloatingMsgIndex] = useState(0);
  const [showFloatingMsg, setShowFloatingMsg] = useState(false);

  // Index normalisé
  const indexedFaq = useMemo(() => {
    return faqData.map((f, idx) => ({
      ...f,
      _idx: idx,
      _normKeywords: (f.keywords || []).map(k => normalize(k))
    }));
  }, []);

  // Fuse.js pour recherche floue
  const fuse = useMemo(() => new Fuse(
    indexedFaq.map(f => ({
      ...f,
      keywords_joined: (f._normKeywords || []).join(' ')
    })),
    {
      keys: ['keywords_joined'],
      threshold: 0.45,
      distance: 200,
      ignoreLocation: true,
      minMatchCharLength: 2,
      includeScore: true,
    }
  ), [indexedFaq]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

  useEffect(() => {
    if (open && !hasWelcomed) {
      const hour = new Date().getHours();
      const greeting = hour < 12 ? "Bonjour" : hour < 18 ? "Bon après-midi" : "Bonsoir";
      setMessages([{ from: 'bot', text: `${greeting} 👋 ! Bienvenue à l'Université Privée d'Ambohidratrimo. Comment puis-je vous aider ? 😊` }]);
      setHasWelcomed(true);
    }
  }, [open, hasWelcomed]);

  // Animation messages flottants
  useEffect(() => {
    if (open) {
      setShowFloatingMsg(false);
      return;
    }
    let visibleTimeout;
    let pauseTimeout;
    const cycle = () => {
      setShowFloatingMsg(true);
      visibleTimeout = setTimeout(() => {
        setShowFloatingMsg(false);
        pauseTimeout = setTimeout(() => {
          setFloatingMsgIndex(prev => (prev + 1) % floatingMessages.length);
          cycle();
        }, 10000);
      }, 5000);
    };
    cycle();
    return () => {
      clearTimeout(visibleTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [open]);

  const sendBotReply = (reply, topic = null) => {
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: reply }]);
      if (topic) setLastTopic(topic);
      setTyping(false);
    }, 2000);
  };

  const directKeywordMatch = (userMsgNorm) => {
    let best = null;
    for (const item of indexedFaq) {
      for (const kw of item._normKeywords) {
        if (!kw) continue;
        if (userMsgNorm.includes(kw)) {
          if (!best || kw.length > best.kw.length) {
            best = { item, kw };
          }
        }
      }
    }
    return best?.item || null;
  };

  const handleSend = (question = null) => {
    const rawUserMessage = question || input.trim();
    if (!rawUserMessage) return;

    setMessages(prev => [...prev, { from: 'user', text: rawUserMessage }]);
    setInput('');

    const userNorm = normalize(rawUserMessage);

    // Direct match
    let found = directKeywordMatch(userNorm);

    // Essai avec "focus" extrait
    if (!found) {
      const focus = extractFocusKeyword(rawUserMessage);
      if (focus) {
        const f2 = directKeywordMatch(normalize(focus));
        if (f2) found = f2;
      }
    }

    // Fuzzy search
    if (!found) {
      const fuzzy = fuse.search(userNorm);
      if (fuzzy.length) {
        found = fuzzy[0].item;
      }
    }

    if (found) {
      const reply = pickAnswer(found);
      const topic = (found.keywords && found.keywords[0]) ? normalize(found.keywords[0]) : null;
      sendBotReply(reply, topic);
      return;
    }

    // Relance sur topic précédent
    if (lastTopic && userNorm.split(' ').length <= 4) {
      const related = indexedFaq.find(f => f._normKeywords.includes(lastTopic));
      if (related) {
        const reply = pickAnswer(related);
        sendBotReply(reply, lastTopic);
        return;
      }
    }

    // Fallback
    sendBotReply("Je suis désolé 😅, je n’ai pas compris. Pouvez-vous reformuler ?");
  };

  return (
    <div className="relative">
      {open && (
        <div
          className="
            fixed z-50
            bottom-8 right-20 sm:right-24 md:right-24
            w-[75vw] sm:w-80 md:w-96 lg:w-[500px] xl:w-[400px]
            max-h-[60vh]
            bg-white dark:bg-gray-800
            shadow-xl rounded-lg
            flex flex-col
          "
        >
          {/* Header */}
          <div className="p-3 bg-blue-600 text-white flex justify-between items-center rounded-t-lg">
            <span className="font-bold text-sm flex items-center gap-2">
              <img src={AssistantUPA} alt="UPA" className='w-9 rounded-full'/>
              Assistant UpA
            </span>
            <button onClick={() => setOpen(false)} aria-label="Fermer le chat">
              <X />
            </button>
          </div>

          {/* Messages */}
          <div className="relative p-3 flex-1 overflow-y-auto text-sm space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`px-3 py-2 rounded-lg max-w-[85%] break-words ${
                    msg.from === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-1 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-full">
                  <span className="w-[0.4rem] h-[0.4rem] bg-gray-500 dark:bg-gray-300 rounded-full animate-bounce "></span>
                  <span className="w-[0.38rem] h-[0.38rem] bg-gray-500 dark:bg-gray-300 rounded-full animate-bounce "></span>
                  <span className="w-[0.35rem] h-[0.35rem] bg-gray-500 dark:bg-gray-300 rounded-full animate-bounce "></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />

          </div>

          {/* Accès rapides */}
          <div className="p-2 border-t border-gray-300 dark:border-gray-700">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t dark:border-gray-700 p-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Posez votre question..."
              className="flex-1 p-2 text-sm bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button onClick={() => handleSend()} className="text-blue-600 hover:text-blue-800 p-1" aria-label="Envoyer">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Bouton flottant */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="relative p-2 sm:p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
        aria-label="Ouvrir l'assistant UPA"
      >
        <AnimatePresence>
          {!open && showFloatingMsg && (
            <motion.div
              key={floatingMsgIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="absolute right-full top-1/4 -translate-y-1/2 mr-2 bg-blue-600 text-white px-3 py-1 rounded-md text-xs whitespace-nowrap"
            >
              {floatingMessages[floatingMsgIndex]}
            </motion.div>
          )}
        </AnimatePresence>
        <MessageSquareText size={24} />
      </button>
    </div>
  );
};

export default ChatBotAssistant;