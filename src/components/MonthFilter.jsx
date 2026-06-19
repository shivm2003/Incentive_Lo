import { MONTH_OPTIONS } from '../data/monthlyData';
import { useApp } from '../context/AppContext';
import './MonthFilter.css';

export default function MonthFilter() {
  const { currentMonth, setCurrentMonth } = useApp();

  return (
    <div className="month-filter">
      <svg className="month-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      <select
        className="month-select"
        value={currentMonth}
        onChange={(e) => setCurrentMonth(e.target.value)}
      >
        {MONTH_OPTIONS.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <svg className="month-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  );
}
