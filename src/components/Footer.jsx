import {
  ArrowUp, Mail, Moon, Sun, MapPin, Phone, Facebook, Instagram
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import toujoursPlusHaut from '../assets/toujoursPlusHaut.PNG';
import ChatBotAssistant from './ChatBotAssistant';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/p/Universit%C3%A9-priv%C3%A9e-dAmbohidratrimo-100075729058011',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/universitepriveeambohidratrimo/',
      color: 'hover:text-pink-600 dark:hover:text-pink-400'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-dark-900 via-dark-950 to-black text-gray-300">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo UPA" className="w-12 h-12" />
              <div>
                <h3 className="font-bold text-white text-lg">UPA</h3>
                <p className="text-xs text-gray-400">Toujours Plus Haut</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              L'Université Privée d'Ambohidratrimo forme les leaders de demain à travers
              une éducation d'excellence et innovante.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-dark-800 hover:bg-dark-700 rounded-lg transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Accueil', 'À propos', 'Programmes', 'Vie étudiante', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6">Nos Écoles</h4>
            <ul className="space-y-3">
              {['HEST', 'HECM', 'HELS'].map((school) => (
                <li key={school}>
                  <a
                    href="#programmes"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {school}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg mb-6">Contact</h4>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-400">
                Lot 77 Ambohitsiroa, RN4<br />
                15 min de Shell Ambohidratrimo<br />
                Antananarivo, Madagascar
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
              <div className="space-y-1">
                <a href="tel:+261344900609" className="text-gray-400 hover:text-primary-400 transition-colors block">
                  034 49 006 09
                </a>
                <a href="tel:+261388400003" className="text-gray-400 hover:text-primary-400 transition-colors block">
                  038 84 000 03
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <a
                  href="mailto:universitepriveambohidratrimo@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors block break-all"
                >
                  universitepriveambohidratrimo@gmail.com
                </a>
                <a
                  href="mailto:viescolaire.upa@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors block"
                >
                  viescolaire.upa@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; {new Date().getFullYear()} Université Privée d'Ambohidratrimo. Tous droits réservés.
            </p>
            <img
              src={toujoursPlusHaut}
              alt="Toujours plus haut"
              className="h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <ChatBotAssistant />

        {isVisible && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={scrollToTop}
            className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}

        <button
          onClick={toggleDarkMode}
          className="p-3 bg-dark-800 hover:bg-dark-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-300" />
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
