import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import heroImg from '../assets/hero.png';
import Navbar from '../components/Navbar';

const accordionData = [
  {
    title: "Condition d'admission",
    info: [
      "Titulaire d'un baccalauréat ou d'un diplôme de son année précédente pour les transferts :",
      [
        "HECM : baccalauréat toute série",
        "HEST : baccalauréat scientifique",
        "HELS : baccalauréat toute série",
      ],
      "Réussir les tests de niveaux",
    ],
  },
  {
    title: "Dossier à fournir",
    info: [
      "Un (01) bulletin d'acte de naissance d'une validité de moins de 3 mois",
      "Un (01) certificat de résidence datant de moins de 3 mois",
      "Une (01) photocopie du CIN certifié si l'étudiant est majeur",
      "Trois (03) photos d'identité récentes",
      "Une (01) photocopie certifié du relevé de notes du baccalauréat",
      "Une (01) fiche d'inscription dûment remplie et signée (fournie par l'université)",
      "Un carton chemise en fonction des mentions :",
      [
        "HECM : Rose",
        "HEST informatique : Bleu",
        "HEST Génie civil : Jaune",
        "HESL : Vert",
      ],
    ],
  },
  {
    title: "Frais de scolarité",
    info: [
      "Les frais de scolarités varient selon le niveau de l'étudiant :", 
      [
        "- Droit d'inscription au début de l'année : 100.000 Ar",
        "- Frais de scolarité pour les niveaux en Licence (L1, L2, L3) : 170.000 Ar par mois", 
        "- Frais de scolarité pour les niveaux en Master (M1, M2) : 250.000 Ar par mois"
      ],
      "Paiement par Mvola",
      "Plus d'Informations, contacter le bureau de l'administration",
    ],
  },
];


const Admission = () => {
  const urlFormulaireInscription = "https://forms.gle/tMZPtikWAHmnTBft6";

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>

    <Navbar type="admission"/>

    <div className='bg-gray-100 dark:bg-gray-900'>

      <div className="flex flex-col max-w-5xl mx-auto p-6 h-fit overflow-y-auto">

        <header className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-pink-500 bg-clip-text text-transparent"
          >
            Formulaire d'Adhésion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-2 text-gray-700 dark:text-gray-300"
          >
            Merci de remplir vos informations pour rejoindre notre université et participer aux concours d'entrée.
          </motion.p>
        </header>

        {/* Accordion cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 space-y-4"
        >
          {accordionData.map(({ title, info }, index) => (
            <div key={index} className="border rounded-lg shadow-md bg-white dark:bg-gray-800">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full relative flex items-center px-4 py-3 focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                <div className="absolute right-4">
                  <motion.svg
                    animate={{ rotate: openIndex === index ? -90 : 90 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </div>
              </button>

              {/* Contenu */}
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden px-8 pb-2 text-gray-700 dark:text-gray-300"
              >
                <ul className="list-disc list-inside">
                  {info.map((line, i) =>
                    Array.isArray(line) ? (
                      <ul key={i} className="list-circle list-inside ml-6">
                        {line.map((subline, j) => (
                          <li key={j}>{subline}</li>
                        ))}
                      </ul>
                    ) : (
                      <li key={i}>{line}</li>
                    )
                  )}
                </ul>

              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* QR Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="mt-10 shadow-lg rounded-lg p-6 text-center"
          style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
        >
          <h2 className="text-2xl font-bold text-gray-200 dark:text-white mb-4">
            Accès au Formulaire
          </h2>
          
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="bg-white p-3 rounded-lg shadow-inner hover:scale-[1.08] transition-all duration-500 ease-in-out ">
              <QRCodeSVG 
                value={urlFormulaireInscription} 
                size={150}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
                includeMargin={false}
              />
            </div>
            
            <p className="text-gray-200 dark:text-gray-300 font-semibold max-w-md">
              Scannez ce QR Code pour accéder au formulaire d'inscription.
            </p>
            <p className="text-gray-200 dark:text-gray-300 font-semibold max-w-md">Ou</p>
            
            <a 
              href={urlFormulaireInscription} 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-200 dark:text-blue-300 hover:underline font-semibold flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              Accéder au formulaire via ce lien
            </a>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Admission;
