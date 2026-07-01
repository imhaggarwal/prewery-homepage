import React from 'react';
import { motion, useTransform } from 'framer-motion';

const BrandsFooter = ({ scrollYProgress }) => {
  // THE MATH ENGINE:
  // - At 0 (top of page): Footer is at 0% (fully visible on screen)
  // - At 0.05 (scroll hits the video): Footer drops down to 150% (hidden)
  // - At 1 (bottom of the scroll track): Footer stays locked at 150% (hidden)
  const footerY = useTransform(scrollYProgress, [0, 0.05, 1], ["0%", "150%", "150%"]);
  const footerOpacity = useTransform(scrollYProgress, [0, 0.05, 1], [1, 0, 0]);

  // The dummy data array for your marquee loop
  const brandNames = ['Adobe', 'Airmeet', 'amazon', 'amazon pay', 'Apollo Hospitals', 'AXIS BANK', 'BINANCE', 'darwinbox', 'Deloitte'];
  const duplicateBrands = [...brandNames, ...brandNames];

  return (
    <motion.div 
      className="brands-container"
      style={{ 
        y: footerY, 
        opacity: footerOpacity 
      }}
    >
      <div className="brands-track">
        {duplicateBrands.map((brand, index) => (
          <span key={index} className="brand-logo-mock">{brand}</span>
        ))}
      </div>
    </motion.div>
  );
};

// Exporting it as default so your other files can import it cleanly
export default BrandsFooter;