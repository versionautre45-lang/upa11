import React, { useState, useEffect } from 'react';
import welcomeImg1 from '../assets/upaSite.jpg';
import welcomeImg2 from '../assets/welcome.jpg';
import welcomeImg3 from '../assets/upasalle.jpg';
import welcomeImg4 from '../assets/VieEtudiante1.jpg';
import welcomeImg5 from '../assets/loisirSalle.jpg';
import welcomeImg6 from '../assets/infosalle.jpg';
import miniLogoUpa from '../assets/UPAlogo.jpg';

const Welcome = () => {
  const images = [welcomeImg1, welcomeImg2, welcomeImg3, welcomeImg4, welcomeImg5, welcomeImg6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex justify-center items-center py-6 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col items-center">
          <div className="md:flex-row flex flex-col items-center p-6 w-full gap-5">

            {/* Texte */}
            <div className="p-3 md:w-1/2">
              <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] text-[#2563EB] font-semibold mb-6">
                Bienvenue à l'Université Privée d'Ambohidratrimo
              </h1>
              <p className="text-[clamp(1rem,1.25vw,1.1rem)] text-gray-700 dark:text-gray-200 mb-4">
                Notre université offre un environnement stimulant où les étudiants développent leurs compétences et leur potentiel pour devenir les leaders de demain.
              </p>
              <p className="text-[clamp(1rem,1.25vw,1.1rem)] text-gray-700 dark:text-gray-200 mb-6">
                Avec des programmes académiques rigoureux, des professeurs expérimentés et des infrastructures modernes, nous nous engageons à fournir une éducation de qualité qui répond aux besoins du monde professionnel actuel.
              </p>
            </div>

            {/* Carrousel image de visite UpA */}
            <div className="relative w-full md:w-1/2 sm:h-[320px] h-[290px] rounded-md sm:rounded-xl shadow-lg overflow-hidden">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((img, i) => (
                  <div key={i} className="flex-shrink-0 w-full h-full">
                    <img
                      src={img}
                      alt={`Slide ${i}`}
                      className="w-full h-[320px]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Overlay logo */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 sm:p-5 p-2 opacity-0 hover:opacity-100 duration-500 transition-all ease-in-out">
                <img src={miniLogoUpa} alt="UPA Logo" className="w-12 sm:w-20 rounded" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
