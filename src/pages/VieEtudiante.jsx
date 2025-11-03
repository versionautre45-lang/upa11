import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import BlogModal from '../components/modals/BlogModal';
import LabModal from '../components/modals/LabModal';
import ClubModal from '../components/modals/ClubModal';

import laboScience from '../assets/infosalle.jpg';
import labLangues from '../assets/VieEtudiante2.jpg';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import blog1 from '../assets/robo2.jpg';

import gallery1 from '../assets/VieEtudiante.jpg';
import gallery2 from '../assets/malagasy.jpg';
import gallery3 from '../assets/malagasy2.jpg';
import gallery4 from '../assets/culture1.jpg';
import gallery5 from '../assets/malagache.jpg';
import gallery6 from '../assets/robo2.jpg';
import gallery7 from '../assets/robo1.jpg';
import gallery8 from '../assets/BDS.jpg';

import gallery9 from '../assets/integration1.jpg';
import gallery10 from '../assets/integration2.jpg';
import gallery11 from '../assets/integration3.jpg';
import gallery12 from '../assets/integration4.jpg';
import gallery13 from '../assets/integration5.jpg';

import club1Fond from '../assets/logoRE.jpg';
import club2Fond from '../assets/logoCC.png';
import club3Fond from '../assets/sport.jpg';
import club3basket1 from '../assets/BDS.jpg';
import club3basket2 from '../assets/basket2.jpg';
import Navbar from '../components/Navbar';

const labs = [
  {
    id: 'lab1',
    image: laboScience,
    title: 'Science & Technologie',
    description: 'Un laboratoire équipé des technologies pour la recherche en informatique et tout ce qui va avec.',
    features: [
      { icon: '🔬', title: 'IA & Robotique', description: 'Plateformes de développement IA' },
      { icon: '⚛️', title: 'Réseaux', description: 'Wi-Fi et câblage pour apprentissage' },
      { icon: '💻', title: 'Informatique', description: 'Salle serveur haute performance' }
    ]
  },
  {
    id: 'lab2',
    image: labLangues,
    title: 'Centre Linguistique',
    description: "Un espace moderne dédié à l'apprentissage des langues avec des technologies de pointe.",
    features: [
      { icon: '🌐', title: '3 Langues', description: 'Cours de langues étrangères' },
      { icon: '📝', title: 'TOEFL Prep', description: 'Préparation aux tests' },
      { icon: '📚', title: 'Bibliothèque', description: 'Ressources multilingues' }
    ]
  }
];

const clubs = [
  {
    id: 'club1',
    image: club1Fond,
    title: 'Club Entrepreneuriat',
    description: "Encourage l'esprit d'entreprise chez les étudiants avec ateliers et mentorat.",
    activities: ['Startup Weekend', 'Pitch Competitions', 'Mentorat', "Visites d'entreprises"]
  },
  {
    id: 'club2',
    image: club2Fond,
    title: 'Club Culture',
    description: 'Promouvoir la diversité culturelle à travers événements et échanges.',
    activities: ['Soirées culturelles', 'Ateliers artistiques', 'Excursions', 'Festivals']
  },
  {
    id: 'club3',
    image: club3Fond,
    image1: club3basket1,
    image2: club3basket2,
    title: 'Club Basket',
    description: 'L’esprit sportif de nos étudiants.',
    liensFB: 'https://www.facebook.com/profile.php?id=61569998111954',
    liensIG: 'https://www.instagram.com/bde_upa/',
    activities: ['Matchs inter-classes', 'Entraînements', 'Excursions']
  }
];

const galleryImages = [
  { id: 1, src: gallery1, title: 'Journée culturelle', description: 'Célébration des traditions malgaches' },
  { id: 2, src: gallery2, title: 'Semaine internationale', description: 'Étudiants en costume traditionnel' },
  { id: 3, src: gallery3, title: 'Festival des arts', description: 'Performance étudiante' },
  { id: 4, src: gallery4, title: 'Conférence annuelle', description: 'Intervenants internationaux' },
  { id: 5, src: gallery5, title: 'Journée culturelle', description: 'Traditions malgaches' },
  { id: 6, src: gallery6, title: 'Hackathon 2025', description: 'Participants au hackathon' },
  { id: 7, src: gallery7, title: 'Hackathon 2025 (suite)', description: 'Participants au hackathon' },
  { id: 8, src: gallery8, title: 'Club Basket UPA', description: 'Coach et mentor du club' },
  { id: 9, src: gallery9, title: 'Journée d’intégration 2025', description: 'Animations et jeux' },
  { id: 10, src: gallery10, title: 'Journée d’intégration 2025', description: 'Jeux encore plus excitants' },
  { id: 11, src: gallery11, title: 'Journée d’intégration 2025', description: 'Le défi' },
  { id: 12, src: gallery12, title: 'Journée d’intégration 2025', description: 'Ambiance festive' },
  { id: 13, src: gallery13, title: 'Journée d’intégration 2025', description: 'La joie en images' },
];

const blogArticles = [
  {
    id: 1,
    src: blog1,
    title: 'Hackathon',
    date: '01/05/2025',
    excerpt: 'Aperçu…',
    content:
      "Événement organisé par SmartOne pour un tournoi inter-universitaire en informatique. Notre université a envoyé deux représentants.",
    contentHack1: 'Nos deux équipes mixtes : UPADEVSTORM et ZAY BACK IDEV.'
  },
  {
    id: 2,
    src: gallery3,
    title: 'Taom-baovao Malagasy',
    date: '02/05/2025',
    excerpt: 'Aperçu…',
    content:
      "À l’occasion du Nouvel An malgache, nos étudiants ont organisé des exposés, des spectacles artistiques et diverses activités pour célébrer."
  },
  {
    id: 3,
    src: gallery4,
    title: 'Conférence annuelle',
    date: '03/05/2025',
    excerpt: 'Aperçu…',
    content:
      "Des conférences sur divers sujets ont eu lieu sur notre campus pour sensibiliser, partager de nouvelles connaissances et favoriser des partenariats."
  }
];

const VieEtudiante = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  const openModal = (content) => setActiveModal(content);
  const closeModal = () => setActiveModal(null);

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
    <>
      <Navbar type="vieEtudiante" />

      <motion.div
        id="vie-etudiant"
        className="px-4 py-8 dark:bg-gray-900 transition-all duration-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* En-tête */}
        <header className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-pink-500 bg-clip-text text-transparent"
          >
            Vie Étudiante
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 text-lg text-gray-900 dark:text-gray-400 transition-all duration-700 ease-in-out"
          >
            Découvrez l'écosystème dynamique de notre campus universitaire
          </motion.p>
        </header>

        {/* Derniers Articles du Blog */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Articles de Blog
          </h2>

          <div className="relative group">
          <div
            ref={containerRef} 
            className="flex overflow-x-auto scroll-smooth space-x-4 scrollbar-hide p-2 rounded-lg"
            style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
          >
            {blogArticles.map((article) => (
              <div
                key={article.id}
                className="min-w-[calc(100%/3)] flex-shrink-0 bg-white rounded-lg scroll-snap-start dark:bg-gray-800 shadow-md transition-all duration-700 ease-in-out"
              >
                <img
                  src={article.src}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />

                <div className="p-3">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Publié le {article.date}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 flex-grow">
                    {article.excerpt}
                  </p>
                  <button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded self-start"
                    onClick={() => openModal({ type: 'blog', ...article })}
                    >
                    Lire plus
                  </button>
                </div>

              </div>
            ))}
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
        </section>

        {/* Nos Laboratoires */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Nos Laboratoires
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {labs.map((lab) => (
              <motion.div
                key={lab.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden flex flex-col"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {lab.title}
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 flex-grow">
                    {lab.description}
                  </p>
                  <button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded self-start"
                    onClick={() => openModal({ type: 'lab', ...lab })}
                  >
                    En savoir plus
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Clubs Étudiants */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Clubs Étudiants
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {clubs.map((club) => (
              <motion.div
                key={club.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden flex flex-col"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={club.image}
                  alt={club.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {club.title}
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 flex-grow">
                    {club.description}
                  </p>
                  <button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded self-start"
                    onClick={() => openModal({ type: 'club', ...club })}
                  >
                    Découvrir
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Galerie Photo */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Galerie Photo
          </h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img) => (
              <motion.div
                key={img.id}
                className="relative rounded overflow-hidden cursor-pointer shadow"
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 hover:opacity-100 transition">
                  {img.title}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* popup */}
        <AnimatePresence>
          {activeModal && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative w-full max-w-5xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                {activeModal.type === 'blog' && (
                  <BlogModal data={activeModal} onClose={closeModal} />
                )}
                {activeModal.type === 'lab' && (
                  <LabModal data={activeModal} onClose={closeModal} />
                )}
                {activeModal.type === 'club' && (
                  <ClubModal data={activeModal} onClose={closeModal} />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* popup galerie */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-3xl w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-semibold text-white">
                    {selectedImage.title}
                  </h4>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-white text-2xl"
                  >
                    <X size={24} />
                  </button>
                </div>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full object-contain rounded mb-4"
                />
                {selectedImage.description && (
                  <p className="mt-4 text-center text-white">
                    {selectedImage.description}
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default VieEtudiante;