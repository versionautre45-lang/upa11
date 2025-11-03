import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, MapPin, User, BookOpen, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { mockSchedules, mockEvents } from '../data/mockCalendarData';

const MENTIONS = [
  { value: 'INFORMATIQUE', label: 'Informatique', color: 'from-blue-600 to-cyan-600' },
  { value: 'GENIE_CIVIL', label: 'Génie Civil', color: 'from-orange-600 to-red-600' },
  { value: 'GESTION', label: 'Gestion', color: 'from-green-600 to-emerald-600' },
  { value: 'COMMUNICATION', label: 'Communication', color: 'from-purple-600 to-pink-600' }
];

const LEVELS = ['L1', 'L2', 'L3', 'M1', 'M2'];
const DAYS = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI'];
const TIME_SLOTS = [
  { key: 'MATIN', label: '7h - 12h' },
  { key: 'APRES_MIDI', label: '13h - 17h' }
];

const Calendrier = () => {
  const [selectedMention, setSelectedMention] = useState('INFORMATIQUE');
  const [selectedLevel, setSelectedLevel] = useState('L1');
  const [schedules, setSchedules] = useState([]);
  const [events] = useState(mockEvents);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const filteredSchedules = mockSchedules.filter(
      schedule => schedule.mention === selectedMention &&
                  schedule.level === selectedLevel &&
                  schedule.is_available === true
    );
    setSchedules(filteredSchedules);
  }, [selectedMention, selectedLevel]);

  const getScheduleForSlot = (day, timeSlot) => {
    return schedules.find(s => s.day === day && s.time_slot === timeSlot);
  };

  const hasSchedules = schedules.length > 0;

  const selectedMentionData = MENTIONS.find(m => m.value === selectedMention);

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'ACADEMIQUE': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'ADMINISTRATIF': return 'bg-gray-100 text-gray-800 border-gray-300';
      case 'CULTUREL': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'SPORTIF': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const upcomingEvents = events
    .filter(event => new Date(event.event_date) >= new Date())
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <Navbar type="calendrier" />

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/20 rounded-full mb-4">
              <CalendarIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <span className="text-primary-700 dark:text-primary-300 font-medium">Calendrier Académique</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Emplois du Temps et <span className="bg-gradient-to-r from-primary-600 to-accent-gold bg-clip-text text-transparent">Événements</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Consultez les emplois du temps par mention et niveau, ainsi que les dates importantes de l'université
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-6 mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <BookOpen className="w-7 h-7 text-primary-600" />
                  Sélection du Parcours
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Mention
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {MENTIONS.map((mention) => (
                        <button
                          key={mention.value}
                          onClick={() => setSelectedMention(mention.value)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            selectedMention === mention.value
                              ? `bg-gradient-to-r ${mention.color} text-white border-transparent shadow-lg scale-105`
                              : 'bg-gray-50 dark:bg-dark-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-dark-700 hover:border-primary-300'
                          }`}
                        >
                          <span className="font-semibold">{mention.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Niveau
                    </label>
                    <div className="flex gap-3">
                      {LEVELS.map((level) => (
                        <button
                          key={level}
                          onClick={() => setSelectedLevel(level)}
                          className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all duration-300 ${
                            selectedLevel === level
                              ? 'bg-primary-600 text-white border-primary-600 shadow-lg scale-105'
                              : 'bg-gray-50 dark:bg-dark-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-dark-700 hover:border-primary-300'
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-6"
              >
                <div className={`flex items-center gap-3 mb-6 p-4 rounded-xl bg-gradient-to-r ${selectedMentionData.color}`}>
                  <BookOpen className="w-6 h-6 text-white" />
                  <h2 className="text-2xl font-bold text-white">
                    Emploi du Temps - {selectedMentionData.label} {selectedLevel}
                  </h2>
                </div>

                {loading ? (
                  <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Chargement...</p>
                  </div>
                ) : !hasSchedules ? (
                  <div className="text-center py-12">
                    <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      PAS DISPONIBLE
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      L'emploi du temps pour {selectedMentionData.label} {selectedLevel} n'est pas encore disponible.
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-dark-900">
                          <th className="border border-gray-300 dark:border-dark-700 p-3 text-left font-bold text-gray-900 dark:text-white">
                            Jour
                          </th>
                          {TIME_SLOTS.map(slot => (
                            <th key={slot.key} className="border border-gray-300 dark:border-dark-700 p-3 text-center font-bold text-gray-900 dark:text-white">
                              {slot.label}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {DAYS.map((day) => (
                          <tr key={day} className="hover:bg-gray-50 dark:hover:bg-dark-900/50 transition-colors">
                            <td className="border border-gray-300 dark:border-dark-700 p-3 font-semibold text-gray-900 dark:text-white">
                              {day.charAt(0) + day.slice(1).toLowerCase()}
                            </td>
                            {TIME_SLOTS.map(slot => {
                              const schedule = getScheduleForSlot(day, slot.key);
                              return (
                                <td key={slot.key} className="border border-gray-300 dark:border-dark-700 p-3">
                                  {schedule ? (
                                    <div className="space-y-2">
                                      <div className="flex items-start gap-2">
                                        <BookOpen className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                                        <span className="font-semibold text-gray-900 dark:text-white text-sm">
                                          {schedule.subject}
                                        </span>
                                      </div>
                                      {schedule.teacher && (
                                        <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                                          <User className="w-3 h-3" />
                                          {schedule.teacher}
                                        </div>
                                      )}
                                      {schedule.room && (
                                        <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                                          <MapPin className="w-3 h-3" />
                                          {schedule.room}
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <span className="text-gray-400 dark:text-gray-600 text-sm">-</span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <CalendarIcon className="w-6 h-6 text-primary-600" />
                  Événements à Venir
                </h3>

                {upcomingEvents.length === 0 ? (
                  <p className="text-gray-600 dark:text-gray-400 text-center py-8">
                    Aucun événement à venir
                  </p>
                ) : (
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div
                        key={event.id}
                        className={`p-4 rounded-xl border-2 ${getEventTypeColor(event.event_type)}`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-sm">{event.title}</h4>
                          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/50">
                            {event.event_type}
                          </span>
                        </div>
                        {event.description && (
                          <p className="text-xs mb-2 opacity-80">{event.description}</p>
                        )}
                        <div className="flex items-center gap-2 text-xs font-medium">
                          <Clock className="w-3 h-3" />
                          {formatDate(event.event_date)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Légende</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <span>Matin: 7h - 12h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <span>Après-midi: 13h - 17h</span>
                  </div>
                  <div className="pt-3 border-t border-white/30">
                    <p className="font-semibold mb-2">Types d'événements:</p>
                    <div className="space-y-1 text-xs">
                      <div>• Académique: Cours, examens</div>
                      <div>• Administratif: Inscriptions, vacances</div>
                      <div>• Culturel: Événements culturels</div>
                      <div>• Sportif: Compétitions sportives</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendrier;
