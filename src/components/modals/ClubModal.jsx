import React from 'react';
import { X, Users, Activity, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';

export default function ClubModal({ data, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
    >
      <div className="flex justify-between items-center sticky p-5 z-10 top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{data.title}</h3>
            <p className="text-sm text-white/90">Club étudiant</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-8 overflow-y-auto max-h-[calc(85vh-100px)]">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          src={data.image}
          alt={data.title}
          className="w-full h-80 object-cover rounded-xl mb-6 shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{data.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h4 className="font-bold text-xl text-gray-800 dark:text-gray-200">Nos Activités</h4>
          </div>
          <ul className="space-y-3">
            {data.activities.map((a, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <div className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 mt-2 flex-shrink-0"></div>
                <span className="text-base">{a}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {data.image1 && data.image2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-2 gap-4 mb-6"
          >
            <img src={data.image1} alt={`${data.title} visuel 1`} className="w-full h-72 object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow" />
            <img src={data.image2} alt={`${data.title} visuel 2`} className="w-full h-72 object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow" />
          </motion.div>
        )}

        {(data.liensFB || data.liensIG) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6"
          >
            <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-4">
              Suivez-nous sur les réseaux sociaux
            </h4>
            <div className="flex items-center gap-4">
              {data.liensFB && (
                <a
                  href={data.liensFB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-xl hover:scale-110 transition-all"
                >
                  <img src={facebook} alt="Facebook" className='w-8 h-8' />
                </a>
              )}
              {data.liensIG && (
                <a
                  href={data.liensIG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-xl hover:scale-110 transition-all"
                >
                  <img src={instagram} alt="Instagram" className='w-8 h-8' />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}