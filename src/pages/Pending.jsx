import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { monthlyData, fmt } from '../data/monthlyData';
import MonthFilter from '../components/MonthFilter';
import './Pending.css';

export default function Pending() {
  const { currentMonth } = useApp();
  const navigate = useNavigate();
  const data = monthlyData[currentMonth];
  const pendingCases = data.cases.filter(c => c.status === 'Pending');
  const totalPending = pendingCases.reduce((sum, c) => sum + c.amt, 0);

  return (
    <div className="page page-fade-in">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Pending Incentives</h1>
          <div className="page-subtitle">{pendingCases.length} cases · {fmt(totalPending)} on hold</div>
        </div>
        <MonthFilter />
      </div>

      {/* Total Pending Banner */}
      {pendingCases.length > 0 ? (
        <>
          <div className="pending-total-banner">
            <div className="pending-total-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div>
              <div className="pending-total-amount">{fmt(totalPending)}</div>
              <div className="pending-total-label">Total incentive on hold</div>
            </div>
          </div>

          {/* Pending Case Cards */}
          <div className="pending-list">
            {pendingCases.map((c, _) => {
              const idx = data.cases.findIndex(dc => dc.id === c.id);
              return (
                <div
                  key={c.id}
                  className="pending-card"
                  onClick={() => navigate(`/case/${currentMonth}/${idx}`)}
                >
                  <div className="pending-card-header">
                    <div className="pending-card-left">
                      <div className={`pend-dot ${c.pdd.status === 'pending' ? 'pend-dot-danger' : 'pend-dot-warning'}`}></div>
                      <div>
                        <div className="case-name">{c.name}</div>
                        <div className="case-id">{c.id}</div>
                      </div>
                    </div>
                    <div className="pending-amt">{fmt(c.amt)}</div>
                  </div>

                  <div className="pending-reason">
                    <div className="pending-reason-title">
                      {c.holdReason ? c.holdReason.split('—')[0].trim() : 'Under Review'}
                    </div>
                    <div className="pending-reason-desc">
                      {c.holdReason || 'Pending resolution by operations team.'}
                    </div>
                  </div>

                  {/* Mini PDD status */}
                  <div className="pending-pdd-mini">
                    {c.pdd.stages.map((st, i) => (
                      <div key={i} className={`pdd-mini-step ${st.s}`}>
                        <div className={`pdd-mini-dot ${st.s}`}></div>
                        <span>{st.t.replace('PDD ', '').replace('Incentive ', '')}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pending-card-action">
                    <span>View Details & Raise Query</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🎉</div>
          <div className="empty-title">All Clear!</div>
          <div className="empty-desc">No pending incentives this month. All cases have been processed.</div>
        </div>
      )}
    </div>
  );
}
