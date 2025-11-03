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
                className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-700"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${school.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${school.gradient} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <img src={school.image} alt={school.code} className="w-12 h-12 rounded-lg object-cover shadow-md" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
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
                    <button
                      onClick={() => openSchoolModal(school)}
                      className={`group/btn flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${school.gradient} text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105`}
                    >
                      Découvrir
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedSchool && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedSchool(null);
                setSelectedProgram(null);
              }}
            >
              <motion.div
                className="bg-white dark:bg-dark-800 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`sticky top-0 z-10 bg-gradient-to-r ${selectedSchool.gradient} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={selectedSchool.image} alt={selectedSchool.code} className="w-12 h-12 rounded-lg shadow-lg" />
                      <div>
                        <h2 className="text-3xl font-bold">{selectedSchool.code}</h2>
                        <p className="text-white/90 text-sm mt-1">{selectedSchool.name}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedSchool(null);
                        setSelectedProgram(null);
                      }}
                      className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  {!selectedProgram ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(getSchoolPrograms(selectedSchool.code)).map(([key, program]) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="group cursor-pointer bg-gray-50 dark:bg-dark-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-500"
                          onClick={() => openProgramDetail(key)}
                        >
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={program.cover}
                              alt={program.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-xl font-bold text-white">{program.title}</h3>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="mb-4">
                              <div className="flex items-center gap-2 mb-3">
                                <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Spécialisations</span>
                              </div>
                              <ul className="space-y-2">
                                {program.specializations.map((spec, i) => (
                                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                    {spec}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <button className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                              Voir les modules
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => setSelectedProgram(null)}
                        className="mb-6 flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:gap-3 transition-all"
                      >
                        <ChevronRight className="w-5 h-5 rotate-180" />
                        Retour aux parcours
                      </button>

                      {(() => {
                        const program = getSchoolPrograms(selectedSchool.code)[selectedProgram];
                        return (
                          <div>
                            <div className="mb-8">
                              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                {program.title}
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {program.specializations.map((spec, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-8">
                              {program.modules.map((module, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="bg-gradient-to-r from-gray-50 to-blue-50/50 dark:from-dark-900 dark:to-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700"
                                >
                                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
                                      {idx + 1}
                                    </div>
                                    {module.category}
                                  </h4>
                                  <ul className="space-y-3">
                                    {module.courses.map((course, i) => (
                                      <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>{course}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
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
