import React from 'react';
import './ResolvedTasks.css';

const ResolvedTasks = ({ resolved }) => {
  return (
    <div className="resolved-tasks">
      <h3>Resolved Tasks</h3>
      {resolved.length > 0 ? (
        resolved.map(ticket => (
          <div key={ticket.id} className="resolved-task-card">
            <div className="title-row">
              <h4 className="status-title">{ticket.title}</h4>
            </div>
          </div>
        ))
      ) : (
        <p className="no-resolved-text">No resolved tasks yet.</p>
      )}
    </div>
  );
};

export default ResolvedTasks;
