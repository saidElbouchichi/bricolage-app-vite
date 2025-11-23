// src/hooks/useServices.js
import { useQuery } from '@tanstack/react-query';
import { servicesAPI } from '../services/api';

export const useServices = (filters = {}) => {
  return useQuery({
    queryKey: ['services', filters],
    queryFn: () => servicesAPI.getAll(filters),
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });
};

export const useService = (id) => {
  return useQuery({
    queryKey: ['service', id],
    queryFn: () => servicesAPI.getById(id),
    enabled: !!id,
  });
};