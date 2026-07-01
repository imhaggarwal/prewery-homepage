import React, { useState } from 'react';
import './Workflow.scss';

const faqs = [
  { id: 1, question: "What services does Designera offer in graphic designing?" },
  { id: 2, question: "Can companies collaborate with Designera to complete their graphic design projects?" },
  { id: 3, question: "How does Designera ensure the quality of its graphic design work?" },
  { id: 4, question: "Closed Question Example" },
];

const DoubtsSection = () => {
  // State to track which question is currently expanded
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="doubts-container">
      <h2 className="title">Resolve your Doubts here.</h2>
      
      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            <div className="faq-header" onClick={() => toggleOpen(faq.id)}>
              <div className="faq-question-group">
                <span className="faq-number">{faq.id}.</span>
                <span className="faq-question">{faq.question}</span>
              </div>
              <button className="toggle-btn" aria-label="Toggle Answer">
                {openId === faq.id ? '-' : '+'}
              </button>
            </div>
            
            {openId === faq.id && (
              <div className="faq-answer">
                <p>Answer placeholder...</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="faq-footer">
        </div>
    </div>
  );
};

export default DoubtsSection;