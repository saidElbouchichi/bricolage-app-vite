// src/components/features/CategoryIconGrid.jsx
import React from 'react';
import { IconSystem } from '../common/IconSystem';
import { motion } from 'framer-motion';

// Configuration des catégories (libellés et icônes sûrs)
const categories = [
  { id: 'construction', label: 'Construction maison', icon: 'hammer' },
  { id: 'events', label: 'Organisation événements', icon: 'briefcase' },
  { id: 'install-repair', label: 'Installation & réparation', icon: 'tools' },
  { id: 'electricien', label: 'Électricien', icon: 'bolt' },
  { id: 'design', label: 'Conception', icon: 'brush' },
  { id: 'finance', label: 'Services financiers', icon: 'chart-line' },
  { id: 'plombier', label: 'Plombier', icon: 'droplets' },
  { id: 'renovation', label: 'Rénovation', icon: 'hammer' },
  { id: 'legal', label: 'Services juridiques', icon: 'briefcase' },
  { id: 'peintre', label: 'Peintre', icon: 'brush' },
  { id: 'cleaning', label: 'Nettoyage', icon: 'brush' },
  { id: 'remote', label: 'Services à distance', icon: 'laptop' },
  { id: 'furniture', label: 'Meubles & agencement', icon: 'hammer' },
  { id: 'training', label: 'Formations & langues', icon: 'graduation-cap' },
  { id: 'health', label: 'Santé & beauté', icon: 'user-md' },
  { id: 'automobile', label: 'Automobile', icon: 'truck' },
  { id: 'transport', label: 'Transport', icon: 'truck' },
  { id: 'handyman', label: 'Bricolage', icon: 'tools' },
  { id: 'garden', label: 'Jardin', icon: 'tree' },
  { id: 'business', label: 'Services pour entreprises', icon: 'briefcase' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, when: 'beforeChildren' },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 250, damping: 20 } },
};

export const CategoryIconGrid = ({ onSelect }) => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Barre de recherche simplifiée */}
      <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl p-3 shadow-sm mb-8">
        <input
          type="text"
          placeholder="Recherchez une catégorie ou un service..."
          className="flex-1 px-3 py-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button className="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-white font-semibold transition-colors">
          🔍
        </button>
      </div>

      {/* Grille d’icônes */}
      <motion.div
        role="grid"
        aria-label="Catégories de services"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((cat, idx) => (
          <motion.button
            key={cat.id}
            role="gridcell"
            aria-label={cat.label}
            onClick={() => onSelect?.(cat)}
            className="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <motion.div
              className="shrink-0 rounded-xl bg-blue-50 text-blue-600 p-3 group-hover:bg-blue-100"
              whileHover={{ rotate: -2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <IconSystem name={cat.icon} className="w-7 h-7" />
            </motion.div>
            <span className="text-gray-800 font-medium group-hover:text-blue-600">
              {cat.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};