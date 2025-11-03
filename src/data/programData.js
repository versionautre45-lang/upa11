import webCover from '../assets/infoPic.jpg';
import civilCover from '../assets/genieCivil.jpg';
import philoCover from '../assets/VieEtudiante3.jpg';
import hepCover from '../assets/VieEtudiante1.jpg';
import PedagoCover from '../assets/VieEtudiante2.jpg';
import comptaCover from '../assets/compta.jpg';
import affaireCover from '../assets/affaire.jpg';
import marketCover from '../assets/market.jpg';

export const programModules = {
  HEST: {
    informatique: {
      title: 'Informatique',
      cover: webCover,
      specializations: [
        'Développement Web & Mobile',
        'Génie Logiciel',
        'Administration Systèmes & Réseaux'
      ],
      modules: [
        {
          category: 'Développement',
          courses: [
            'Programmation Orientée Objet (Java, Python, C++)',
            'Développement Web Full Stack (HTML, CSS, JavaScript, React, Node.js)',
            'Développement Mobile (React Native, Flutter)',
            'Frameworks & Bibliothèques modernes',
            'Architecture MVC et Design Patterns'
          ]
        },
        {
          category: 'Base de Données & Backend',
          courses: [
            'Conception et Modélisation de Bases de Données',
            'SQL & NoSQL (MySQL, PostgreSQL, MongoDB)',
            'Administration de Bases de Données',
            'API REST & GraphQL',
            'Sécurité des Bases de Données'
          ]
        },
        {
          category: 'Systèmes & Réseaux',
          courses: [
            'Administration Systèmes Linux/Windows',
            'Réseaux informatiques & Protocoles TCP/IP',
            'Sécurité des Systèmes d\'Information',
            'Cloud Computing (AWS, Azure, GCP)',
            'DevOps & CI/CD'
          ]
        },
        {
          category: 'Génie Logiciel',
          courses: [
            'Analyse et Conception de Systèmes',
            'UML & Méthodes Agiles (Scrum, Kanban)',
            'Tests et Qualité Logicielle',
            'Gestion de Projet Informatique',
            'Maintenance et Evolution des Applications'
          ]
        }
      ]
    },
    genieCivil: {
      title: 'Génie Civil',
      cover: civilCover,
      specializations: [
        'Bâtiment & Travaux Publics',
        'Architecture',
        'Génie Urbain'
      ],
      modules: [
        {
          category: 'Structures & Matériaux',
          courses: [
            'Résistance des Matériaux',
            'Béton Armé et Précontraint',
            'Structures Métalliques',
            'Mécanique des Sols',
            'Matériaux de Construction'
          ]
        },
        {
          category: 'Conception & Dessin',
          courses: [
            'Dessin Technique & DAO (AutoCAD, Revit)',
            'Conception Architecturale',
            'Plans d\'Exécution',
            'BIM (Building Information Modeling)',
            'Modélisation 3D'
          ]
        },
        {
          category: 'Travaux Publics',
          courses: [
            'Routes et Voiries',
            'Ouvrages d\'Art (Ponts, Tunnels)',
            'Hydraulique et Assainissement',
            'Topographie et Géomètres',
            'Terrassements et Fondations'
          ]
        },
        {
          category: 'Gestion de Projet',
          courses: [
            'Management de Projet BTP',
            'Métré et Devis',
            'Planning et Ordonnancement',
            'Droit de la Construction',
            'Développement Durable dans le BTP'
          ]
        }
      ]
    }
  },
  HECM: {
    management: {
      title: 'Management et Administration d\'Entreprise',
      cover: affaireCover,
      specializations: [
        'Management Stratégique',
        'Gestion des Ressources Humaines',
        'Entrepreneuriat'
      ],
      modules: [
        {
          category: 'Management Fondamental',
          courses: [
            'Principes du Management',
            'Gestion Stratégique d\'Entreprise',
            'Leadership et Conduite du Changement',
            'Prise de Décision et Résolution de Problèmes',
            'Management des Équipes'
          ]
        },
        {
          category: 'Gestion des Ressources Humaines',
          courses: [
            'Gestion du Personnel et Paie',
            'Recrutement et Gestion des Talents',
            'Formation et Développement RH',
            'Droit du Travail',
            'Communication Interne et Motivation'
          ]
        },
        {
          category: 'Entrepreneuriat & Innovation',
          courses: [
            'Création et Gestion d\'Entreprise',
            'Business Plan et Étude de Marché',
            'Innovation et Créativité',
            'Gestion de Projet',
            'Stratégies de Croissance'
          ]
        },
        {
          category: 'Économie & Droit',
          courses: [
            'Économie d\'Entreprise',
            'Microéconomie et Macroéconomie',
            'Droit des Affaires',
            'Droit Commercial',
            'Fiscalité d\'Entreprise'
          ]
        }
      ]
    },
    marketing: {
      title: 'Marketing et Commerce International',
      cover: marketCover,
      specializations: [
        'Marketing Digital',
        'Commerce International',
        'Communication & Publicité'
      ],
      modules: [
        {
          category: 'Marketing Stratégique',
          courses: [
            'Fondamentaux du Marketing',
            'Études de Marché et Comportement du Consommateur',
            'Stratégie de Marque et Positionnement',
            'Marketing Mix (4P)',
            'Marketing Relationnel'
          ]
        },
        {
          category: 'Marketing Digital',
          courses: [
            'Marketing des Réseaux Sociaux (Social Media)',
            'SEO et Référencement Web',
            'Publicité en Ligne (Google Ads, Facebook Ads)',
            'Email Marketing et Automation',
            'Analytics et Mesure de Performance'
          ]
        },
        {
          category: 'Commerce International',
          courses: [
            'Techniques du Commerce International',
            'Import-Export et Douanes',
            'Négociation Commerciale Internationale',
            'Incoterms et Logistique Internationale',
            'Financement du Commerce International'
          ]
        },
        {
          category: 'Communication & Publicité',
          courses: [
            'Communication d\'Entreprise',
            'Stratégies Publicitaires',
            'Relations Publiques',
            'Création de Contenu et Copywriting',
            'Événementiel et Marketing Expérientiel'
          ]
        }
      ]
    },
    finance: {
      title: 'Finance et Comptabilité',
      cover: comptaCover,
      specializations: [
        'Comptabilité Générale',
        'Audit et Contrôle de Gestion',
        'Finance d\'Entreprise'
      ],
      modules: [
        {
          category: 'Comptabilité',
          courses: [
            'Comptabilité Générale',
            'Comptabilité Analytique',
            'Comptabilité des Sociétés',
            'Consolidation des Comptes',
            'Normes Comptables (IFRS, OHADA)'
          ]
        },
        {
          category: 'Finance d\'Entreprise',
          courses: [
            'Analyse Financière',
            'Gestion de Trésorerie',
            'Gestion des Investissements',
            'Évaluation d\'Entreprise',
            'Marchés Financiers'
          ]
        },
        {
          category: 'Contrôle & Audit',
          courses: [
            'Contrôle de Gestion',
            'Audit Financier',
            'Audit Interne et Externe',
            'Gestion des Risques Financiers',
            'Tableaux de Bord et Indicateurs de Performance'
          ]
        },
        {
          category: 'Fiscalité & Droit',
          courses: [
            'Fiscalité d\'Entreprise',
            'TVA et Impôts Directs',
            'Optimisation Fiscale',
            'Droit Fiscal',
            'Déclarations Fiscales'
          ]
        }
      ]
    }
  },
  HELS: {
    journalisme: {
      title: 'Communication et Journalisme',
      cover: hepCover,
      specializations: [
        'Journalisme Multimédia',
        'Communication d\'Entreprise',
        'Relations Publiques'
      ],
      modules: [
        {
          category: 'Journalisme',
          courses: [
            'Techniques de Rédaction Journalistique',
            'Enquête et Investigation',
            'Journalisme Web et Multimédia',
            'Reportage Photo et Vidéo',
            'Déontologie et Éthique Journalistique'
          ]
        },
        {
          category: 'Communication Digitale',
          courses: [
            'Community Management',
            'Stratégies de Communication Digitale',
            'Production de Contenu Multimédia',
            'Podcasting et Webinaires',
            'Montage Vidéo et Audio'
          ]
        },
        {
          category: 'Relations Publiques',
          courses: [
            'Gestion de l\'Image de Marque',
            'Relations Presse',
            'Communication de Crise',
            'Organisation d\'Événements',
            'Lobbying et Plaidoyer'
          ]
        },
        {
          category: 'Médias & Société',
          courses: [
            'Histoire des Médias',
            'Analyse Médiatique',
            'Sociologie de la Communication',
            'Droit des Médias',
            'Sémiologie et Analyse du Discours'
          ]
        }
      ]
    },
    pedagogie: {
      title: 'Enseignement et Pédagogie',
      cover: PedagoCover,
      specializations: [
        'Pédagogie Générale',
        'Formation Professionnelle',
        'Conseil Pédagogique'
      ],
      modules: [
        {
          category: 'Sciences de l\'Éducation',
          courses: [
            'Psychologie de l\'Apprentissage',
            'Théories Pédagogiques',
            'Didactique Générale',
            'Psychologie de l\'Enfant et de l\'Adolescent',
            'Sociologie de l\'Éducation'
          ]
        },
        {
          category: 'Méthodes Pédagogiques',
          courses: [
            'Conception de Séquences Pédagogiques',
            'Évaluation des Apprentissages',
            'Pédagogie Différenciée',
            'Classes Inversées et Pédagogie Active',
            'Gestion de Classe'
          ]
        },
        {
          category: 'Technologies Éducatives',
          courses: [
            'TICE (Technologies de l\'Information et de la Communication pour l\'Enseignement)',
            'Création de Ressources Numériques',
            'E-learning et Formation à Distance',
            'Outils Collaboratifs',
            'Plateformes LMS (Moodle, Canvas)'
          ]
        },
        {
          category: 'Formation Professionnelle',
          courses: [
            'Ingénierie de Formation',
            'Andragogie (Formation des Adultes)',
            'Conseil et Accompagnement Pédagogique',
            'Évaluation de Dispositifs de Formation',
            'Insertion Professionnelle'
          ]
        }
      ]
    },
    philosophie: {
      title: 'Philosophie',
      cover: philoCover,
      specializations: [
        'Éthique et Philosophie Pratique',
        'Épistémologie',
        'Philosophie Politique'
      ],
      modules: [
        {
          category: 'Histoire de la Philosophie',
          courses: [
            'Philosophie Antique (Platon, Aristote)',
            'Philosophie Médiévale',
            'Philosophie Moderne (Descartes, Kant)',
            'Philosophie Contemporaine',
            'Philosophie Africaine et Malgache'
          ]
        },
        {
          category: 'Éthique & Morale',
          courses: [
            'Éthique Fondamentale',
            'Bioéthique',
            'Éthique des Affaires',
            'Philosophie du Droit',
            'Déontologie Professionnelle'
          ]
        },
        {
          category: 'Logique & Épistémologie',
          courses: [
            'Logique Formelle',
            'Théorie de la Connaissance',
            'Philosophie des Sciences',
            'Méthodologie de la Recherche',
            'Argumentation et Rhétorique'
          ]
        },
        {
          category: 'Philosophie Pratique',
          courses: [
            'Philosophie Politique',
            'Philosophie Sociale',
            'Esthétique',
            'Anthropologie Philosophique',
            'Herméneutique et Analyse Textuelle'
          ]
        }
      ]
    }
  }
};
