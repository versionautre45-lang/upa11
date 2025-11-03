import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import sortieHecm from '../assets/sortieHecm.jpg';
import conferenceia from '../assets/iaConference.jpg';
import hack1 from '../assets/robo2.jpg';
import smatching from '../assets/sport.jpg';
import laureatAF from '../assets/laureatAF.jpg';
import tech from '../assets/market.jpg';
import conferenceOratoire from '../assets/conferenceOratoire.jpg'

const newsList = [
  { type: 'Événement', date: '30 Mai 2025', title: "Conférence sur l'art oratoire", description: "Une conférence exceptionnelle sur l'éloquence et l'authenticité.", image: conferenceOratoire, details: [
      "L'Université privée d'Ambohidratrimo a eu l'immense honneur d'acceilllir une CONFERENCE EXEPTIONNELLE",
      "Eloquence et authenticité : Trouver votre voix intérieur",
      "Opportunités exceptionnelle pour les jeunes étudiants qui seront l'avenir de demain.",  
      "Proposé par le duo le plus primé de Madagascar :",
      "Ny Avo RAZAFINDRAZAKA : champion du monde de Débat - La Haye 2024 / Double champion de Madagascar en Art Oratoire",  
      "Josie RAMANANTSOA : Championne du monde de Débat - La Haye 2024 / Championne de plaidoyer contre la corruption",  

    ]
  },
  { type: 'Actualité', date: '5 Mai 2025', title: 'Cérémonie de remise des diplômes 2025', description: 'Félicitations à tous nos diplômés de la promotion 2025 ! Découvrez les moments forts de la cérémonie.', image: sortieHecm, details: [
      "Discours du président de l'université.",
      "Remise symbolique des diplômes par faculté.",
      "Buffet de clôture et échanges entre alumni."
    ]
  },
  { type: 'Événement', date: '13 Avril 2025', title: 'Hackathon Inter-Universitaire', description: 'Participez à notre hackathon annuel et proposez des solutions technologiques innovantes.', image: hack1, details: [
      "Notre équipe de l'Université privée d'Ambohidratrimo a relevé le défi avec passion, énergie et esprit d'équipe avec nos deux équipes favorite : UPADEVSTORM et ZAYBACKIDEV.",
      "Des idées plein la  tête, des lignes de code jusqu'au bout de la nuit et surtout,.. une motivation sans faille !",
      "Durant ces 24 heures intenses, ils ont :",
      "Brainstormé sans relâche",
      "Défendu notre vision devant un jury exigeant",
      "Et surtout... vécu une experience humaine inoubliable",
      "L'innovation continue, et ce n'est que le début",
    ]
  },
  { type: 'Actualité', date: '08 Février 2025', title: 'Smatching', description: 'Première participation aux tournois national de Basket ball pour notre Université', image: smatching, details: [
      "Un grand encouragement à notre équipe",
      "Le tournois et les affrontements dureront 1 semaine",
      "Une victoire pour notre équipe"
    ]
  },
    { type: 'Actualité', date: '04 Février 2025', title: 'Championnat de lecture', description: 'Notre championne de lecture "ARIMALALA Fy Irina Anay "', image: laureatAF, details: [
      "Elle etait encore étudiante en 2ème année das la mention HECM",
      "L'Alliance Française avait organisé un championnat de lecture à l'Alliance française d'Antananarivo Ampefiloha",
      "Elle a gagné la première place du tournois. Felicitation Anay."
    ]
  },
];

const NewsCards = () => {
  const containerRef = useRef(null);
  const [openIdx, setOpenIdx] = useState(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.querySelector('div').offsetWidth + 16;
      containerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.querySelector('div').offsetWidth + 16;
      containerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventDrag = e => e.preventDefault();
    container.addEventListener('dragstart', preventDrag);

    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY,
          behavior: 'smooth'
        });
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      container.removeEventListener('dragstart', preventDrag);
      container.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <div className="py-8 p-8 bg-gray-100 relative dark:bg-gray-900 transition-all duration-700 ease-in-out">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-all duration-700 ease-in-out">Actualités & Événements</h1>
        <p className="text-gray-600 dark:text-gray-300 transition-all duration-700 ease-in-out">Restez informé des dernières nouvelles universitaires</p>
      </div>

      <div className="relative group ">
        <div
          ref={containerRef}
          className="flex overflow-x-auto p-2 scroll-smooth space-x-4 scrollbar-hide rounded-lg"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {newsList.map((news, idx) => (
            <div
              key={idx}
              className="min-w-[calc(100%/3)] flex-shrink-0 bg-white rounded-lg scroll-snap-start dark:bg-gray-800 shadow-md transition-all duration-700 ease-in-out"
            >
              <div className="relative">
                <img src={news.image} alt={news.title} className="w-full h-32 sm:h-40 object-cover rounded-t-lg" />
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">{news.type}</span>
              </div>
              <div className="p-2 sm:p-4 flex flex-col h-48">
                <time className="text-xs text-gray-500 mb-2 dark:text-gray-300 transition-all duration-700 ease-in-out">{news.date}</time>
                <h4 className="text-base sm:text-lg line-clamp-2 font-semibold text-gray-800 mb-2 truncate dark:text-gray-200 transition-all duration-700 ease-in-out">{news.title}</h4>
                <p className="text-xs sm:text-sm mt-1 text-gray-600 flex-grow line-clamp-3 dark:text-gray-300 transition-all duration-700 ease-in-out">{news.description}</p>
                <button
                  onClick={() => setOpenIdx(idx)}
                  className="mt-4 text-blue-500 font-medium inline-flex items-center hover:underline"
                >
                  Lire plus <span className="ml-1"><ArrowRight size={20} /></span>
                </button>
              </div>
            </div>
          ))}
          <div
              className="min-w-[calc(100%/3)] flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >

              <Link to="actualites">
                <h4 className='flex items-center justify-center w-full text-blue-500 font-bold hover:underline'>
                  Voir plus <ArrowRight size={20} />
                </h4>
              </Link>
            </div>
        </div>

        <button
          onClick={scrollLeft}
          className="hidden group-hover:flex absolute left-2 top-1/2 transform -translate-y-1/2 bg-white hover:text-blue-600 p-2 rounded-full shadow-md z-10 dark:bg-gray-900 transition-all duration-700 ease-in-out"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollRight}
          className="hidden group-hover:flex absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:text-blue-600 p-2 rounded-full shadow-md z-10 dark:bg-gray-900 transition-all duration-700 ease-in-out"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Popup details */}
      {openIdx !== null && (
        <div
          onClick={() => setOpenIdx(null)}
          className="fixed inset-0 bg-black bg-opacity-60 flex p-4 justify-center items-center z-50"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative"
          >
            <div className="flex justify-between items-center sticky p-3 z-10 top-0 w-full bg-white dark:bg-gray-800">      
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
                className="w-[99.9%] h-2/4 object-cover rounded mb-4 shadow-md dark:shadow-lg transition-all duration-700 ease-in-out"
                />


              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{newsList[openIdx].title}</h3>
              <time className="text-sm text-gray-500 dark:text-gray-300 mb-4 block">{newsList[openIdx].date}</time>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{newsList[openIdx].description}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                {newsList[openIdx].details.map((d,i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsCards;
