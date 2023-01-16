import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about' >
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G Letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoob" className='spoon__image' />
        <p className='p__opensans'>At our Foreign restaurant, we take pride in offering a true taste of our home country's traditional cuisine. Our chefs use only the freshest ingredients and authentic spices to create a menu that is both delicious and authentic. Our team is dedicated to providing an unparalleled dining experience, with a welcoming service.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt=" about_knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoob" className='spoon__image' />
        <p className='p__opensans'>Our restaurant has a rich history rooted in our home country's culinary traditions. We've been serving authentic dishes for many years, passed down from generations of skilled cooks. We take pride in preserving the cultural heritage of our cuisine, and strive to give our customers a truly authentic dining experience.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
