import { NavLink } from 'react-router-dom';
import './AdminSidebar.css';

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      {/* Brand */}
      <div className="sidebar-brand">
        <div className="brand-logo">
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
            <path d="M2 18h20M4 18V8l8-6 8 6v10" stroke="#E53935" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 18v-6h6v6" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <div className="brand-name">
              <span className="brand-red">India</span>Shelter
            </div>
            <div className="brand-sub">Home Loans</div>
          </div>
        </div>
        <div className="brand-tagline">iTrust & Agile admin</div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <NavLink to="/admin" end className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Query Management
        </NavLink>
        <NavLink to="/admin/incentive-upload" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
          Incentive Upload
        </NavLink>
        <NavLink to="/admin/contest-upload" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
          </svg>
          Contest Upload
        </NavLink>
        <NavLink to="/admin/notifications" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          Notification Banner
        </NavLink>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-user-avatar">PA</div>
          <div>
            <div className="sidebar-user-name">Priya Admin</div>

          </div>
        </div>
      </div>
    </aside>
  );
}
