import React, { useState } from 'react';
import { Button, Label, TextInput, Card } from 'flowbite-react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', formData);
    // Backend connection later
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">Connexion</h2>
          <p className="text-gray-600">Bienvenue sur Bricolage Pro</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
          
          <Button type="submit" color="blue" className="w-full">
            Se connecter
          </Button>
        </form>
        
        <p className="text-center text-gray-600 mt-4">
          Pas encore de compte ?{' '}
          <a href="/register" className="text-blue-600 hover:underline font-semibold">
            S'inscrire
          </a>
        </p>
      </Card>
    </div>
  );
}

export default Login;