// src/store/services-store.js
import { create } from 'zustand';

export const useServicesStore = create((set, get) => ({
  // State
  services: [],
  searchQuery: '',
  selectedCategory: null,
  filters: {
    priceRange: [0, 1000],
    rating: 0,
    availability: 'all'
  },
  recentSearches: [],
  
  // Actions
  setSearchQuery: (query) => {
    set({ searchQuery: query });
    if (query.trim()) {
      const { recentSearches } = get();
      const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
      set({ recentSearches: updated });
    }
  },
  
  setCategory: (category) => set({ selectedCategory: category }),
  
  applyFilters: (newFilters) => 
    set({ filters: { ...get().filters, ...newFilters } }),
  
  resetAll: () => set({ 
    searchQuery: '', 
    selectedCategory: null, 
    filters: {
      priceRange: [0, 1000],
      rating: 0,
      availability: 'all'
    }
  })
}));