import React from 'react';
import './TaskStatus.css';

const TaskStatus = ({ inProgress, onComplete }) => {
  return (
    <div className="task-status">
      <h3>Task Status</h3>
      {inProgress.length > 0 ? (
        inProgress.map(ticket => (
          <div key={ticket.id} className="task-status-card">
            <div className="title-row">
              <h4 className="status-title">{ticket.title}</h4>
            </div>
            <button className="action-btn" onClick={() => onComplete(ticket)}>
              Complete
            </button>
          </div>
        ))
      ) : (
        <p className="select-ticket-text">Select a ticket to view its status</p>
      )}
    </div>
  );
};

export default TaskStatus;
