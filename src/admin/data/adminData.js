// Admin panel mock data — queries raised by loan officers + admin management data

export const ROLES = [
  { value: '', label: 'Select Role' },
  { value: 'loan_officer', label: 'Loan Officer' },
  { value: 'branch_manager', label: 'Branch Manager' },

];

export const BRANCHES = [
  'All Branches', 'Gurugram', 'Delhi', 'Mumbai', 'Pune', 'Jaipur', 'Lucknow'
];

export const QUERY_STATUSES = ['All', 'Open', 'In Progress', 'Resolved'];

export const queries = [
  {
    id: 'QRY-1001',
    caseId: 'LN-2318',
    borrowerName: 'Rahul Gupta',
    officerName: 'Rajesh Sharma',
    officerBranch: 'Gurugram',
    role: 'loan_officer',
    queryType: 'PDD Issue',
    description: 'Post-disbursement documents are pending from borrower side. Need help expediting the PDD clearance to release incentive.',
    amount: 3000,
    raisedDate: '18 Jun 2026',
    status: 'Open',
    priority: 'High',
    responses: [],
  },
  {
    id: 'QRY-1002',
    caseId: 'LN-2341',
    borrowerName: 'Kavita Rao',
    officerName: 'Rajesh Sharma',
    officerBranch: 'Gurugram',
    role: 'loan_officer',
    queryType: 'Incentive Calculation',
    description: 'The incentive seems lower than expected. Slab should be 0.50% but calculation shows 0.30% for this case. Please verify.',
    amount: 2950,
    raisedDate: '17 Jun 2026',
    status: 'In Progress',
    priority: 'Medium',
    responses: [
      {
        by: 'Admin — Priya (Credit Ops)',
        date: '17 Jun 2026, 4:30 PM',
        text: 'Looking into this. The slab calculation is based on cumulative disbursement at time of case processing. Will verify the timeline.',
      }
    ],
  },
  {
    id: 'QRY-1003',
    caseId: 'LN-2228',
    borrowerName: 'Suresh Patel',
    officerName: 'Ankit Mehta',
    officerBranch: 'Delhi',
    role: 'loan_officer',
    queryType: 'PDD Issue',
    description: 'Title deed copy was submitted on 20 May but PDD still shows as pending. The document was acknowledged by ops team.',
    amount: 3200,
    raisedDate: '15 Jun 2026',
    status: 'Open',
    priority: 'High',
    responses: [],
  },
  {
    id: 'QRY-1004',
    caseId: 'LN-1965',
    borrowerName: 'Anita Roy',
    officerName: 'Vikram Sinha',
    officerBranch: 'Jaipur',
    role: 'loan_officer',
    queryType: 'Payment Delay',
    description: 'Incentive for January was marked as earned but payment has not been credited to my account yet. It has been 5 months.',
    amount: 2100,
    raisedDate: '12 Jun 2026',
    status: 'Resolved',
    priority: 'Low',
    responses: [
      {
        by: 'Admin — Rahul (Finance)',
        date: '13 Jun 2026, 11:00 AM',
        text: 'Payment was processed on 10 Jun. It should reflect in your next salary cycle. Reference: PAY-88421.',
      },
      {
        by: 'Vikram Sinha (Loan Officer)',
        date: '14 Jun 2026, 9:15 AM',
        text: 'Confirmed. Payment received. Thank you!',
      }
    ],
  },
  {
    id: 'QRY-1005',
    caseId: 'LN-2063',
    borrowerName: 'Swati Pillai',
    officerName: 'Deepak Nair',
    officerBranch: 'Mumbai',
    role: 'loan_officer',
    queryType: 'PDD Issue',
    description: 'Insurance document was submitted in March but the PDD clearance is still overdue. The borrower has completed all requirements.',
    amount: 1500,
    raisedDate: '10 Jun 2026',
    status: 'In Progress',
    priority: 'Medium',
    responses: [
      {
        by: 'Admin — Meena (Ops)',
        date: '11 Jun 2026, 3:45 PM',
        text: 'Insurance document received but verification is pending with the insurance company. Expected resolution by end of this week.',
      }
    ],
  },
  {
    id: 'QRY-1006',
    caseId: 'LN-2145',
    borrowerName: 'Nitin Jain',
    officerName: 'Pooja Agarwal',
    officerBranch: 'Pune',
    role: 'loan_officer',
    queryType: 'Other',
    description: 'My April incentive shows 0.75% slab but the contest bonus was not added. The target achievement bonus of ₹5,000 is missing.',
    amount: 5000,
    raisedDate: '08 Jun 2026',
    status: 'Resolved',
    priority: 'Medium',
    responses: [
      {
        by: 'Admin — Priya (Credit Ops)',
        date: '09 Jun 2026, 10:30 AM',
        text: 'Contest bonus is processed separately from regular incentives. Your April contest bonus has been approved and will be paid in the June cycle.',
      }
    ],
  },
  {
    id: 'QRY-1007',
    caseId: 'LN-2291',
    borrowerName: 'Amit Verma',
    officerName: 'Rajesh Sharma',
    officerBranch: 'Gurugram',
    role: 'loan_officer',
    queryType: 'Incentive Calculation',
    description: 'Can you confirm the exact slab percentage applied for this case? The earned amount does not match my manual calculation of 0.50% on ₹8.2L.',
    amount: 4100,
    raisedDate: '05 Jun 2026',
    status: 'Resolved',
    priority: 'Low',
    responses: [
      {
        by: 'Admin — Priya (Credit Ops)',
        date: '06 Jun 2026, 2:00 PM',
        text: 'The 0.50% slab is correct. ₹8,20,000 × 0.50% = ₹4,100. Your calculation is accurate. The amount has been released.',
      }
    ],
  },
];

// Stats computed from queries
export function getQueryStats(filteredQueries) {
  const open = filteredQueries.filter(q => q.status === 'Open').length;
  const inProgress = filteredQueries.filter(q => q.status === 'In Progress').length;
  const resolved = filteredQueries.filter(q => q.status === 'Resolved').length;
  const totalAmount = filteredQueries
    .filter(q => q.status !== 'Resolved')
    .reduce((s, q) => s + q.amount, 0);
  return { open, inProgress, resolved, total: filteredQueries.length, totalAmount };
}
