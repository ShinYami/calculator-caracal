import create from 'zustand';

export const useStore = create((set) => ({
  currentTheme: 'dark',
  setCurrentTheme: (theme) => set({ currentTheme: theme }),
}));
