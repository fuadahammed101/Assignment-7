import React from 'react';
import TicketCard from './TicketCard';
import TaskStatus from './TaskStatus';
import ResolvedTasks from './ResolvedTasks';
import './TicketsSection.css';

const TicketsSection = ({ tickets, onSelect, inProgress, onComplete, resolved }) => {
  const openTickets = tickets.filter(t => t.status !== 'resolved');
  // Split tickets into two columns
  const midIndex = Math.ceil(openTickets.length / 2);
  const leftColumnTickets = openTickets.slice(0, midIndex);
  const rightColumnTickets = openTickets.slice(midIndex);

  return (
    <section className="tickets-section">
      <div className="tickets-left">
        <div className="tickets-header">
          <h2>Customer Tickets</h2>
        </div>
        <div className="tickets-grid">
          <div className="tickets-column">
            {leftColumnTickets.map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} onSelect={onSelect} />
            ))}
          </div>
          <div className="tickets-column">
            {rightColumnTickets.map(ticket => (
              <TicketCard key={ticket.id} ticket={ticket} onSelect={onSelect} />
            ))}
          </div>
        </div>
      </div>
      <div className="tickets-right">
        <div className="task-status-wrapper">
          <TaskStatus inProgress={inProgress} onComplete={onComplete} />
        </div>
        <ResolvedTasks resolved={resolved} />
      </div>
    </section>
  );
};

export default TicketsSection;
