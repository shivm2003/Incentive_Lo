import { useEffect, useRef } from 'react';
import './PieChart.css';

export default function PieChart({ earned, pending, potential, showPotential = true }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  // Actual values used for chart drawing
  const chartPotential = showPotential ? potential : 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 280 * dpr;
    canvas.height = 280 * dpr;
    ctx.scale(dpr, dpr);

    const cx = 140, cy = 140, outerR = 120, innerR = 70;
    const total = earned + pending + chartPotential;
    const gap = 0.04;
    const segments = [
      { val: earned, color: '#34A853' },
      { val: pending, color: '#F5A623' },
      ...(showPotential ? [{ val: potential, color: '#378ADD' }] : []),
    ].filter(s => s.val > 0);

    function draw(progress) {
      ctx.clearRect(0, 0, 280, 280);
      if (total === 0) return;
      let startAngle = -Math.PI / 2;
      const totalAngle = 2 * Math.PI * progress;
      const usableAngle = totalAngle - gap * segments.length;

      segments.forEach(seg => {
        const sweep = (seg.val / total) * usableAngle;
        if (sweep <= 0) return;
        ctx.beginPath();
        ctx.arc(cx, cy, outerR, startAngle, startAngle + sweep);
        ctx.arc(cx, cy, innerR, startAngle + sweep, startAngle, true);
        ctx.closePath();
        ctx.fillStyle = seg.color;
        ctx.fill();
        startAngle += sweep + gap;
      });
    }

    if (animRef.current) cancelAnimationFrame(animRef.current);

    let start = null;
    function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 700, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      draw(eased);
      if (p < 1) animRef.current = requestAnimationFrame(step);
    }
    animRef.current = requestAnimationFrame(step);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [earned, pending, potential, showPotential, chartPotential]);

  const total = earned + pending + chartPotential;
  const fmt = (n) => '₹' + n.toLocaleString('en-IN');

  return (
    <div className="chart-section">
      <div className="chart-wrap">
        <canvas ref={canvasRef} style={{ width: 140, height: 140 }} />
        <div className="chart-center">
          <div className="chart-center-val">{fmt(total)}</div>
          <div className="chart-center-label">Total</div>
        </div>
      </div>
      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-dot" style={{ background: '#34A853' }}></div>
          Earned · <strong>{fmt(earned)}</strong>
        </div>
        {(pending > 0 || showPotential) && (
          <div className="legend-item">
            <div className="legend-dot" style={{ background: '#F5A623' }}></div>
            Pending · <strong>{fmt(pending)}</strong>
          </div>
        )}
        {showPotential && potential > 0 && (
          <div className="legend-item">
            <div className="legend-dot" style={{ background: '#378ADD' }}></div>
            Potential · <strong>{fmt(potential)}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
