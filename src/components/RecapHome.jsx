import React, { useState } from 'react';
import logo from '../assets/logo.png';
import calendarImg from '../assets/calendrier.jpg';
import libraryImg from '../assets/biblio1.jpg';
import axianLogo from '../assets/axian.PNG';
import axianPartenariat from '../assets/axianPartenariat.jpg';
import welcomeImg from '../assets/sortieHecm.jpg';
import miniLogoUpa from '../assets/UPAlogo.jpg';
import toque from '../assets/toque.png';
import calendrier from '../assets/calendrier.png';
import biblio from '../assets/livre.png';
import job from '../assets/job.png';
import toujoursPlusHaut from '../assets/toujoursPlusHaut.PNG';

import 'react-calendar/dist/Calendar.css';
import { X } from 'lucide-react';

const cards = [
  {
    icon: toque,
    title: 'Admission',
    description: "Procédure d'admission et conditions d'entrée",
    details: [
      "Remplir le formulaire en ligne ou physique avant la date limite.",
      "Fournir les relevés de notes officiels et doit être titulaire d'un BaccLaureat.",    
      "Possibilité d'admission sur concours ou sur dossier académique solide."
    ]
  },
  {
    icon: calendrier,
    title: 'Calendrier',
    description: 'Dates importantes et événements à venir',
    events: [
      { date: new Date(2025, 10, 10), label: 'Rentrée universitaire pour les L1' },
      { date: new Date(2026, 0, 15), label: 'Examens semestriels' },
      { date: new Date(2026, 5, 30), label: 'Voyages d’études' },
      { date: new Date(2026, 7, 15), label: 'Début des stages' }
    ],
    info: "Les examens semestriels ont lieu en janvier et juin. Les sessions de stage durent généralement de juillet à Août."
  },
  {
    icon: biblio,
    title: 'Bibliothèque',
    description: 'Ressources et partenariats',
    categories: ['Sciences', 'Informatique', 'Management', 'Philosophie', 'Bande dessinée', 'Romances', 'Littérature', 'Arts'],
    partnership: 'La bibliothèque de l’Université Privée d’Ambohidratrimo est un espace essentiel dédié à l’apprentissage, à la recherche et à la culture académique. Ouverte aux étudiants, enseignants et chercheurs de l’université, elle propose un large éventail de ressources pédagogiques et scientifiques dans divers domaines : sciences, droit, économie, lettres, technologie, etc.'
  },
  {
    icon: job,
    title: 'Carrières et Partenariats',
    description: 'Opportunités d’emploi et stages',
    details: [
      "Accès à la plateforme de stages Axian Group Madagascar.",
      "Forums entreprises annuels avec Axian et ses filiales.",
      "Mentorat personnalisé par des experts du Groupe.",
      "Réseau alumni actif pour insertion professionnelle rapide."
    ],
    partners: [axianLogo]
  }
];

const RecapHome = () => {
  const [openCard, setOpenCard] = useState(null);
  // const [date, setDate] = useState(new Date());

  return (
    <section className="bg-blue-50 py-12 dark:bg-gray-800 transition-all duration-700 ease-in-out">
      <div className="max-w-4xl mx-auto px-6 text-center mb-8">
        <h2 className="text-[clamp(1.8rem,2.5vw,2.5rem)] font-bold text-blue-600 mb-4">Accès Rapides</h2>
        <p className="text-gray-700 text-base dark:text-gray-400 transition-all duration-700 ease-in-out">
          Trouvez rapidement les informations essentielles dont vous avez besoin.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900 duration-700 dark:shadow-xl ease-in-out"
          >
            <img src={card.icon} alt="" className='w-16 mb-4' />
            <h3 className="text-lg font-semibold text-gray-800 mb-2 dark:text-gray-200">{card.title}</h3>
            <p className="text-gray-600 text-sm dark:text-gray-400 mb-4">{card.description}</p>
            <button
              className="mt-4 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => setOpenCard(idx)}
            >
              Accéder
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {openCard !== null && (
        <div onClick={() => setOpenCard(null)} className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-3">
          <div onClick={e => e.stopPropagation()} className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-xl relative">
            <div className="flex justify-between items-center sticky px-6 py-3 z-10 top-0 w-full bg-white dark:bg-gray-900">
              <h4 className="text-xl font-bold text-blue-700">{cards[openCard].title}</h4>
              <button
                onClick={() => setOpenCard(null)}
                className=" text-gray-500"
              >
                <X size={24} />
              </button>
            </div>

          <div className="px-6 py-3 space-y-4">

            {openCard === 0 && (
              <>  {/* Admissions */}
                <div className="relative flex-1">
                  <img src={welcomeImg} alt="Calendrier" className="w-[99.9%] h-56 object-cover rounded mb-4" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 opacity-0 hover:opacity-100 duration-500 transition-all ease-in-out">
                        <img src={miniLogoUpa} alt="" className='w-16 rounded' />
                    </div>
                </div>

                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  Pour intégrer notre université, vous devez répondre à un ensemble de conditions professionnelles rigoureuses afin d’assurer votre réussite académique et professionnelle.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm ">
                  {cards[openCard].details.map((item,i)=><li key={i}>{item}</li>)}
                </ul>
                <img src={toujoursPlusHaut} alt="Toujours plus haut" className='rounded mt-3' />

              </>
            )}

            {openCard === 1 && (
              <>  {/* Calendrier */}
                <img src={calendarImg} alt="Calendrier" className="w-[99.9%] h-72 object-cover rounded mb-4" />
                <p className="mb-4 text-gray-700 dark:text-gray-300 text-sm">Voici les dates importantes et événements à venir pour l'année universitaire :</p>                
                <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300 text-sm">
                  {cards[openCard].events.map((e,i)=><li key={i}>{e.date.toLocaleDateString()} : {e.label}</li>)}
                </ul>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{cards[openCard].info}</p>
                <img src={toujoursPlusHaut} alt="Toujours plus haut" className='rounded mt-3' />
              </>
            )}

            {openCard === 2 && (
              <>  {/* Bibliothèque */}
                <img src={libraryImg} alt="Bibliothèque" className="w-[99.9%] h-80 object-cover rounded mb-4" />
                <p className="mb-4 text-gray-700 dark:text-gray-300 text-sm">Notre bibliothèque offre un large éventail de ressources pour soutenir votre apprentissage et vos recherches.</p>
                <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Catégories de livres</h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    La bibliothèque de l’Université Privée d’Ambohidratrimo est un espace essentiel dédié à l’apprentissage, à la recherche et à la culture académique. Ouverte aux étudiants, enseignants et chercheurs de l’université, elle propose un large éventail de ressources pédagogiques et scientifiques dans divers domaines : sciences, droit, économie, lettres, technologie, etc.
                  </p>
                <div className="flex items-center justify-center gap-6 mt-3">
                  <img src={logo} alt="Partenariat AF" className="w-20 object-cover rounded-sm mb-4" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {cards[openCard].categories.map((cat,i)=>(
                    <div key={i} className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm text-gray-700 dark:text-gray-300">
                      {cat}
                    </div>
                  ))}
                </div>
                <img src={toujoursPlusHaut} alt="Toujours plus haut" className='rounded mt-3' />
              </>
            )}

            {openCard === 3 && (
              <>  {/* Carrières */}
                <div className="flex justify-center gap-4 mb-4">
                  <img src={axianLogo} alt="Axian Group" className="w-24" />
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300 text-sm">
                  Notre université collabore avec Axian Group pour offrir à nos étudiants des opportunités de stages et d'emplois dans divers secteurs.
                </p>
                <p className="mb-4 text-gray-700 dark:text-gray-300 text-sm">
                  Elle compte aujourd hui 32 entreprises. Grâce à ce partenariat, vous aurez accès à des offres de stages exclusives et à un réseau professionnel solide.
                </p>
                  <img src={axianPartenariat} alt="Axian Group" className="rounded w-[99.9%] mb-4" />
                <p className="mb-4 text-gray-700 dark:text-gray-300 text-sm">
                  Voici quelques-unes des opportunités que nous offrons :
                </p>

                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  {cards[openCard].details.map((item,i)=><li key={i}>{item}</li>)}
                </ul>
                <img src={toujoursPlusHaut} alt="Toujours plus haut" className='rounded mt-3' />
              </>
            )}
          </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default RecapHome;
