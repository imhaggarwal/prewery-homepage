import React from 'react'
import Hero from './component/Hero'
import Videoh from './document/BackRoom'

import Page2 from './document/Page2'
import Solutions from './document/Solutions'
import Pipeline from './document/Pipeline'
import Resources from './document/Resources'
import FeaturesHero from './document/FeaturesHero'
import Testimonial from './document/Testimonial'
import './index.css'
import Header from './document/Header'
import BrandsFooter from './document/Brand'
import Workflow from './document/Workflow'
import BackRoom from './document/BackRoom'
import Fake from './document/Fake'

const App = () => {
  return (
    <div  className='app-container'>
      <Hero/>
     
      <Page2/>
      <Solutions/>
      <Pipeline/>
      <Resources/>
      <FeaturesHero/>
      <Testimonial/>
      
      <Workflow/> 
      <Fake/>

      <BackRoom/>

      
    
      
      
     
      

      
    </div>
  )
}

export default App
