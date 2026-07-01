import React from 'react';
import './Solutions.css';

const solutionsData = [
  {
    id: 1,
    title: 'Brand Solutions',
    description: 'Custom tailored solutions working together to deliver seamless execution and measurable brand impact.',
    colorClass: 'card-yellow'
  },
  {
    id: 2,
    title: 'Media Solutions',
    description: 'Custom tailored solutions working together to deliver seamless execution and measurable brand impact.',
    colorClass: 'card-green'
  },
  {
    id: 3,
    title: 'Creative Solutions',
    description: 'Custom tailored solutions working together to deliver seamless execution and measurable brand impact.',
    colorClass: 'card-purple'
  },
  {
    id: 4,
    title: 'Tech Solutions',
    description: 'Custom tailored solutions working together to deliver seamless execution and measurable brand impact.',
    colorClass: 'card-blue'
  }
];

const Solutions = () => {
  return (
    <section className="solutions-container">
      {/* Top Shelf: Header and Button */}
      <header className="solutions-header">
        <div className="header-text">
          <h2>Everything your brand needs to scale, <br/><strong>connected at one place.</strong></h2>
          <p>Custom tailored solutions working together to deliver seamless execution and measurable brand impact.</p>
        </div>
        <button className="schedule-btn">Schedule Meet</button>
      </header>

      {/* Bottom Shelf: Cards Grid */}
      <div className="cards-grid">
        {solutionsData.map((card) => (
          <article key={card.id} className={`solution-card ${card.colorClass}`}>
            <div className="card-content">
              <h3>{card.title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word}
                  <br/>
                </React.Fragment>
              ))}</h3>
              <p>{card.description}</p>
            </div>
            <div className="card-icon">
              <span className="arrow-icon">&gt;</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Solutions;