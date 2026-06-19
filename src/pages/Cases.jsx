import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { monthlyData, fmt } from '../data/monthlyData';
import MonthFilter from '../components/MonthFilter';
import './Cases.css';

export default function Cases() {
  const { currentMonth } = useApp();
  const navigate = useNavigate();
  const data = monthlyData[currentMonth];
  const cases = data.cases;

  const earned = cases.filter(c => c.status === 'Earned').length;
  const pending = cases.filter(c => c.status === 'Pending').length;

  return (
    <div className="page page-fade-in">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Case-wise Incentive</h1>
          <div className="page-subtitle">{cases.length} cases · {earned} earned · {pending} pending</div>
        </div>
        <MonthFilter />
      </div>

      {/* Filter Chips */}
      <div className="filter-chips">
        <button className="chip chip-active" onClick={(e) => filterCases(e, 'all')}>All ({cases.length})</button>
        <button className="chip chip-earned" onClick={(e) => filterCases(e, 'Earned')}>Earned ({earned})</button>
        <button className="chip chip-pending" onClick={(e) => filterCases(e, 'Pending')}>Pending ({pending})</button>
      </div>

      {/* Case List */}
      <div className="case-list" id="caseList">
        {cases.map((c, idx) => (
          <div
            key={c.id}
            className="case-row"
            data-status={c.status}
            onClick={() => navigate(`/case/${currentMonth}/${idx}`)}
          >
            <div className="case-left">
              <div className={`case-status-dot ${c.status === 'Earned' ? 'dot-success' : 'dot-warning'}`}></div>
              <div>
                <div className="case-id">{c.id}</div>
                <div className="case-name">{c.name}</div>
                <div className="case-loan-amt">{c.loanAmt} · {c.disbDate}</div>
              </div>
            </div>
            <div className="case-right">
              <div className={`case-amt ${c.status === 'Earned' ? 'text-success' : 'text-warning'}`}>
                {fmt(c.amt)}
              </div>
              <span className={`badge ${c.status === 'Earned' ? 'badge-success' : 'badge-warning'}`}>
                {c.status}
              </span>
              <svg className="case-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function filterCases(e, status) {
  // Update active chip
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('chip-active'));
  e.target.classList.add('chip-active');

  // Filter rows
  document.querySelectorAll('.case-row').forEach(row => {
    if (status === 'all' || row.dataset.status === status) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}
