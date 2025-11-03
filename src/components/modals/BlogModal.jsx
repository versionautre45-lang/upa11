import React from 'react';
import { X, Calendar, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogModal({ data, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white dark:bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
    >
      <div className="flex justify-between items-center sticky p-5 z-10 top-0 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div>
          <h3 className="text-2xl font-bold mb-1">{data.title}</h3>
          <div className="flex items-center gap-4 text-sm text-white/90">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{data.date}</span>
            </div>
            {data.views && (
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{data.views} vues</span>
              </div>
            )}
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
          src={data.src}
          alt={data.title}
          className="w-full h-80 object-cover rounded-xl mb-6 shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line">{data.content}</p>

          {data.contentHack1 && (
            <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line border-l-4 border-primary-500 pl-4 bg-gray-50 dark:bg-gray-900/50 py-4 rounded-r-lg">{data.contentHack1}</p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}