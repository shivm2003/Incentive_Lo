import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Mobile App
import { AppProvider } from './context/AppContext';
import BottomNav from './components/BottomNav';
import Toast from './components/Toast';
import Dashboard from './pages/Dashboard';
import Cases from './pages/Cases';
import CaseDetail from './pages/CaseDetail';
import Pending from './pages/Pending';
import './App.css';

// Admin App
import { AdminProvider } from './admin/context/AdminContext';
import AdminLayout from './admin/components/AdminLayout';
import AdminQueries from './admin/pages/AdminQueries';
import AdminQueryDetail from './admin/pages/AdminQueryDetail';

function MobileApp() {
  return (
    <AppProvider>
      <div className="phone">
        {/* Status Bar */}
        <div className="statusbar">
          <span>9:41</span>
          <span className="statusbar-icons">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 0 0-6 0zm-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
          </span>
        </div>

        {/* Page Content */}
        <div className="phone-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/case/:month/:caseIdx" element={<CaseDetail />} />
            <Route path="/pending" element={<Pending />} />
          </Routes>
        </div>

        {/* Bottom Navigation */}
        <BottomNav />
      </div>

      {/* Toast (outside phone frame) */}
      <Toast />
    </AppProvider>
  );
}

function AdminApp() {
  return (
    <AdminProvider>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<AdminQueries />} />
          <Route path="query/:id" element={<AdminQueryDetail />} />
          {/* Placeholders for other nav items */}
          <Route path="incentive-upload" element={<div className="admin-page"><h1>Incentive Upload</h1></div>} />
          <Route path="contest-upload" element={<div className="admin-page"><h1>Contest Upload</h1></div>} />
          <Route path="notifications" element={<div className="admin-page"><h1>Notification Banner</h1></div>} />
        </Route>
      </Routes>
    </AdminProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/*" element={<MobileApp />} />
      </Routes>
    </BrowserRouter>
  );
}
