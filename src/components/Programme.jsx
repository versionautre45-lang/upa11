import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code, Building2, Megaphone, BookOpen, Brain, X,
  ChevronRight, GraduationCap, CheckCircle2, Sparkles
} from 'lucide-react';
import hest from '../assets/hest.png';
import hecm from '../assets/hecm.png';
import hep from '../assets/hep.png';
import { programModules } from '../data/programData';

const schools = [
  {
    image: hest,
    code: 'HEST',
    name: 'Hautes Études en Sciences et Technologies',
    description: 'Formez-vous aux technologies de pointe et aux sciences appliquées pour répondre aux défis de demain.',
    icon: Code,
    gradient: 'from-blue-600 to-cyan-600',
    programs: Object.keys(programModules.HEST).length,
  },
  {
    image: hecm,
    code: 'HECM',
    name: 'Hautes Études en Commerce et Management',
    description: 'Développez votre expertise en gestion d\'entreprise, marketing et finance dans un monde en constante évolution.',
    icon: Building2,
    gradient: 'from-primary-600 to-blue-600',
    programs: Object.keys(programModules.HECM).length,
  },
  {
    image: hep,
    code: 'HELS',
    name: 'Hautes Études en Lettres et Sciences Humaines',
    description: 'Maîtrisez les arts de la communication, de l\'enseignement et de la réflexion philosophique.',
    icon: BookOpen,
    gradient: 'from-accent-gold to-yellow-600',
    programs: Object.keys(programModules.HELS).length,
  },
];

const Programme = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const getSchoolPrograms = (schoolCode) => {
    const codeMap = { HEST: 'HEST', HECM: 'HECM', HELS: 'HELS' };
    return programModules[codeMap[schoolCode]] || {};
  };

  const openSchoolModal = (school) => {
    setSelectedSchool(school);
    setSelectedProgram(null);
  };

  const openProgramDetail = (programKey) => {
    setSelectedProgram(programKey);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/20 rounded-full mb-4">
            <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-primary-700 dark:text-primary-300 font-medium">Nos Formations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Explorez nos <span className="bg-gradient-to-r from-primary-600 to-accent-gold bg-clip-text text-transparent">Programmes</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Des formations complètes et spécialisées, conçues pour vous préparer aux métiers d'avenir
            avec un enseignement de qualité et un suivi personnalisé.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school, idx) => {
            const Icon = school.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => openSchoolModal(school)}
                className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-700 cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${school.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${school.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <img src={school.image} alt={school.code} className="w-12 h-12 rounded-lg object-cover shadow-md group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {school.code}
                  </h3>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    {school.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {school.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-700">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {school.programs} parcours disponibles
                    </span>
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${school.gradient} text-white font-medium transition-all duration-300 group-hover:shadow-lg`}>
                      Découvrir
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white dark:bg-dark-700 rounded-full p-2 shadow-lg">
                    <ChevronRight className={`w-5 h-5 bg-gradient-to-r ${school.gradient} bg-clip-text text-transparent`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {selectedSchool && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setSelectedSchool(null);
                setSelectedProgram(null);
              }}
            >
              <motion.div
                className="relative bg-white dark:bg-dark-800 rounded-3xl w-full max-w-7xl max-h-[95vh] overflow-hidden shadow-2xl"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`sticky top-0 z-20 bg-gradient-to-r ${selectedSchool.gradient} shadow-lg`}>
                  <div className="flex items-center justify-between p-6">
                    <motion.div
                      className="flex items-center gap-4"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                        <img src={selectedSchool.image} alt={selectedSchool.code} className="w-12 h-12 rounded-lg shadow-lg" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{selectedSchool.code}</h2>
                        <p className="text-white/90 text-sm md:text-base mt-1">{selectedSchool.name}</p>
                      </div>
                    </motion.div>
                    <motion.button
                      onClick={() => {
                        setSelectedSchool(null);
                        setSelectedProgram(null);
                      }}
                      className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110"
                      whileHover={{ rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-6 h-6 text-white" />
                    </motion.button>
                  </div>

                  {!selectedProgram && (
                    <motion.div
                      className="px-6 pb-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-white/80 text-sm">Choisissez un parcours pour découvrir les modules de formation</p>
                    </motion.div>
                  )}
                </div>

                <div className="overflow-y-auto max-h-[calc(95vh-140px)] p-6 md:p-8">
                  <AnimatePresence mode="wait">
                    {!selectedProgram ? (
                      <motion.div
                        key="programs-grid"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 gap-6"
                      >
                        {Object.entries(getSchoolPrograms(selectedSchool.code)).map(([key, program], idx) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group cursor-pointer bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-400"
                            onClick={() => openProgramDetail(key)}
                            whileHover={{ y: -5 }}
                          >
                            <div className="relative h-56 overflow-hidden">
                              <motion.img
                                src={program.cover}
                                alt={program.title}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.4 }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                              <div className="absolute bottom-4 left-4 right-4">
                                <motion.h3
                                  className="text-2xl font-bold text-white mb-2"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                >
                                  {program.title}
                                </motion.h3>
                              </div>
                              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ChevronRight className="w-5 h-5 text-white" />
                              </div>
                            </div>

                            <div className="p-6">
                              <div className="mb-6">
                                <div className="flex items-center gap-2 mb-4">
                                  <Sparkles className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                  <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Spécialisations</span>
                                </div>
                                <ul className="space-y-3">
                                  {program.specializations.map((spec, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 mt-1.5 flex-shrink-0" />
                                      <span className="leading-relaxed">{spec}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <motion.button
                                className={`w-full py-3.5 bg-gradient-to-r ${selectedSchool.gradient} text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                Voir les modules détaillés
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                              </motion.button>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="program-detail"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.button
                          onClick={() => setSelectedProgram(null)}
                          className="mb-8 flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-900 hover:bg-gray-200 dark:hover:bg-dark-700 text-primary-600 dark:text-primary-400 rounded-xl font-semibold transition-all duration-300"
                          whileHover={{ x: -5, scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ChevronRight className="w-5 h-5 rotate-180" />
                          Retour aux parcours
                        </motion.button>

                        {(() => {
                          const program = getSchoolPrograms(selectedSchool.code)[selectedProgram];
                          return (
                            <div>
                              <motion.div
                                className="mb-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                              >
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                  {program.title}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                  {program.specializations.map((spec, i) => (
                                    <motion.span
                                      key={i}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: i * 0.1 }}
                                      className={`px-4 py-2 bg-gradient-to-r ${selectedSchool.gradient} text-white rounded-full text-sm font-semibold shadow-md`}
                                    >
                                      {spec}
                                    </motion.span>
                                  ))}
                                </div>
                              </motion.div>

                              <div className="space-y-6">
                                {program.modules.map((module, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-gradient-to-br from-white to-gray-50 dark:from-dark-900 dark:to-dark-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                  >
                                    <div className="flex items-start gap-4 mb-6">
                                      <motion.div
                                        className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${selectedSchool.gradient} text-white flex items-center justify-center text-lg font-bold shadow-lg`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                      >
                                        {idx + 1}
                                      </motion.div>
                                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                                        {module.category}
                                      </h4>
                                    </div>

                                    <ul className="grid md:grid-cols-2 gap-4">
                                      {module.courses.map((course, i) => (
                                        <motion.li
                                          key={i}
                                          className="flex items-start gap-3 p-3 bg-white dark:bg-dark-950/50 rounded-lg"
                                          initial={{ opacity: 0, x: -20 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: 0.3 + i * 0.05 }}
                                        >
                                          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                          <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{course}</span>
                                        </motion.li>
                                      ))}
                                    </ul>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          );
                        })()}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Programme;
