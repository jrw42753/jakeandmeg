import React, { Component } from 'react';
import HeaderImage from '../header-image/HeaderImage'
import OurStory from '../pages/our-story/OurStory'
 
class Home extends Component {
  render() {
    return (
      <div>
        <HeaderImage />
        <OurStory />
      </div>
    );
  }
}
 
export default Home;