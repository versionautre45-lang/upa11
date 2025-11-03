import React from 'react'
import BNI from '../assets/BNI.jpg';
import Nea from '../assets/Nea.jpg';
import mvola from '../assets/mvola.jpg';
import yas from '../assets/Yas.jpg';
import edm from '../assets/edm.jpg';
import oceantrade from '../assets/oceantrade.jpg';
import firstimmo from '../assets/firstimmo.jpg';
import axian from '../assets/axian.jpg';
import LMM from '../assets/LMM.PNG';
import jovena from '../assets/jovena.jpg';
import viseo from '../assets/viseo.jpg';
import inviso from '../assets/inviso.jpg';
import sipromad from '../assets/sipromad.jpg';

const Partenariat = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Nos partenaires</h1>     
        </div>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
        {[BNI, Nea, mvola, yas, edm, oceantrade, firstimmo, axian, LMM, jovena, viseo, inviso, sipromad].map((partner, index) => (
          <div key={index} className="flex items-center justify-center p-4 rounded-lg shadow-md">
            <img src={partner} alt={`Partenaire ${index + 1}`} className="w-24 h-20 sm:w-32 sm:h-32 rounded-sm sm:rounded-lg object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partenariat;