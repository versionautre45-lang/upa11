import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { newsList } from '../data/newsList';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const News = () => {
    const [openIdx, setOpenIdx] = useState(null);
    
  return (
       <>      
    <Navbar type="listeNews"/>

    <motion.div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <motion.h1 className="text-4xl text-center mb-10 md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-pink-500 bg-clip-text text-transparent">Toutes les actualités & événements</motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsList.map((news, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300"
          >
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">{news.type}</span>
              <time className="block text-xs text-gray-500 mt-1">{news.date}</time>
              <h3 className="text-lg font-semibold mt-2 text-gray-800 dark:text-white">{news.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{news.description}</p>
              <button
                onClick={() => setOpenIdx(idx)}
                className="mt-3 text-blue-500 flex gap-1 items-center text-sm font-medium hover:underline"
              >
                Lire plus <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {openIdx !== null && (
        <div
          onClick={() => setOpenIdx(null)}
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
          >
          <div className="flex justify-between items-center sticky top-0 p-3 z-10 w-full bg-white dark:bg-gray-800">            
            <span className=" bg-blue-500 text-white text-xs px-2 py-1 rounded">{newsList[openIdx].type}</span>
              <button
                onClick={() => setOpenIdx(null)}
                className="absolute top-3 right-3 text-gray-500"
              >
                <X size={27} className='' />
              </button>
            </div>

          <div className="p-6">
            <img
              src={newsList[openIdx].image}
              alt={newsList[openIdx].title}
              className="w-[99.9%] h-full object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{newsList[openIdx].title}</h3>
            <time className="block text-sm text-gray-500 dark:text-gray-300 mb-4">{newsList[openIdx].date}</time>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{newsList[openIdx].description}</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              {newsList[openIdx].details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      )}
    </motion.div>

     </> 
  )
}

export default News
