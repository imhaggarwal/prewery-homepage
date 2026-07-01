import React from 'react';
import './Resources.css';

const resourceItems = [
  { id: 1, gridClass: 'span-2' },
  { id: 2, gridClass: 'span-1' },
  { id: 3, gridClass: 'span-1' },
  { id: 4, gridClass: 'span-1' },
  { id: 5, gridClass: 'span-1' },
  { id: 6, gridClass: 'span-2' }
];

const Resources = () => {
  return (
    <section className="resources-container">
      {/* Header Section */}
      <header className="resources-header">
        <h2>Resources for your brand to scale, <br/><strong>connected in one place.</strong></h2>
        <p>Curated to simplify growth by connecting every capability your brand needs under one ecosystem.</p>
      </header>

      {/* Grid Layout for Resources */}
      <div className="resources-grid">
        {resourceItems.map((item) => (
          <div key={item.id} className={`resource-card ${item.gridClass}`}>
            {/* Image/Content goes here */}
          </div>
        ))}
      </div>

      {/* Footer Hint */}
      <div className="resources-footer">
        <p><span className="arrow-up">&uarr;</span> Click on the Resources to view and Download</p>
      </div>
    </section>
  );
};

export default Resources;