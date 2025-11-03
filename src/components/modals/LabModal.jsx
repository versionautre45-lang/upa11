import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LabModal({ data, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
    >
      <div className="flex justify-between items-center sticky p-5 z-10 top-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{data.title}</h3>
            <p className="text-sm text-white/90">Infrastructure étudiante</p>
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
          className="w-full h-96 object-cover rounded-xl mb-6 shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{data.description}</p>
        </motion.div>

        <div className="mb-4">
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Équipements et Services
          </h4>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            {data.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border-2 border-transparent hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg"
              >
                <div className="text-4xl mb-3 transition-transform group-hover:scale-110">{f.icon}</div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-2">{f.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}