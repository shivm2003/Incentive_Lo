import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentMonth, setCurrentMonth] = useState('2026-06');
  const [toast, setToast] = useState({ show: false, msg: '', color: '#34A853' });

  const showToast = useCallback((msg, color = '#34A853') => {
    setToast({ show: true, msg, color });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 2500);
  }, []);

  return (
    <AppContext.Provider value={{ currentMonth, setCurrentMonth, toast, showToast }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
