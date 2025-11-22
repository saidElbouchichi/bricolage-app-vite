import React, { useState } from 'react';
import { Button, Label, TextInput, Select, Card } from 'flowbite-react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'client'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register:', formData);
    // Backend connection later
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Inscription</h2>
          <p className="text-gray-600">Créez votre compte gratuitement</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" value="Nom complet" />
            <TextInput
              id="name"
              type="text"
              placeholder="Votre nom"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput
              id="email"
              type="email"
              placeholder="votre@email.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div>
            <Label htmlFor="phone" value="Téléphone" />
            <TextInput
              id="phone"
              type="tel"
              placeholder="+212 6XX XXX XXX"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          
          <div>
            <Label htmlFor="password" value="Mot de passe" />
            <TextInput
              id="password"
              type="password"
              placeholder="••••••••"
              required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          
          <div>
            <Label htmlFor="role" value="Je suis" />
            <Select
              id="role"
              required
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              <option value="client">Client</option>
              <option value="artisan">Artisan professionnel</option>
            </Select>
          </div>
          
          <Button type="submit" color="blue" className="w-full">
            S'inscrire
          </Button>
        </form>
        
        <p className="text-center text-gray-600 mt-4">
          Déjà un compte ?{' '}
          <a href="/login" className="text-blue-600 hover:underline font-semibold">
            Se connecter
          </a>
        </p>
      </Card>
    </div>
  );
}

export default Register;