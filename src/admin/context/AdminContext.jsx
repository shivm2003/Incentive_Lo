import { createContext, useContext, useState, useCallback } from 'react';
import { queries as initialQueries } from '../data/adminData';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [queries, setQueries] = useState(initialQueries);
  const [toast, setToast] = useState({ show: false, msg: '', color: '#34A853' });

  const showToast = useCallback((msg, color = '#34A853') => {
    setToast({ show: true, msg, color });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 2800);
  }, []);

  const addResponse = useCallback((queryId, responseText, adminName) => {
    setQueries(prev => prev.map(q => {
      if (q.id === queryId) {
        return {
          ...q,
          responses: [...q.responses, {
            by: `Admin — ${adminName}`,
            date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' +
                  new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }),
            text: responseText,
          }],
          status: q.status === 'Open' ? 'In Progress' : q.status,
        };
      }
      return q;
    }));
  }, []);

  const updateStatus = useCallback((queryId, newStatus) => {
    setQueries(prev => prev.map(q =>
      q.id === queryId ? { ...q, status: newStatus } : q
    ));
  }, []);

  return (
    <AdminContext.Provider value={{ queries, toast, showToast, addResponse, updateStatus }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}
