import { useNavigate } from 'react-router-dom';
import { SLAB_CONFIG } from '../data/monthlyData';

export default function SlabConditions() {
  const navigate = useNavigate();

  return (
    <div className="page page-fade-in" style={{ padding: '16px', paddingBottom: '80px', background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Top Bar with Back Button */}
      <div className="topbar" style={{ marginBottom: '24px' }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ background: 'none', border: 'none', color: '#185FA5', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '0', fontSize: '15px', fontWeight: '500' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          Back to Dashboard
        </button>
      </div>

      <h1 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '8px', color: '#1A1A1A' }}>Slab Upgrade Conditions</h1>
      <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', marginBottom: '24px' }}>
        To qualify for the next incentive slab, you must meet both the disbursement target and maintain a healthy product mix between Home Loans (HL) and Loan Against Property (LAP).
      </p>

      {/* Conditions Card */}
      <div className="card" style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#185FA5" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
          HL / LAP Ratio Requirements
        </h2>
        
        <div style={{ background: '#F8F9FA', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontWeight: '500', color: '#333' }}>Target Ratio</span>
            <span style={{ fontWeight: '600', color: '#185FA5' }}>70% HL : 30% LAP</span>
          </div>
          <p style={{ margin: 0, fontSize: '13px', color: '#666', lineHeight: '1.4' }}>
            At least 70% of your total disbursed amount must be from Home Loans. If LAP exceeds 30%, you will not be upgraded to the next slab even if the total target is met.
          </p>
        </div>

        <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', marginTop: '24px' }}>Slab Targets</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {SLAB_CONFIG.map((slab, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px', borderBottom: i < SLAB_CONFIG.length - 1 ? '1px solid #EAEAEA' : 'none' }}>
              <div>
                <div style={{ fontWeight: '500', color: '#1A1A1A', fontSize: '14px' }}>Slab {i + 1} ({slab.rate})</div>
                <div style={{ fontSize: '12px', color: '#666' }}>Target: {slab.range.split('·')[1].trim()}</div>
              </div>
              <div style={{ background: '#E6F1FB', color: '#185FA5', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>
                70:30 Mix Required
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
