// src/components/common/IconSystem.jsx
import React from 'react';
import {
  Bolt, Droplets, Brush,
  Hammer, GraduationCap,
  Truck, Briefcase, ChartLine,
  Laptop, User, Wrench
} from 'lucide-react';

// Mapping des composants d'icônes (sélection restreinte et sûre)
const iconComponents = {
  'bolt': Bolt,
  'droplets': Droplets,
  'brush': Brush,
  // Icônes non disponibles mappées vers des équivalents sûrs
  'couch': Hammer,
  'car': Truck,
  'tree': Brush,
  'pencil-ruler': Hammer,
  'hammer': Hammer,
  'broom': Brush,
  'graduation-cap': GraduationCap,
  'truck': Truck,
  'briefcase': Briefcase,
  'chart-line': ChartLine,
  'balance-scale': Briefcase,
  'laptop': Laptop,
  'user-md': User,
  'tools': Wrench,
};

const IconSystemComponent = ({ name, className = "w-6 h-6" }) => {
  const IconComponent = iconComponents[name] || iconComponents['tools'];
  return <IconComponent className={className} />;
};

export const IconSystem = React.memo(IconSystemComponent);