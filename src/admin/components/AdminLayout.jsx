import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { useAdmin } from '../context/AdminContext';
import './AdminLayout.css';

export default function AdminLayout() {
  const { toast } = useAdmin();

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-main">
        <Outlet />
      </main>

      {/* Toast */}
      <div
        className={`admin-toast ${toast.show ? 'show' : ''}`}
        style={{ background: toast.color }}
      >
        {toast.msg}
      </div>
    </div>
  );
}
