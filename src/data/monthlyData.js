// ═══════════════════════════════════════════════
// DATA STORE — Monthly data (simulated)
// ═══════════════════════════════════════════════

export const monthlyData = {
  '2026-06': {
    label: 'June 2026',
    metrics: {
      disbursed: '₹42.5L', disbursedSub: 'of ₹50L target',
      incentive: '₹21,250', incentiveSub: '@ 0.50% slab',
      pending: '₹5,950', pendingSub: '2 cases on hold',
      cases: '9', casesSub: 'of 11 processed'
    },
    slab: {
      active: 1, progress: 85,
      low: '₹20L', current: '₹42.5L', high: '₹50L',
      needed: '₹7.5L more needed',
      tip: 'Disburse ₹7.5L more to unlock 0.75% slab'
    },
    chart: { earned: 21250, pending: 5950, potential: 10625 },
    summary: { earned: '₹21,250', pending: '₹5,950', total: '₹27,200', extra: '+₹10,625 extra' },
    cases: [
      {
        id: 'LN-2291', name: 'Amit Verma', amt: 4100, status: 'Earned',
        loanAmt: '₹8,20,000', disbDate: '02 Jun 2026', slab: '0.50%',
        pdd: {
          status: 'cleared',
          stages: [
            { s: 'done', t: 'Loan Disbursed', d: '02 Jun 2026' },
            { s: 'done', t: 'PDD Documents Due', d: '17 Jun 2026' },
            { s: 'done', t: 'PDD Clearance', d: '14 Jun 2026', tag: 'Cleared', tagColor: '#34A853' },
            { s: 'done', t: 'Incentive Released', d: '15 Jun 2026' }
          ]
        }
      },
      {
        id: 'LN-2304', name: 'Priya Singh', amt: 2750, status: 'Earned',
        loanAmt: '₹5,50,000', disbDate: '05 Jun 2026', slab: '0.50%',
        pdd: {
          status: 'cleared',
          stages: [
            { s: 'done', t: 'Loan Disbursed', d: '05 Jun 2026' },
            { s: 'done', t: 'PDD Documents Due', d: '20 Jun 2026' },
            { s: 'done', t: 'PDD Clearance', d: '18 Jun 2026', tag: 'Cleared', tagColor: '#34A853' },
            { s: 'done', t: 'Incentive Released', d: '19 Jun 2026' }
          ]
        }
      },
      {
        id: 'LN-2318', name: 'Rahul Gupta', amt: 3000, status: 'Pending',
        loanAmt: '₹6,00,000', disbDate: '08 Jun 2026', slab: '0.50%',
        holdReason: 'PDD not cleared — post-disbursement documents pending',
        pdd: {
          status: 'pending',
          stages: [
            { s: 'done', t: 'Loan Disbursed', d: '08 Jun 2026' },
            { s: 'progress', t: 'PDD Documents Due', d: '23 Jun 2026', tag: '4 days left', tagColor: '#F5A623' },
            { s: 'upcoming', t: 'PDD Clearance', d: '—' },
            { s: 'upcoming', t: 'Incentive Release', d: 'Locked' }
          ]
        }
      },
      {
        id: 'LN-2327', name: 'Sunita Devi', amt: 4900, status: 'Earned',
        loanAmt: '₹9,80,000', disbDate: '03 Jun 2026', slab: '0.50%',
        pdd: {
          status: 'cleared',
          stages: [
            { s: 'done', t: 'Loan Disbursed', d: '03 Jun 2026' },
            { s: 'done', t: 'PDD Documents Due', d: '18 Jun 2026' },
            { s: 'done', t: 'PDD Clearance', d: '16 Jun 2026', tag: 'Cleared', tagColor: '#34A853' },
            { s: 'done', t: 'Incentive Released', d: '17 Jun 2026' }
          ]
        }
      },
      {
        id: 'LN-2335', name: 'Deepak Joshi', amt: 3550, status: 'Earned',
        loanAmt: '₹7,10,000', disbDate: '06 Jun 2026', slab: '0.50%',
        pdd: {
          status: 'cleared',
          stages: [
            { s: 'done', t: 'Loan Disbursed', d: '06 Jun 2026' },
            { s: 'done', t: 'PDD Documents Due', d: '21 Jun 2026' },
            { s: 'done', t: 'PDD Clearance', d: '19 Jun 2026', tag: 'Cleared', tagColor: '#34A853' },
            { s: 'done', t: 'Incentive Released', d: '20 Jun 2026' }
          ]
        }
      },
      {
        id: 'LN-2341', name: 'Kavita Rao', amt: 2950, status: 'Pending',
        loanAmt: '₹5,90,000', disbDate: '10 Jun 2026', slab: '0.50%',
        holdReason: 'Flagged for ops review — pending resolution by credit ops team',
        pdd: {
          status: 'pending',
          stages: [
            { s: 'done', t: 'Loan Disbursed', d: '10 Jun 2026' },
            { s: 'done', t: 'PDD Documents Due', d: '25 Jun 2026' },
            { s: 'progress', t: 'PDD Clearance', d: '—', tag: 'Under Review', tagColor: '#F5A623' },
            { s: 'upcoming', t: 'Incentive Release', d: 'Locked' }
          ]
        }
      },
      {
        id: 'LN-2349', name: 'Manish Tiwari', amt: 2100, status: 'Earned',
        loanAmt: '₹4,20,000', disbDate: '11 Jun 2026', slab: '0.50%',
        pdd: {
          status: 'cleared',
          stages: [
            { s: 'done', t: 'Loan Disbursed', d: '11 Jun 2026' },
            { s: 'done', t: 'PDD Documents Due', d: '26 Jun 2026' },
            { s: 'done', t: 'PDD Clearance', d: '24 Jun 2026', tag: 'Cleared', tagColor: '#34A853' },
            { s: 'done', t: 'Incentive Released', d: '25 Jun 2026' }
          ]
        }
      },
      {
        id: 'LN-2356', name: 'Neha Sharma', amt: 1900, status: 'Earned',
        loanAmt: '₹3,80,000', disbDate: '12 Jun 2026', slab: '0.50%',
        pdd: {
          status: 'cleared',
          stages: [
            { s: 'done', t: 'Loan Disbursed', d: '12 Jun 2026' },
            { s: 'done', t: 'PDD Documents Due', d: '27 Jun 2026' },
            { s: 'done', t: 'PDD Clearance', d: '25 Jun 2026', tag: 'Cleared', tagColor: '#34A853' },
            { s: 'done', t: 'Incentive Released', d: '26 Jun 2026' }
          ]
        }
      },
      {
        id: 'LN-2362', name: 'Vikram Yadav', amt: 2500, status: 'Earned',
        loanAmt: '₹5,00,000', disbDate: '14 Jun 2026', slab: '0.50%',
        pdd: {
          status: 'cleared',
          stages: [
            { s: 'done', t: 'Loan Disbursed', d: '14 Jun 2026' },
            { s: 'done', t: 'PDD Documents Due', d: '29 Jun 2026' },
            { s: 'done', t: 'PDD Clearance', d: '27 Jun 2026', tag: 'Cleared', tagColor: '#34A853' },
            { s: 'done', t: 'Incentive Released', d: '28 Jun 2026' }
          ]
        }
      }
    ]
  },
  '2026-05': {
    label: 'May 2026',
    metrics: {
      disbursed: '₹38.2L', disbursedSub: 'of ₹45L target',
      incentive: '₹19,100', incentiveSub: '@ 0.50% slab',
      pending: '₹3,200', pendingSub: '1 case on hold',
      cases: '8', casesSub: 'of 9 processed'
    },
    slab: {
      active: 1, progress: 76,
      low: '₹20L', current: '₹38.2L', high: '₹50L',
      needed: '₹11.8L more needed',
      tip: 'Disburse ₹11.8L more to unlock 0.75% slab'
    },
    chart: { earned: 19100, pending: 3200, potential: 9550 },
    summary: { earned: '₹19,100', pending: '₹3,200', total: '₹22,300', extra: '+₹9,550 extra' },
    cases: [
      { id: 'LN-2201', name: 'Ravi Kumar', amt: 3800, status: 'Earned', loanAmt: '₹7,60,000', disbDate: '03 May 2026', slab: '0.50%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '03 May 2026' }, { s: 'done', t: 'PDD Documents Due', d: '18 May 2026' }, { s: 'done', t: 'PDD Clearance', d: '16 May 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '17 May 2026' }] } },
      { id: 'LN-2215', name: 'Anjali Mehta', amt: 2600, status: 'Earned', loanAmt: '₹5,20,000', disbDate: '06 May 2026', slab: '0.50%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '06 May 2026' }, { s: 'done', t: 'PDD Documents Due', d: '21 May 2026' }, { s: 'done', t: 'PDD Clearance', d: '19 May 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '20 May 2026' }] } },
      { id: 'LN-2228', name: 'Suresh Patel', amt: 3200, status: 'Pending', loanAmt: '₹6,40,000', disbDate: '09 May 2026', slab: '0.50%', holdReason: 'PDD not cleared — title deed copy pending', pdd: { status: 'pending', stages: [{ s: 'done', t: 'Loan Disbursed', d: '09 May 2026' }, { s: 'done', t: 'PDD Documents Due', d: '24 May 2026' }, { s: 'locked', t: 'PDD Clearance', d: '—', tag: 'Overdue', tagColor: '#E24B4A' }, { s: 'upcoming', t: 'Incentive Release', d: 'Locked' }] } },
      { id: 'LN-2236', name: 'Pooja Reddy', amt: 4500, status: 'Earned', loanAmt: '₹9,00,000', disbDate: '05 May 2026', slab: '0.50%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '05 May 2026' }, { s: 'done', t: 'PDD Documents Due', d: '20 May 2026' }, { s: 'done', t: 'PDD Clearance', d: '18 May 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '19 May 2026' }] } },
      { id: 'LN-2248', name: 'Akhil Nair', amt: 2200, status: 'Earned', loanAmt: '₹4,40,000', disbDate: '12 May 2026', slab: '0.50%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '12 May 2026' }, { s: 'done', t: 'PDD Documents Due', d: '27 May 2026' }, { s: 'done', t: 'PDD Clearance', d: '25 May 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '26 May 2026' }] } },
      { id: 'LN-2255', name: 'Meera Iyer', amt: 1900, status: 'Earned', loanAmt: '₹3,80,000', disbDate: '15 May 2026', slab: '0.50%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '15 May 2026' }, { s: 'done', t: 'PDD Documents Due', d: '30 May 2026' }, { s: 'done', t: 'PDD Clearance', d: '28 May 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '29 May 2026' }] } },
      { id: 'LN-2263', name: 'Karan Chopra', amt: 2800, status: 'Earned', loanAmt: '₹5,60,000', disbDate: '08 May 2026', slab: '0.50%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '08 May 2026' }, { s: 'done', t: 'PDD Documents Due', d: '23 May 2026' }, { s: 'done', t: 'PDD Clearance', d: '21 May 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '22 May 2026' }] } },
      { id: 'LN-2270', name: 'Divya Saxena', amt: 1300, status: 'Earned', loanAmt: '₹2,60,000', disbDate: '18 May 2026', slab: '0.30%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '18 May 2026' }, { s: 'done', t: 'PDD Documents Due', d: '02 Jun 2026' }, { s: 'done', t: 'PDD Clearance', d: '31 May 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '01 Jun 2026' }] } }
    ]
  },
  '2026-04': {
    label: 'Apr 2026',
    metrics: {
      disbursed: '₹55.0L', disbursedSub: 'of ₹50L target',
      incentive: '₹41,250', incentiveSub: '@ 0.75% slab',
      pending: '₹0', pendingSub: 'All cleared',
      cases: '10', casesSub: 'of 10 processed'
    },
    slab: {
      active: 2, progress: 100,
      low: '₹50L', current: '₹55L', high: '₹1Cr',
      needed: 'Target achieved!',
      tip: "You've unlocked Slab 3! Great performance."
    },
    chart: { earned: 41250, pending: 0, potential: 13750 },
    summary: { earned: '₹41,250', pending: '₹0', total: '₹41,250', extra: '+₹13,750 extra' },
    cases: [
      { id: 'LN-2101', name: 'Arun Mishra', amt: 5250, status: 'Earned', loanAmt: '₹7,00,000', disbDate: '02 Apr 2026', slab: '0.75%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '02 Apr 2026' }, { s: 'done', t: 'PDD Documents Due', d: '17 Apr 2026' }, { s: 'done', t: 'PDD Clearance', d: '15 Apr 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '16 Apr 2026' }] } },
      { id: 'LN-2112', name: 'Geeta Bansal', amt: 3750, status: 'Earned', loanAmt: '₹5,00,000', disbDate: '04 Apr 2026', slab: '0.75%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '04 Apr 2026' }, { s: 'done', t: 'PDD Documents Due', d: '19 Apr 2026' }, { s: 'done', t: 'PDD Clearance', d: '17 Apr 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '18 Apr 2026' }] } },
      { id: 'LN-2125', name: 'Farhan Ali', amt: 4500, status: 'Earned', loanAmt: '₹6,00,000', disbDate: '07 Apr 2026', slab: '0.75%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '07 Apr 2026' }, { s: 'done', t: 'PDD Documents Due', d: '22 Apr 2026' }, { s: 'done', t: 'PDD Clearance', d: '20 Apr 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '21 Apr 2026' }] } },
      { id: 'LN-2138', name: 'Lata Agarwal', amt: 6000, status: 'Earned', loanAmt: '₹8,00,000', disbDate: '03 Apr 2026', slab: '0.75%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '03 Apr 2026' }, { s: 'done', t: 'PDD Documents Due', d: '18 Apr 2026' }, { s: 'done', t: 'PDD Clearance', d: '16 Apr 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '17 Apr 2026' }] } },
      { id: 'LN-2145', name: 'Nitin Jain', amt: 3000, status: 'Earned', loanAmt: '₹4,00,000', disbDate: '10 Apr 2026', slab: '0.75%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '10 Apr 2026' }, { s: 'done', t: 'PDD Documents Due', d: '25 Apr 2026' }, { s: 'done', t: 'PDD Clearance', d: '23 Apr 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '24 Apr 2026' }] } }
    ]
  },
  '2026-03': {
    label: 'Mar 2026',
    metrics: {
      disbursed: '₹28.0L', disbursedSub: 'of ₹40L target',
      incentive: '₹8,400', incentiveSub: '@ 0.30% slab',
      pending: '₹1,500', pendingSub: '1 case on hold',
      cases: '6', casesSub: 'of 7 processed'
    },
    slab: {
      active: 0, progress: 56,
      low: '₹0', current: '₹28L', high: '₹50L',
      needed: '₹22L more needed',
      tip: 'Disburse ₹22L more to unlock 0.50% slab'
    },
    chart: { earned: 8400, pending: 1500, potential: 5600 },
    summary: { earned: '₹8,400', pending: '₹1,500', total: '₹9,900', extra: '+₹5,600 extra' },
    cases: [
      { id: 'LN-2051', name: 'Rohit Kapoor', amt: 1800, status: 'Earned', loanAmt: '₹6,00,000', disbDate: '04 Mar 2026', slab: '0.30%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '04 Mar 2026' }, { s: 'done', t: 'PDD Documents Due', d: '19 Mar 2026' }, { s: 'done', t: 'PDD Clearance', d: '17 Mar 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '18 Mar 2026' }] } },
      { id: 'LN-2063', name: 'Swati Pillai', amt: 1500, status: 'Pending', loanAmt: '₹5,00,000', disbDate: '08 Mar 2026', slab: '0.30%', holdReason: 'PDD not cleared — insurance document pending', pdd: { status: 'pending', stages: [{ s: 'done', t: 'Loan Disbursed', d: '08 Mar 2026' }, { s: 'done', t: 'PDD Documents Due', d: '23 Mar 2026' }, { s: 'locked', t: 'PDD Clearance', d: '—', tag: 'Overdue', tagColor: '#E24B4A' }, { s: 'upcoming', t: 'Incentive Release', d: 'Locked' }] } },
      { id: 'LN-2074', name: 'Vivek Desai', amt: 2100, status: 'Earned', loanAmt: '₹7,00,000', disbDate: '06 Mar 2026', slab: '0.30%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '06 Mar 2026' }, { s: 'done', t: 'PDD Documents Due', d: '21 Mar 2026' }, { s: 'done', t: 'PDD Clearance', d: '19 Mar 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '20 Mar 2026' }] } },
      { id: 'LN-2082', name: 'Sneha Kulkarni', amt: 1200, status: 'Earned', loanAmt: '₹4,00,000', disbDate: '11 Mar 2026', slab: '0.30%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '11 Mar 2026' }, { s: 'done', t: 'PDD Documents Due', d: '26 Mar 2026' }, { s: 'done', t: 'PDD Clearance', d: '24 Mar 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '25 Mar 2026' }] } },
      { id: 'LN-2090', name: 'Ajay Thakur', amt: 1800, status: 'Earned', loanAmt: '₹6,00,000', disbDate: '14 Mar 2026', slab: '0.30%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '14 Mar 2026' }, { s: 'done', t: 'PDD Documents Due', d: '29 Mar 2026' }, { s: 'done', t: 'PDD Clearance', d: '27 Mar 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '28 Mar 2026' }] } }
    ]
  },
  '2026-02': {
    label: 'Feb 2026',
    metrics: {
      disbursed: '₹31.5L', disbursedSub: 'of ₹40L target',
      incentive: '₹15,750', incentiveSub: '@ 0.50% slab',
      pending: '₹0', pendingSub: 'All cleared',
      cases: '7', casesSub: 'of 7 processed'
    },
    slab: {
      active: 1, progress: 63,
      low: '₹20L', current: '₹31.5L', high: '₹50L',
      needed: '₹18.5L more needed',
      tip: 'Disburse ₹18.5L more to unlock 0.75% slab'
    },
    chart: { earned: 15750, pending: 0, potential: 7875 },
    summary: { earned: '₹15,750', pending: '₹0', total: '₹15,750', extra: '+₹7,875 extra' },
    cases: [
      { id: 'LN-2001', name: 'Tarun Bhatt', amt: 2500, status: 'Earned', loanAmt: '₹5,00,000', disbDate: '03 Feb 2026', slab: '0.50%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '03 Feb 2026' }, { s: 'done', t: 'PDD Documents Due', d: '18 Feb 2026' }, { s: 'done', t: 'PDD Clearance', d: '16 Feb 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '17 Feb 2026' }] } },
      { id: 'LN-2012', name: 'Rekha Das', amt: 3250, status: 'Earned', loanAmt: '₹6,50,000', disbDate: '05 Feb 2026', slab: '0.50%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '05 Feb 2026' }, { s: 'done', t: 'PDD Documents Due', d: '20 Feb 2026' }, { s: 'done', t: 'PDD Clearance', d: '18 Feb 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '19 Feb 2026' }] } },
      { id: 'LN-2020', name: 'Mohan Lal', amt: 2000, status: 'Earned', loanAmt: '₹4,00,000', disbDate: '08 Feb 2026', slab: '0.50%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '08 Feb 2026' }, { s: 'done', t: 'PDD Documents Due', d: '23 Feb 2026' }, { s: 'done', t: 'PDD Clearance', d: '21 Feb 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '22 Feb 2026' }] } }
    ]
  },
  '2026-01': {
    label: 'Jan 2026',
    metrics: {
      disbursed: '₹22.0L', disbursedSub: 'of ₹35L target',
      incentive: '₹11,000', incentiveSub: '@ 0.50% slab',
      pending: '₹2,100', pendingSub: '1 case on hold',
      cases: '5', casesSub: 'of 6 processed'
    },
    slab: {
      active: 1, progress: 44,
      low: '₹20L', current: '₹22L', high: '₹50L',
      needed: '₹28L more needed',
      tip: 'Disburse ₹28L more to unlock 0.75% slab'
    },
    chart: { earned: 11000, pending: 2100, potential: 5500 },
    summary: { earned: '₹11,000', pending: '₹2,100', total: '₹13,100', extra: '+₹5,500 extra' },
    cases: [
      { id: 'LN-1951', name: 'Sanjay Gupta', amt: 2750, status: 'Earned', loanAmt: '₹5,50,000', disbDate: '05 Jan 2026', slab: '0.50%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '05 Jan 2026' }, { s: 'done', t: 'PDD Documents Due', d: '20 Jan 2026' }, { s: 'done', t: 'PDD Clearance', d: '18 Jan 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '19 Jan 2026' }] } },
      { id: 'LN-1965', name: 'Anita Roy', amt: 2100, status: 'Pending', loanAmt: '₹4,20,000', disbDate: '09 Jan 2026', slab: '0.50%', holdReason: 'PDD not cleared — NOC from builder pending', pdd: { status: 'pending', stages: [{ s: 'done', t: 'Loan Disbursed', d: '09 Jan 2026' }, { s: 'done', t: 'PDD Documents Due', d: '24 Jan 2026' }, { s: 'locked', t: 'PDD Clearance', d: '—', tag: 'Overdue', tagColor: '#E24B4A' }, { s: 'upcoming', t: 'Incentive Release', d: 'Locked' }] } },
      { id: 'LN-1978', name: 'Prakash Singh', amt: 3200, status: 'Earned', loanAmt: '₹6,40,000', disbDate: '07 Jan 2026', slab: '0.50%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '07 Jan 2026' }, { s: 'done', t: 'PDD Documents Due', d: '22 Jan 2026' }, { s: 'done', t: 'PDD Clearance', d: '20 Jan 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '21 Jan 2026' }] } },
      { id: 'LN-1985', name: 'Usha Patil', amt: 2950, status: 'Earned', loanAmt: '₹5,90,000', disbDate: '12 Jan 2026', slab: '0.50%', pdd: { status: 'cleared', stages: [{ s: 'done', t: 'Loan Disbursed', d: '12 Jan 2026' }, { s: 'done', t: 'PDD Documents Due', d: '27 Jan 2026' }, { s: 'done', t: 'PDD Clearance', d: '25 Jan 2026', tag: 'Cleared', tagColor: '#34A853' }, { s: 'done', t: 'Incentive Released', d: '26 Jan 2026' }] } }
    ]
  }
};

export const MONTH_OPTIONS = [
  { value: '2026-06', label: 'June 2026' },
  { value: '2026-05', label: 'May 2026' },
  { value: '2026-04', label: 'Apr 2026' },
  { value: '2026-03', label: 'Mar 2026' },
  { value: '2026-02', label: 'Feb 2026' },
  { value: '2026-01', label: 'Jan 2026' },
];

export const SLAB_CONFIG = [
  { rate: '0.30%', range: 'S1 · ≤20L', bgDefault: '#EAF3DE', numColor: '#3B6D11', rangeColor: '#639922' },
  { rate: '0.50%', range: 'S2 · ≤50L', bgDefault: 'var(--bg-tertiary)', numColor: '', rangeColor: '' },
  { rate: '0.75%', range: 'S3 · ≤1Cr', bgDefault: 'var(--bg-tertiary)', numColor: '', rangeColor: '' },
  { rate: '1.00%', range: 'S4 · 1Cr+', bgDefault: 'var(--bg-tertiary)', numColor: '', rangeColor: '' },
];

export function fmt(n) {
  return '₹' + n.toLocaleString('en-IN');
}
