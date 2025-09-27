import React from 'react';
import './Banner.css';

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="stat-card in-progress">
          <div className="text-column">
            <h3>In Progress</h3>
            <p className="count">{inProgressCount}</p>
          </div>
          <img src="/vector1.png" alt="" className="left-vector" />
          <img src="/vector1.png" alt="" className="right-vector" />
        </div>
        <div className="stat-card resolved">
          <div className="text-column">
            <h3>Resolved</h3>
            <p className="count">{resolvedCount}</p>
          </div>
          <img src="/vector1.png" alt="" className="left-vector" />
          <img src="/vector1.png" alt="" className="right-vector" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
