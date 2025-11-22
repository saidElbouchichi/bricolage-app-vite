import React from 'react';
import { Button, Card } from 'flowbite-react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="text-2xl font-bold text-blue-600">🔧 Bricolage Pro</span>
          <div className="flex gap-4">
            <Button color="light" href="/login">Connexion</Button>
            <Button color="blue" href="/register">S'inscrire</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-screen-xl px-4 py-24 mx-auto text-center">
          <h1 className="mb-4 text-5xl font-extrabold leading-tight">
            Trouvez le meilleur artisan au Maroc
          </h1>
          <p className="mb-8 text-xl font-light">
            Plombiers, électriciens, menuisiers... Des professionnels qualifiés à votre service
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="xl" color="light" href="/register">
              🔍 Trouver un artisan
            </Button>
            <Button size="xl" color="purple" href="/register">
              💼 Devenir artisan
            </Button>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16">
        <div className="max-w-screen-xl px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🔍</div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
                1. Recherchez
              </h5>
              <p className="font-normal text-gray-700">
                Sélectionnez le type de service dont vous avez besoin et votre localisation
              </p>
            </Card>

            <Card className="text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">💬</div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
                2. Discutez
              </h5>
              <p className="font-normal text-gray-700">
                Contactez les artisans disponibles et négociez le prix directement
              </p>
            </Card>

            <Card className="text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">✅</div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
                3. Réservez
              </h5>
              <p className="font-normal text-gray-700">
                Confirmez l'intervention et payez en toute sécurité après le travail
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: '🔧', name: 'Plomberie' },
              { emoji: '⚡', name: 'Électricité' },
              { emoji: '🪚', name: 'Menuiserie' },
              { emoji: '🎨', name: 'Peinture' },
              { emoji: '❄️', name: 'Climatisation' },
              { emoji: '🔒', name: 'Serrurerie' },
              { emoji: '📱', name: 'Électronique' },
              { emoji: '🏠', name: 'Maçonnerie' }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg hover:scale-105 transition cursor-pointer">
                <div className="text-4xl mb-2">{service.emoji}</div>
                <h5 className="text-lg font-bold">{service.name}</h5>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Artisans qualifiés</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl">Interventions réussies</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.8/5</div>
              <div className="text-xl">Note moyenne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl px-4 mx-auto text-center">
          <p className="mb-2">&copy; 2024 Bricolage Pro Maroc. Tous droits réservés.</p>
          <p className="text-sm text-gray-400">Casablanca, Rabat, Marrakech, Tanger et tout le Maroc</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;