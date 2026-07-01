


// import { useState } from 'react';
// import './CaseStudy.scss';

// // 1. The Data: Updated with Lorem Ipsum for titles and descriptions
// const caseStudiesData = [
//   {
//     id: 'abp',
//     logoText: 'ABP',
//     logoClass: 'bg-red',
//     title: <>How <strong>ABP Network</strong> Ideas of India Summit 2026 got 6 million organic views on Insta with Prewery.</>,
//     description: 'From real-time content production to strategic distribution, we transformed a three-day summit into a six million view conversation.',
//     stat1Value: '250%',
//     stat1Label: 'Reduction in CPV',
//     stat2Value: '60,00,000',
//     stat2Label: 'Organic Reach on Instagram',
//     imageLabel: 'ABP Network Image Space'
//   },
//   {
//     id: 'f',
//     logoText: 'F',
//     logoClass: 'bg-yellow',
//     title: <>How <strong>Brand F</strong> sed do eiusmod tempor incididunt ut labore.</>,
//     description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',
//     stat1Value: '120%',
//     stat1Label: 'Increase in Conversions',
//     stat2Value: '1.2M',
//     stat2Label: 'New Unique Visitors',
//     imageLabel: ' F Image Space'
//   },
//   {
//     id: 'd',
//     logoText: 'D',
//     logoClass: 'bg-white',
//     title: <>How <strong>Company D</strong> ut enim ad minim veniam quis nostrud.</>,
//     description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.',
//     stat1Value: '400%',
//     stat1Label: 'Engagement Spike',
//     stat2Value: '500k',
//     stat2Label: 'New Active Followers',
//     imageLabel: 'D Image Space'
//   },
//   {
//     id: 'toi',
//     logoText: 'TOI',
//     logoClass: 'bg-orange',
//     title: <>How <strong>Times of India</strong> voluptas sit aspernatur aut odit aut fugit.</>,
//     description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
//     stat1Value: '85%',
//     stat1Label: 'Retention Lift',
//     stat2Value: '10M+',
//     stat2Label: 'Monthly Active Users',
//     imageLabel: 'TOI Image Space'
//   },
//   {
//     id: 'p',
//     logoText: 'P',
//     logoClass: 'bg-purple',
//     title: <>How <strong>Platform P</strong> quis autem vel eum iure reprehenderit qui.</>,
//     description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
//     stat1Value: '45%',
//     stat1Label: 'Lower CAC',
//     stat2Value: '3.5x',
//     stat2Label: 'Return on Ad Spend',
//     imageLabel: 'P Image Space'
//   },
//   {
//     id: 'b',
//     logoText: 'B',
//     logoClass: 'bg-blue',
//     title: <>How <strong>Business B</strong> et harum quidem rerum facilis est et expedita.</>,
//     description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
//     stat1Value: '3x',
//     stat1Label: 'Pipeline Velocity',
//     stat2Value: '₹4.2Cr',
//     stat2Label: 'Net New Pipeline Generated',
//     imageLabel: 'b image space'
//   }
// ];

// const Page2 = () => {
//   const [activeStudy, setActiveStudy] = useState(caseStudiesData[0]);

//   return (
//     <div className="case-study-container">
//       {/* Top Compartment: Header & Logos */}
//       <header className="header-section">
//         <h1>
//           <div className='l1'>We're <strong>brand builders</strong> at heart, creators by craft, technologists by</div>
//           <div className='l2'>passion, and integrated growth partners by nature.</div> 
//         </h1>
//         <p className="subtitle"><span className="arrow">&darr;</span> Click on the logos to view the case study</p>
        
//         <div className="logos-row">
//           {caseStudiesData.map((study) => (
//             <div 
//               key={study.id}
//               className={`logo-placeholder ${study.logoClass} ${activeStudy.id === study.id ? 'active' : ''}`}
//               onClick={() => setActiveStudy(study)}
//               style={{ cursor: 'pointer' }}
//             >
//               {study.logoText}
//             </div>
//           ))}
//         </div>
//       </header>

//       {/* Bottom Compartment: 2-Column Grid */}
//       <main className="content-section animated-content" key={activeStudy.id}>
        
//         {/* Left Column: Text & Stats */}
//         <div className="text-content">
//           <h2>{activeStudy.title}</h2>
//           <p>{activeStudy.description}</p>
          
//           <hr className="divider" />
          
//           <div className="stats-row">
//             <div className="stat">
//               <h3>{activeStudy.stat1Value}</h3>
//               <p>{activeStudy.stat1Label}</p>
//             </div>
//             <div className="stat">
//               <h3>{activeStudy.stat2Value}</h3>
//               <p>{activeStudy.stat2Label}</p>
//             </div>
//           </div>
          
//           <a href="#casestudy" className="casestudy-link">View video casestudy &rarr;</a>
//         </div>

//         {/* Right Column: Image Placeholder */}
//         <div className="image-content">
//           <div className="image-placeholder">
//             <span>{activeStudy.imageLabel}</span>
//           </div>
//         </div>
        
//       </main>
//     </div>
//   );
// };

// export default Page2;

import { useState } from 'react';
import './CaseStudy.scss';
import reImage from '../assets/re.png'; // Import the image

// 1. The Data: Slide deck updated with the image source
const caseStudiesData = [
  {
    id: 'abp',
    logoText: 'ABP',
    logoClass: 'bg-red',
    title: <>How <strong>ABP Network</strong> Ideas of India Summit 2026 got 6 million organic views on Insta with Prewery.</>,
    description: 'From real-time content production to strategic distribution, we transformed a three-day summit into a six million view conversation.',
    stat1Value: '250%',
    stat1Label: 'Reduction in CPV',
    stat2Value: '60,00,000',
    stat2Label: 'Organic Reach on Instagram',
    imageLabel: 'ABP Network Image Space',
    imageSrc: reImage // <-- Added the image path here
  },
  {
    id: 'f',
    logoText: 'F',
    logoClass: 'bg-yellow',
    title: <>How <strong>Brand F</strong> sed do eiusmod tempor incididunt ut labore.</>,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',
    stat1Value: '120%',
    stat1Label: 'Increase in Conversions',
    stat2Value: '1.2M',
    stat2Label: 'New Unique Visitors',
    imageLabel: ' F Image Space'
  },
  {
    id: 'd',
    logoText: 'D',
    logoClass: 'bg-white',
    title: <>How <strong>Company D</strong> ut enim ad minim veniam quis nostrud.</>,
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.',
    stat1Value: '400%',
    stat1Label: 'Engagement Spike',
    stat2Value: '500k',
    stat2Label: 'New Active Followers',
    imageLabel: 'D Image Space'
  },
  {
    id: 'toi',
    logoText: 'TOI',
    logoClass: 'bg-orange',
    title: <>How <strong>Times of India</strong> voluptas sit aspernatur aut odit aut fugit.</>,
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
    stat1Value: '85%',
    stat1Label: 'Retention Lift',
    stat2Value: '10M+',
    stat2Label: 'Monthly Active Users',
    imageLabel: 'TOI Image Space'
  },
  {
    id: 'p',
    logoText: 'P',
    logoClass: 'bg-purple',
    title: <>How <strong>Platform P</strong> quis autem vel eum iure reprehenderit qui.</>,
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
    stat1Value: '45%',
    stat1Label: 'Lower CAC',
    stat2Value: '3.5x',
    stat2Label: 'Return on Ad Spend',
    imageLabel: 'P Image Space'
  },
  {
    id: 'b',
    logoText: 'B',
    logoClass: 'bg-blue',
    title: <>How <strong>Business B</strong> et harum quidem rerum facilis est et expedita.</>,
    description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    stat1Value: '3x',
    stat1Label: 'Pipeline Velocity',
    stat2Value: '₹4.2Cr',
    stat2Label: 'Net New Pipeline Generated',
    imageLabel: 'b image space'
  }
];

const Page2 = () => {
  const [activeStudy, setActiveStudy] = useState(caseStudiesData[0]);

  return (
    <div className="case-study-container">
      {/* Top Compartment: Header & Logos */}
      <header className="header-section">
        <h1>
          <div className='l1'>We're <strong>brand builders</strong> at heart, creators by craft, technologists by</div>
          <div className='l2'>passion, and integrated growth partners by nature.</div> 
        </h1>
        <p className="subtitle"><span className="arrow">&darr;</span> Click on the logos to view the case study</p>
        
        <div className="logos-row">
          {caseStudiesData.map((study) => (
            <div 
              key={study.id}
              className={`logo-placeholder ${study.logoClass} ${activeStudy.id === study.id ? 'active' : ''}`}
              onClick={() => setActiveStudy(study)}
              style={{ cursor: 'pointer' }}
            >
              {study.logoText}
            </div>
          ))}
        </div>
      </header>

      {/* Bottom Compartment: 2-Column Grid */}
      <main className="content-section animated-content" key={activeStudy.id}>
        
        {/* Left Column: Text & Stats */}
        <div className="text-content">
          <h2>{activeStudy.title}</h2>
          <p>{activeStudy.description}</p>
          
          <hr className="divider" />
          
          <div className="stats-row">
            <div className="stat">
              <h3>{activeStudy.stat1Value}</h3>
              <p>{activeStudy.stat1Label}</p>
            </div>
            <div className="stat">
              <h3>{activeStudy.stat2Value}</h3>
              <p>{activeStudy.stat2Label}</p>
            </div>
          </div>
          
          <a href="#casestudy" className="casestudy-link">View video casestudy &rarr;</a>
        </div>

        {/* Right Column: Image Placeholder / Projector updated */}
        <div className="image-content">
          <div className="image-placeholder">
            {activeStudy.imageSrc ? (
              <img 
                src={activeStudy.imageSrc} 
                alt={activeStudy.imageLabel} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} 
              />
            ) : (
              <span>{activeStudy.imageLabel}</span>
            )}
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default Page2;