// src/components/layout/HeroTailwind.jsx
import React from 'react';

export default function HeroTailwind({ onCTAClick, onSecondaryClick }) {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl animate-slide-in">
            Simplifiez vos demandes avec
            {' '}
            <strong className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Fixiyi
            </strong>
            {' '}et augmentez vos conversions
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed animate-fade-in">
            Trouvez l’artisan fiable en 30 secondes. Devis clair, pros vérifiés,
            réponse rapide. Fixiyi vous accompagne du besoin à la réalisation.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <button
              type="button"
              onClick={onCTAClick}
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              Commencer
            </button>

            <button
              type="button"
              onClick={onSecondaryClick}
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}