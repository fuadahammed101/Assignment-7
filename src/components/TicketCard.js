import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket, onSelect }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getPriorityLabel = (priority) => {
    return priority.toUpperCase() + ' PRIORITY';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#F83044';
      case 'medium': return '#FEBB0C';
      case 'low': return '#02A53B';
      default: return '#627382';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'open': return 'Open';
      case 'in-progress': return 'In-Progress';
      default: return 'Open';
    }
  };

  const handleTitleRowClick = (e) => {
    console.log('Title row clicked for ticket', ticket.id);
    if (ticket.status === 'open') {
      e.stopPropagation();
      onSelect(ticket);
    }
  };

  const titleRowProps = ticket.status === 'open' ? { onClick: handleTitleRowClick, style: { cursor: 'pointer' } } : {};

  return (
    <div className={`ticket-card status-${ticket.status}`}>
      <div className="ticket-content">
        <div className="ticket-main">
          <div className="ticket-row">
            <div className="ticket-title-row" {...titleRowProps}>
              <h4 className="title">{ticket.title}</h4>
              <div className="status-badge">
                <div className="badge-content">
                  <div className="dot"></div>
                  <span className="badge-text">{getStatusText(ticket.status)}</span>
                </div>
              </div>
            </div>
          </div>
          <p className="description">{ticket.description.length > 100 ? ticket.description.substring(0, 100) + '...' : ticket.description}</p>
        </div>
        <div className="ticket-meta">
          <div className="meta-left">
            <p className="ticket-id">#{ticket.id}</p>
            <p className="priority-label" style={{ color: getPriorityColor(ticket.priority) }}>{getPriorityLabel(ticket.priority)}</p>
          </div>
          <div className="meta-right">
            <p className="customer">{ticket.customer}</p>
            <p className="date">{formatDate(ticket.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
