import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketsSection from './components/TicketsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setTickets(data))
      .catch(error => console.error('Error fetching tickets:', error));
  }, []);

  const inProgress = tickets.filter(t => t.status === 'in-progress');
  const resolved = tickets.filter(t => t.status === 'resolved');

  const handleTicketSelect = (ticket) => {
    console.log('Ticket selected:', ticket.id);
    const ticketId = ticket.id;
    setTickets(tickets.map(t => 
      t.id === ticketId && t.status === 'open' 
        ? { ...t, status: 'in-progress' }
        : t
    ));
    toast.success('Ticket moved to in-progress!');
  };

  const handleComplete = (ticket) => {
    const ticketId = ticket.id;
    setTickets(tickets.map(t => 
      t.id === ticketId && t.status === 'in-progress'
        ? { ...t, status: 'resolved' }
        : t
    ));
    toast.success('Ticket resolved!');
  };

  return (
    <div className="App">
      <Navbar />
      <Banner inProgressCount={inProgress.length} resolvedCount={resolved.length} />
      <main className="main">
        <TicketsSection 
          tickets={tickets} 
          onSelect={handleTicketSelect} 
          inProgress={inProgress}
          onComplete={handleComplete}
          resolved={resolved}
        />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
