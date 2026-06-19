import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import './AdminQueryDetail.css';

export default function AdminQueryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { queries, addResponse, updateStatus, showToast } = useAdmin();
  
  const query = queries.find(q => q.id === id);
  const [replyText, setReplyText] = useState('');

  if (!query) {
    return (
      <div className="admin-page">
        <div className="admin-card" style={{ padding: 40, textAlign: 'center' }}>
          <h2>Query not found</h2>
          <button className="admin-btn" onClick={() => navigate('/admin')}>Back to list</button>
        </div>
      </div>
    );
  }

  const handleReply = () => {
    if (!replyText.trim()) return;
    addResponse(query.id, replyText, 'Priya');
    setReplyText('');
    showToast('Reply sent successfully');
  };

  const handleStatusChange = (newStatus) => {
    updateStatus(query.id, newStatus);
    showToast(`Status updated to ${newStatus}`);
  };

  return (
    <div className="admin-page detail-page">
      {/* Header */}
      <div className="detail-header-bar">
        <button className="btn-back" onClick={() => navigate('/admin')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </button>
        <div className="detail-actions">
          <select 
            className={`status-select ${query.status.toLowerCase().replace(' ', '-')}`}
            value={query.status}
            onChange={(e) => handleStatusChange(e.target.value)}
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
      </div>

      <div className="detail-grid">
        {/* Left Column: Query Info */}
        <div className="detail-left">
          <div className="admin-card p-6 mb-4">
            <div className="query-meta-header">
              <div>
                <h1 className="query-title">{query.queryType}</h1>
                <div className="query-id">{query.id} • Raised on {query.raisedDate}</div>
              </div>
              <div className="query-amount">
                <div className="amt-label">Affected Incentive</div>
                <div className="amt-val">₹{query.amount.toLocaleString('en-IN')}</div>
              </div>
            </div>

            <div className="query-desc-box">
              <div className="box-label">Description from Loan Officer</div>
              <p className="query-desc-text">{query.description}</p>
            </div>
            
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">Case ID</div>
                <div className="info-val text-primary font-medium">{query.caseId}</div>
              </div>
              <div className="info-item">
                <div className="info-label">Borrower</div>
                <div className="info-val">{query.borrowerName}</div>
              </div>
              <div className="info-item">
                <div className="info-label">Loan Officer</div>
                <div className="info-val">{query.officerName}</div>
              </div>
              <div className="info-item">
                <div className="info-label">Branch</div>
                <div className="info-val">{query.officerBranch}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Communication Thread */}
        <div className="detail-right">
          <div className="admin-card thread-card">
            <div className="thread-header">
              Communication Thread
            </div>
            
            <div className="thread-content">
              {/* Initial Query Message */}
              <div className="msg-bubble officer-msg">
                <div className="msg-meta">
                  <span className="msg-author">{query.officerName} (Loan Officer)</span>
                  <span className="msg-time">{query.raisedDate}</span>
                </div>
                <div className="msg-text">{query.description}</div>
              </div>

              {/* Replies */}
              {query.responses.map((resp, idx) => (
                <div key={idx} className={`msg-bubble ${resp.by.includes('Admin') ? 'admin-msg' : 'officer-msg'}`}>
                  <div className="msg-meta">
                    <span className="msg-author">{resp.by}</span>
                    <span className="msg-time">{resp.date}</span>
                  </div>
                  <div className="msg-text">{resp.text}</div>
                </div>
              ))}
            </div>

            {/* Reply Input */}
            <div className="thread-input-area">
              <textarea 
                className="reply-input"
                placeholder="Type your response here..."
                value={replyText}
                onChange={e => setReplyText(e.target.value)}
              />
              <div className="reply-actions">
                <button className="admin-btn btn-primary" onClick={handleReply} disabled={!replyText.trim()}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
