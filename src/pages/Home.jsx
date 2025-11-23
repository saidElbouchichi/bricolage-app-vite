// src/pages/Home.jsx
import React from 'react';
import { useServicesStore } from '../store/services-store';
import { CategoryIconGrid } from '../components/features/CategoryIconGrid';
import HeroTailwind from '../components/layout/HeroTailwind';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { setCategory } = useServicesStore();
  const navigate = useNavigate();

  const handleSelect = (cat) => {
    setCategory(cat.id);
    console.log('Catégorie sélectionnée:', cat);
  };

  const handleCTAClick = () => navigate('/register');
  const handleSecondaryClick = () => {
    const el = document.getElementById('category-grid');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <HeroTailwind onCTAClick={handleCTAClick} onSecondaryClick={handleSecondaryClick} />
      <div id="category-grid" className="py-10 px-4">
        <CategoryIconGrid onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default Home;