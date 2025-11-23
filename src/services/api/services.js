// src/services/api/services.js
import { mockServices } from '../mocks/services.js';

// Simulation API avec cache intelligent
class ServicesAPIService {
  constructor() {
    this.cache = new Map();
    this.requestQueue = new Map();
  }

  async getAll(filters = {}) {
    const cacheKey = JSON.stringify(filters);
    
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // Éviter les requêtes dupliquées
    if (this.requestQueue.has(cacheKey)) {
      return this.requestQueue.get(cacheKey);
    }

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        let results = mockServices;
        
        // Filtrage avancé
        if (filters.category) {
          results = results.filter(s => s.category === filters.category);
        }
        
        if (filters.search) {
          const searchTerm = filters.search.toLowerCase();
          results = results.filter(s => 
            s.name.toLowerCase().includes(searchTerm) ||
            s.description.toLowerCase().includes(searchTerm)
          );
        }

        // Cache les résultats
        this.cache.set(cacheKey, results);
        this.requestQueue.delete(cacheKey);
        
        resolve(results);
      }, 300); // Simuler latence réseau
    });

    this.requestQueue.set(cacheKey, promise);
    return promise;
  }

  async getById(id) {
    return mockServices.find(service => service.id === id);
  }

  clearCache() {
    this.cache.clear();
  }
}

export const servicesAPI = new ServicesAPIService();