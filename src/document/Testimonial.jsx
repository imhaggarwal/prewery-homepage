import React from 'react';
import './Testimonials.css';

const testimonialData = [
  {
    id: 1,
    quote: "I recruited a creative team from Designera, and every individual has been performing outstandingly well!",
    name: "Rajat Malhotra",
    company: "PixelWeave Studios"
  },
  {
    id: 2,
    quote: "From concept to execution, Designera exceeded our expectations and delivered stunning results!",
    name: "Isha Kapoor",
    company: "Paynexa Fintech"
  },
  {
    id: 3,
    quote: "Designera transformed our brand presence with innovative designs that truly connect with our audience!",
    name: "Rohit Mehra",
    company: "BrandRaga"
  },
  {
    id: 4,
    quote: "Thanks to Designera, our product packaging now stands out on shelves like never before.",
    name: "Mahesh Bansal",
    company: "Champaran Agro Mills"
  },
  {
    id: 5,
    quote: "We collaborated with Designera for social media graphics, and the engagement has been phenomenal.",
    name: "Neha Sinha",
    company: "Paridhan Chikan"
  },
  {
    id: 6,
    quote: "Every design from Designera reflects a deep understanding of our brand and its values.",
    name: "Farhan Qureshi",
    company: "PolyKart Industries"
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <header className="testimonials-header">
        <h2>We turn ideas into influence.</h2>
        <h1>Thankfully, our clients don't keep that a secret.</h1>
      </header>

      <div className="testimonials-grid">
        {testimonialData.map((data) => (
          <div key={data.id} className="testimonial-card">
            <p className="card-quote">{data.quote}</p>
            
            <div className="card-author">
              {/* Using a placeholder service for avatars */}
              <div 
                className="author-avatar" 
                style={{ backgroundImage: `url(https://i.pravatar.cc/150?u=${data.id})` }}
              ></div>
              <div className="author-details">
                <h4 className="author-name">{data.name}</h4>
                <p className="author-company">{data.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;