import React, { useEffect } from 'react';
import uiuxCardImage from '../assets/img/ui-ux-card.png';
import packagingCardImage from '../assets/img/packaging-card.jpg';
import DesignImage from '../assets/img/3d-design-card.jpg';
import IllustrationImage from '../assets/img/illustration-card.jpg';
import BrandingImage from '../assets/img/3d-design-card.jpg';
import '../assets/service.css';
const ServiceCard = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.portfolio-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isHovering =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (isHovering) {
          card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
          card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
<>
    <div className="portfolio-container">
      <div className="portfolio-card uiux-card">
       <div className="card-content">
        <h3>UI/UX Design</h3>

        </div>
      </div>
      <div className="portfolio-card packaging-card">
       <div className="card-content">
        <h3>Packaging</h3>
    
        </div>
      </div>
      <div className="portfolio-card design3d-card">
       <div className="card-content">
        <h3>Designing</h3>
       
        </div>
      </div>
      <div className="portfolio-card illustration-card">
       <div className="card-content">
        <h3>Illustartion</h3>
       
        </div>
      </div>
      <div className="portfolio-card branding-card">
          <div className="card-content">
        <h3>Branding</h3>
       
        </div>
      </div>
    
    </div>
    </>
  );
};

export default ServiceCard;
