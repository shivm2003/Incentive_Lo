import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { monthlyData, fmt } from '../data/monthlyData';
import { useApp } from '../context/AppContext';
import './CaseDetail.css';

export default function CaseDetail() {
  const { month, caseIdx } = useParams();
  const navigate = useNavigate();
  const { showToast } = useApp();

  const data = monthlyData[month];
  const caseData = data?.cases?.[parseInt(caseIdx)];

  const [queryType, setQueryType] = useState(
    caseData?.pdd?.status === 'pending' ? 'pdd' : ''
  );
  const [queryDesc, setQueryDesc] = useState('');

  if (!caseData) {
    return (
      <div className="page page-fade-in" style={{ textAlign: 'center', paddingTop: 40 }}>
        <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Case not found</div>
        <button className="btn-back" onClick={() => navigate('/cases')} style={{ marginTop: 12 }}>← Back to Cases</button>
      </div>
    );
  }

  const c = caseData;

  function handleSubmit() {
    if (!queryType) {
      showToast('Please select a query type', '#E24B4A');
      return;
    }
    if (!queryDesc.trim()) {
      showToast('Please enter a description', '#E24B4A');
      return;
    }
    showToast(`✓ Query raised for ${c.id}`, '#34A853');
    setQueryType('');
    setQueryDesc('');
    setTimeout(() => navigate('/cases'), 800);
  }

  return (
    <div className="page page-fade-in">
      {/* Header */}
      <div className="detail-header">
        <button className="btn-back" onClick={() => navigate('/cases')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div className="detail-header-info">
          <h1 className="detail-name">{c.name}</h1>
          <div className="detail-case-id">{c.id} · <span className={c.status === 'Earned' ? 'text-success' : 'text-warning'}>{c.status}</span></div>
        </div>
        <span className={`badge ${c.status === 'Earned' ? 'badge-success' : 'badge-warning'}`} style={{ fontSize: 11, padding: '4px 10px' }}>
          {fmt(c.amt)}
        </span>
      </div>

      {/* Detail Grid */}
      <div className="detail-grid">
        <div className="detail-item">
          <div className="detail-item-label">Loan Amount</div>
          <div className="detail-item-value">{c.loanAmt}</div>
        </div>
        <div className="detail-item">
          <div className="detail-item-label">Disbursement Date</div>
          <div className="detail-item-value">{c.disbDate}</div>
        </div>
        <div className="detail-item">
          <div className="detail-item-label">Incentive Amount</div>
          <div className={`detail-item-value ${c.status === 'Earned' ? 'text-success' : 'text-warning'}`}>{fmt(c.amt)}</div>
        </div>
        <div className="detail-item">
          <div className="detail-item-label">Slab Applied</div>
          <div className="detail-item-value">{c.slab}</div>
        </div>
      </div>

      {/* Hold Reason Banner */}
      {c.holdReason && (
        <div className="hold-banner">
          <div className="hold-banner-label">⚠ Hold Reason</div>
          <div className="hold-banner-text">{c.holdReason}</div>
        </div>
      )}

      {/* PDD Timeline */}
      <div className="card">
        <div className="sec-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          PDD Timeline
        </div>
        <div className="timeline">
          {c.pdd.stages.map((st, i) => (
            <div className="tl-step" key={i}>
              <div className={`tl-dot ${st.s}`}>
                {st.s === 'done' ? '✓' : st.s === 'progress' ? '◉' : st.s === 'locked' ? '✕' : '○'}
              </div>
              <div className="tl-content">
                <div className="tl-title">{st.t}</div>
                <div className="tl-date">{st.d}</div>
                {st.tag && (
                  <span
                    className="tl-tag"
                    style={{
                      background: `${st.tagColor}22`,
                      color: st.tagColor
                    }}
                  >
                    {st.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Raise Query */}
      <div className="card">
        <div className="sec-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Raise a Query
        </div>

        <div className="form-group">
          <label className="form-label">Case ID</label>
          <input className="form-input" type="text" value={`${c.id} · ${c.name}`} readOnly />
        </div>

        <div className="form-group">
          <label className="form-label">Query Type</label>
          <select className="form-select" value={queryType} onChange={e => setQueryType(e.target.value)}>
            <option value="">Select type…</option>
            <option value="pdd">PDD Issue</option>
            <option value="calc">Incentive Calculation</option>
            <option value="delay">Payment Delay</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            className="form-textarea"
            placeholder="Describe your issue or question…"
            value={queryDesc}
            onChange={e => setQueryDesc(e.target.value)}
          />
        </div>

        <button className="btn-query" onClick={handleSubmit}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          Submit Query
        </button>
      </div>
    </div>
  );
}
