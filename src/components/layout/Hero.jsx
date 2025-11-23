/* From Uiverse.io by Smit-Prajapati */ 

// src/components/layout/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Palette et psychologie : confiance (bleu), énergie/attention (jaune), clarté (blanc)
// Hero animée pour Fixiyi : branding fort, promesse claire, CTA immédiat
const letters = ['F','i','x','i','y','i'];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const letterVariant = {
  hidden: { y: 30, opacity: 0, rotate: -8 },
  visible: { y: 0, opacity: 1, rotate: 0, transition: { type: 'spring', stiffness: 500, damping: 20 } },
};

const pulseVariant = {
  initial: { scale: 0.95, opacity: 0.85 },
  animate: { scale: 1, opacity: 1, transition: { repeat: Infinity, repeatType: 'mirror', duration: 3 } }
};

export default function Hero({ onCTAClick, onSecondaryClick }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Décor de fond animé */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full bg-blue-100 blur-3xl"
        variants={pulseVariant}
        initial="initial"
        animate="animate"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-24 w-[28rem] h-[28rem] rounded-full bg-yellow-100 blur-3xl"
        variants={pulseVariant}
        initial="initial"
        animate="animate"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Bloc gauche : branding + promesse */}
          <div>
            <motion.h1
              className="text-5xl sm:text-6xl font-black tracking-tight mb-4"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {letters.map((l, idx) => (
                <motion.span
                  key={idx}
                  variants={letterVariant}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-500 animate-shine"
                >
                  {l}
                </motion.span>
              ))}
            </motion.h1>
            <p className="text-lg text-gray-700 max-w-xl">
              Trouvez l’artisan fiable en 30 secondes. Devis clair, pros vérifiés,
              réponse rapide. Fixiyi vous accompagne du besoin à la réalisation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCTAClick}
                className="px-6 py-3 rounded-2xl bg-yellow-400 hover:bg-yellow-500 text-white font-semibold shadow-md"
              >
                Déposer une demande
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onSecondaryClick}
                className="px-6 py-3 rounded-2xl bg-white border border-gray-200 text-gray-800 font-semibold hover:border-blue-500 hover:text-blue-600 shadow-sm"
              >
                Voir les catégories
              </motion.button>
            </div>

            {/* Preuves sociales / signaux de confiance */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-50 text-blue-600">★</span>
                Note moyenne 4.8/5
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-50 text-blue-600">✓</span>
                Pros vérifiés & assurés
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-50 text-blue-600">⚡</span>
                Réponse moyenne: 2h
              </div>
            </div>
          </div>

          {/* Bloc droit : mosaïque de services animée */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                src="https://images.unsplash.com/photo-1581091012184-7c54f2a4b1d6?q=80&w=1080&auto=format&fit=crop"
                alt="Électricien professionnel"
                className="rounded-2xl shadow-md object-cover w-full h-40"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1581578017093-0b8db03f4b38?q=80&w=1080&auto=format&fit=crop"
                alt="Plombier certifié"
                className="rounded-2xl shadow-md object-cover w-full h-40"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 18 }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1080&auto=format&fit=crop"
                alt="Peintre décoratif"
                className="rounded-2xl shadow-md object-cover w-full h-40"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 18 }}
              />
              <motion.div
                className="rounded-2xl shadow-inner bg-gradient-to-tr from-blue-100 to-yellow-100 flex items-center justify-center h-40"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <div className="text-center">
                  <div className="text-sm text-gray-700">Outil le plus demandé</div>
                  <div className="text-xl font-bold text-blue-600">Perceuse</div>
                </div>
              </motion.div>
            </div>

            {/* Badges / overlays */}
            <motion.div className="absolute -top-3 -left-3 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-sm" initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              Top Pro
            </motion.div>
            <motion.div className="absolute -bottom-3 -right-3 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-sm" initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              4.8/5
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}