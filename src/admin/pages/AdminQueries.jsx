import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import { ROLES, BRANCHES, QUERY_STATUSES, getQueryStats } from '../data/adminData';
import './AdminQueries.css';

export default function AdminQueries() {
  const { queries } = useAdmin();
  const navigate = useNavigate();

  // Filters
  const [role, setRole] = useState('');
  const [branch, setBranch] = useState('All Branches');
  const [status, setStatus] = useState('All');
  const [search, setSearch] = useState('');

  // Filtered queries
  const filtered = useMemo(() => {
    return queries.filter(q => {
      const matchRole = !role || q.role === role;
      const matchBranch = branch === 'All Branches' || q.officerBranch === branch;
      const matchStatus = status === 'All' || q.status === status;
      const searchLower = search.toLowerCase();
      const matchSearch = !search || 
        q.id.toLowerCase().includes(searchLower) || 
        q.caseId.toLowerCase().includes(searchLower) ||
        q.officerName.toLowerCase().includes(searchLower);
      return matchRole && matchBranch && matchStatus && matchSearch;
    });
  }, [queries, role, branch, status, search]);

  const stats = getQueryStats(filtered);

  return (
    <div className="admin-page">
      {/* Top Filter Bar (matches screenshot) */}
      <div className="admin-topbar">
        <div className="filter-group">
          <select 
            className="admin-select"
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            {ROLES.map(r => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-group">
          <select 
            className="admin-select"
            value={branch}
            onChange={e => setBranch(e.target.value)}
          >
            {BRANCHES.map(b => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="filter-group search-group">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input 
            type="text" 
            className="admin-input" 
            placeholder="Search QRY ID, Case ID, Officer..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="admin-content-header">
        <h1 className="admin-title">Query Management</h1>
        <p className="admin-subtitle">View and respond to incentive queries raised by field staff.</p>
      </div>

      {/* Stats Summary */}
      <div className="admin-stats">
        <div className="stat-card">
          <div className="stat-val text-primary">{stats.total}</div>
          <div className="stat-label">Total Queries</div>
        </div>
        <div className="stat-card">
          <div className="stat-val text-danger">{stats.open}</div>
          <div className="stat-label">Open</div>
        </div>
        <div className="stat-card">
          <div className="stat-val text-warning">{stats.inProgress}</div>
          <div className="stat-label">In Progress</div>
        </div>
        <div className="stat-card">
          <div className="stat-val text-success">{stats.resolved}</div>
          <div className="stat-label">Resolved</div>
        </div>
      </div>

      {/* Query List */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div className="admin-tabs">
            {QUERY_STATUSES.map(s => (
              <button 
                key={s}
                className={`admin-tab ${status === s ? 'active' : ''}`}
                onClick={() => setStatus(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="query-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Query ID</th>
                <th>Details</th>
                <th>Officer / Branch</th>
                <th>Query Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? filtered.map(q => (
                <tr key={q.id} onClick={() => navigate(`/admin/query/${q.id}`)} className="clickable-row">
                  <td className="font-mono text-secondary">{q.id}</td>
                  <td>
                    <div className="font-medium text-primary">{q.caseId}</div>
                    <div className="text-sm text-secondary">{q.borrowerName}</div>
                  </td>
                  <td>
                    <div className="font-medium text-primary">{q.officerName}</div>
                    <div className="text-sm text-secondary">{q.officerBranch}</div>
                  </td>
                  <td>
                    <span className="badge badge-info">{q.queryType}</span>
                  </td>
                  <td>
                    <span className={`status-pill ${q.status.toLowerCase().replace(' ', '-')}`}>
                      {q.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="6" className="empty-table">
                    No queries found matching the selected filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
