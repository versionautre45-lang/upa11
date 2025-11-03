import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.png';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
  const stats = [
    { icon: GraduationCap, value: '3', label: 'Écoles' },
    { icon: Award, value: '8+', label: 'Parcours' },
    { icon: Users, value: '200+', label: 'Étudiants' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'brightness(0.4)'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-primary-900/80 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-primary-600/20 border border-primary-500/30 rounded-full text-primary-300 text-sm font-medium backdrop-blur-sm">
                Formation d'Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="text-white block mb-3">Façonnez votre</span>
              <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-accent-gold bg-clip-text text-transparent">
                Avenir Professionnel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              Rejoignez l'Université Privée d'Ambohidratrimo et bénéficiez d'une formation de qualité,
              dispensée par des experts, dans un environnement moderne et innovant.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <RouterLink to="/admission">
                <button className="group px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-glow flex items-center gap-2">
                  S'inscrire maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </RouterLink>

              <a href="#programmes">
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-semibold backdrop-blur-sm transition-all duration-300">
                  Nos programmes
                </button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600/20 rounded-lg mb-3">
                    <stat.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-gold opacity-20 blur-3xl rounded-full animate-float" />
            <div className="relative w-full max-w-lg aspect-square rounded-2xl bg-gradient-to-br from-primary-600/20 to-accent-gold/20 backdrop-blur-sm border border-white/10 p-8 shadow-2xl">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-glow-lg">
                <img
                  src={heroImg}
                  alt="Campus UPA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-dark-900 to-transparent" />
    </section>
  );
};

export default Hero;
