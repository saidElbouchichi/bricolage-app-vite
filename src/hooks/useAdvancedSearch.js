import { useState, useMemo, useCallback } from 'react';
import { useDebounce } from 'use-debounce';
import Fuse from 'fuse.js';

export const useAdvancedSearch = (items, options = {}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch] = useDebounce(searchTerm, 250);
  
  const fuse = useMemo(() => new Fuse(items, {
    keys: ['name', 'category', 'description', 'tags'],
    threshold: 0.3,
    includeScore: true,
    ...options
  }), [items, options]);

  const results = useMemo(() => {
    if (!debouncedSearch.trim()) return items;
    return fuse.search(debouncedSearch).map(result => result.item);
  }, [debouncedSearch, fuse, items]);

  const searchStats = useMemo(() => ({
    total: items.length,
    filtered: results.length,
    reduction: Math.round(((items.length - results.length) / items.length) * 100)
  }), [items.length, results.length]);

  const clearSearch = useCallback(() => setSearchTerm(''), []);

  return {
    searchTerm,
    setSearchTerm,
    results,
    searchStats,
    isEmpty: results.length === 0 && debouncedSearch.trim() !== '',
    clearSearch
  };
};