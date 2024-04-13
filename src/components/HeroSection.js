import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Icon } from 'semantic-ui-react'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-edit.mp4' autoPlay loop muted />
      <h1>Journey of Beauty</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
             Call Us <i className='fa fa-phone' />
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Online Booking <i className='fa fa-calendar-check' />
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
