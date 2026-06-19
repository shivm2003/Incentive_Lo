import { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { monthlyData, SLAB_CONFIG, MONTH_OPTIONS, fmt } from '../data/monthlyData';
import MonthFilter from '../components/MonthFilter';
import PieChart from '../components/PieChart';
import './Dashboard.css';

// Current calendar month (for determining past vs current)
const CURRENT_MONTH = '2026-06';

// Compute cumulative incentive across a range of months
function getCumulativeData(monthCount) {
  const months = MONTH_OPTIONS.slice(0, monthCount).map(m => m.value);
  let totalEarned = 0;
  let totalPending = 0;
  let totalCases = 0;

  months.forEach(m => {
    const d = monthlyData[m];
    if (d) {
      totalEarned += d.chart.earned;
      totalPending += d.chart.pending;
      totalCases += d.cases.length;
    }
  });

  return { totalEarned, totalPending, totalCases, monthCount: months.length };
}

export default function Dashboard() {
  const { currentMonth } = useApp();
  const data = monthlyData[currentMonth];
  const { metrics, slab, chart, summary } = data;
  const isPastMonth = currentMonth !== CURRENT_MONTH;

  // Cumulative slicer state
  const [cumSlice, setCumSlice] = useState(6);
  const cumData = useMemo(() => getCumulativeData(cumSlice), [cumSlice]);

  return (
    <div className="page page-fade-in">
      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar-left">
          <div className="avatar">RS</div>
          <div>
            <div className="user-name">Rajesh Sharma</div>
            <div className="user-role">Loan Officer · Gurugram</div>
          </div>
        </div>
        <MonthFilter />
      </div>

      {/* Metrics Grid */}
      <div className="metrics-grid">
        <div className="metric">
          <div className="mlabel">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" /></svg>
            Net disbursed
          </div>
          <div className="mval">{metrics.disbursed}</div>
          <div className="msub">{metrics.disbursedSub}</div>
        </div>
        <div className="metric">
          <div className="mlabel">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" /><path d="M12 8v4M9.5 14h5" /></svg>
            Current incentive
          </div>
          <div className="mval text-success">{metrics.incentive}</div>
          <div className="msub">{metrics.incentiveSub}</div>
        </div>
        <div className="metric">
          <div className="mlabel">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            Pending
          </div>
          <div className="mval text-warning">{metrics.pending}</div>
          <div className="msub">{metrics.pendingSub}</div>
        </div>
        <div className="metric">
          <div className="mlabel">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
            Cases done
          </div>
          <div className="mval">{metrics.cases}</div>
          <div className="msub">{metrics.casesSub}</div>
        </div>
      </div>

      {/* Incentive Slab */}
      <div className="card">
        <div className="sec-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="12" width="4" height="9" /><rect x="10" y="7" width="4" height="14" /><rect x="17" y="3" width="4" height="18" /></svg>
          Incentive slab
        </div>
        <div className="slab-row">
          {SLAB_CONFIG.map((s, i) => (
            <div
              key={i}
              className={`slab ${slab.active === i ? 'active' : ''}`}
              style={{
                background: slab.active === i ? '#E6F1FB' : s.bgDefault
              }}
            >
              <div className="slab-num" style={{ color: slab.active === i ? '#185FA5' : s.numColor }}>
                {s.rate}
              </div>
              <div className="slab-range" style={{ color: slab.active === i ? '#378ADD' : s.rangeColor }}>
                {slab.active === i ? `S${i + 1} · current` : s.range}
              </div>
            </div>
          ))}
        </div>
        <div className="slab-meta">
          <span>Progress to next slab</span>
          <span className="text-accent font-medium">{slab.needed}</span>
        </div>
        <div className="pb-bg">
          <div className="pb-fill" style={{ width: `${slab.progress}%` }}></div>
        </div>
        <div className="pb-labels">
          <span>{slab.low}</span>
          <span className="text-accent font-medium">{slab.current}</span>
          <span>{slab.high}</span>
        </div>
        <div className="tip">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
          {slab.tip}
        </div>
      </div>

      {/* Pie Chart */}
      <div className="card">
        <div className="sec-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
          Incentive breakdown
        </div>
        <PieChart earned={chart.earned} pending={chart.pending} potential={chart.potential} />
      </div>

      {/* Summary */}
      <div className="card">
        <div className="sec-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="12" y2="14" /></svg>
          Incentive summary
        </div>
        <div className="sum-row">
          <span className="text-secondary">Earned (released)</span>
          <span className="font-medium text-success">{summary.earned}</span>
        </div>
        <div className="sum-row">
          <span className="text-secondary">Pending (on hold)</span>
          <span className="font-medium text-warning">{summary.pending}</span>
        </div>
        <div className="sum-row">
          <span className="text-secondary">Total potential</span>
          <span className="font-medium">{summary.total}</span>
        </div>
        <div className="sum-row no-border">
          <span className="text-secondary">
            {isPastMonth ? 'Could have earned ' : 'If next slab unlocked'}
          </span>
          <span className={`font-medium ${isPastMonth ? 'text-secondary' : 'text-accent'}`}>
            {summary.extra}
          </span>
        </div>
        {isPastMonth && (
          <div className="past-note">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
            This slab upgrade was applicable for {monthlyData[currentMonth]?.label} only
          </div>
        )}
      </div>

      {/* Cumulative Incentive — All Time */}
      <div className="card">
        <div className="sec-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" /></svg>
          Total incentive earned
        </div>

        {/* Slicer Buttons */}
        <div className="cum-slicer">
          {[{ label: 'Last month', val: 1 }, { label: 'Last 3 months', val: 3 }, { label: 'Last 6 months', val: 6 }].map(s => (
            <button
              key={s.val}
              className={`cum-chip ${cumSlice === s.val ? 'cum-chip-active' : ''}`}
              onClick={() => setCumSlice(s.val)}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Cumulative Stats Row */}
        <div className="cum-stats">
          <div className="cum-stat">
            <div className="cum-stat-val text-success">{fmt(cumData.totalEarned)}</div>
            <div className="cum-stat-label">Earned</div>
          </div>
          <div className="cum-divider"></div>
          <div className="cum-stat">
            <div className="cum-stat-val text-warning">{fmt(cumData.totalPending)}</div>
            <div className="cum-stat-label">Pending</div>
          </div>
          <div className="cum-divider"></div>
          <div className="cum-stat">
            <div className="cum-stat-val">{cumData.totalCases}</div>
            <div className="cum-stat-label">Cases</div>
          </div>
        </div>

        {/* Cumulative Pie Chart */}
        <PieChart
          earned={cumData.totalEarned}
          pending={cumData.totalPending}
          potential={0}
          showPotential={false}
        />
      </div>
    </div>
  );
}
