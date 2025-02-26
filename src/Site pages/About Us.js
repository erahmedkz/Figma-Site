import React from 'react';
import About from './AboutUs/about';
import OurTeam from './AboutUs/ourteam';
import BlogSection from './AboutUs/blog'; 
import Team from './Home/team'; 
import Authors2 from './AboutUs/authorstwo';

function AboutUs() {
  return (
    <div>
      <About />
      <OurTeam />
      <BlogSection />
      <Authors2 />
      <Team />
    </div>
  );
}

export default AboutUs;