import React from 'react';
import MainBanner from './Home/mabanner';
import Posts from './Home/posts';
import ContentOverview from './Home/about'; 
import Category from './Home/category';
import SpecialP from './Home/specialIP'; 
import Authors from './Home/authors'; 
import Logos from './Home/logos'; 
import Rate from './Home/rate'; 
import Team from './Home/team'; 
function Home() {
  return (
    <>
      <MainBanner />
      <Posts />
      <ContentOverview />
      <Category />
      <SpecialP />
      <Authors />
      <Logos />
      <Rate />
      <Team />
    </>
  );
}

export default Home;