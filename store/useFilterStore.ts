import { create } from 'zustand';
import { Category } from '@/lib/mock-data';

type FilterState = {
  activeCategory: Category | 'all';
  setCategory: (category: Category | 'all') => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  activeCategory: 'all',
  setCategory: (category) => set({ activeCategory: category }),
}));