import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  History, Target, Eye, Award, TrendingUp, Users,
  Heart, Lightbulb, Shield, BookOpen
} from 'lucide-react';
import historyImg from '../assets/hero.png';
import visionImg from '../assets/VieEtudiante3.jpg';
import miniLogoUpa from '../assets/UPAlogo.jpg';

function useCountUp(target, duration = 1500, animate = false) {
  const [count, setCount] = useState(0);
  const rafId = useRef(null);
  const startTime = useRef(null);

  const animateCount = timestamp => {
    if (!startTime.current) startTime.current = timestamp;
    const progress = timestamp - startTime.current;
    if (progress < duration) {
      const value = Math.min(target, Math.floor((progress / duration) * target));
      setCount(value);
      rafId.current = requestAnimationFrame(animateCount);
    } else {
      setCount(target);
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  };

  useEffect(() => {
    if (animate) {
      startTime.current = null;
      rafId.current = requestAnimationFrame(animateCount);
    } else {
      setCount(0);
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    return () => cancelAnimationFrame(rafId.current);
  }, [animate, target]);

  return count;
}

function useInView(ref, options = { threshold: 0.3 }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
}

const stats = [
  { value: 3, label: 'Écoles', suffix: '' },
  { value: 200, label: 'Étudiants', suffix: '+' },
  { value: 10, label: 'Partenaires', suffix: '+' },
  { value: 8, label: 'Parcours', suffix: '+' },
];

const parseNumber = str => Number(str.replace(/[^\d]/g, ''));

function CountUpCard({ value, label, suffix, animate }) {
  const count = useCountUp(value, 1500, animate);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-gold opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
      <div className="relative bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-gold bg-clip-text text-transparent mb-2">
          {suffix === '+' ? `${count}${suffix}` : `${count}${suffix}`}
        </h2>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</p>
      </div>
    </motion.div>
  );
}

const values = [
  {
    icon: TrendingUp,
    title: "Excellence et Amélioration Continue",
    desc: "Nous visons l'excellence académique dans chaque programme. Notre engagement envers l'amélioration continue garantit que nos étudiants reçoivent une formation de pointe, alignée sur les standards internationaux et les besoins du marché.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Heart,
    title: "Ouverture et Respect",
    desc: "La diversité est notre force. Nous célébrons les différences culturelles et les perspectives uniques de chaque étudiant, créant un environnement inclusif où chacun peut s'épanouir et contribuer.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation et Créativité",
    desc: "L'innovation est au cœur de notre pédagogie. Nous encourageons la curiosité intellectuelle et la pensée créative, préparant nos étudiants à devenir des pionniers dans leurs domaines respectifs.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Professionnalisme et Intégrité",
    desc: "L'éthique professionnelle et l'intégrité sont les fondements de notre institution. Nous formons des leaders responsables, guidés par des valeurs morales solides et un engagement envers l'excellence.",
    gradient: "from-green-500 to-emerald-500"
  },
];

const About = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-gray-50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/20 rounded-full mb-4">
            <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-primary-700 dark:text-primary-300 font-medium">Notre Histoire</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            À propos de <span className="bg-gradient-to-r from-primary-600 to-accent-gold bg-clip-text text-transparent">l'UPA</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Une institution d'excellence dédiée à former les leaders de demain à travers
            une éducation innovante et des valeurs fortes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl">
                <History className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Notre Histoire</h3>
            </div>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Fondée en <span className="font-semibold text-primary-600 dark:text-primary-400">2021</span>,
                l'Université Privée d\'Ambohidratrimo est née d'une vision ambitieuse : démocratiser
                l'accès à une éducation supérieure de qualité pour tous les jeunes malgaches.
              </p>
              <p>
                Démarrant avec deux programmes et une cinquantaine d'étudiants passionnés, l'UPA s'est
                rapidement imposée comme une référence dans le paysage éducatif malgache, combinant
                excellence académique et innovation pédagogique.
              </p>
              <p>
                Aujourd'hui, avec <span className="font-semibold text-primary-600 dark:text-primary-400">trois écoles spécialisées</span> et
                plus de <span className="font-semibold text-primary-600 dark:text-primary-400">200 étudiants</span>, nous continuons
                d'évoluer en créant des partenariats stratégiques avec des institutions internationales
                pour offrir à nos étudiants les meilleures opportunités de carrière.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-gold opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={historyImg}
                alt="Campus UPA"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <img src={miniLogoUpa} alt="Logo UPA" className="w-16 h-16 rounded-lg shadow-lg" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-gold to-primary-600 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={visionImg}
                alt="Vision UPA"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <img src={miniLogoUpa} alt="Logo UPA" className="w-16 h-16 rounded-lg shadow-lg" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-accent-gold to-yellow-600 rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Notre Mission</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Fournir une éducation supérieure de qualité exceptionnelle, accessible à tous les étudiants
                malgaches, avec des programmes innovants qui allient excellence académique, compétences
                pratiques et valeurs éthiques pour former les professionnels et leaders de demain.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary-600 to-cyan-600 rounded-xl">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Notre Vision</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Devenir l'institution de référence dans l'enseignement supérieur à Madagascar et dans
                l'océan Indien, reconnue pour son excellence pédagogique, son innovation et sa contribution
                au développement socio-économique du pays en formant des diplômés compétents, engagés et
                prêts à relever les défis du XXIe siècle.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nos Valeurs Fondamentales
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Des principes qui guident notre mission éducative et façonnent l'expérience de nos étudiants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-700"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                  <div className="relative">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            L'UPA en Chiffres
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <CountUpCard
                key={index}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                animate={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
