import React, { useEffect } from 'react';
import uiuxCardImage from '../assets/img/ui-ux-card.png';
import packagingCardImage from '../assets/img/packaging-card.jpg';
import DesignImage from '../assets/img/3d-design-card.jpg';
import IllustrationImage from '../assets/img/illustration-card.jpg';
import BrandingImage from '../assets/img/3d-design-card.jpg';

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

    <div className="portfolio-container">
      <div className="portfolio-card uiux-card">
       <div className="card-content">
        <h3>UI/UX Design</h3>
        <p>Interactive, user-friendly designs with motion effects.</p>
        </div>
      </div>
      <div className="portfolio-card packaging-card">
       <div className="card-content">
        <h3>Packaging</h3>
        <p>Interactive, user-friendly designs with motion effects.</p>
        </div>
      </div>
      <div className="portfolio-card design3d-card">
       <div className="card-content">
        <h3>Designing</h3>
        <p>Interactive, user-friendly designs with motion effects.</p>
        </div>
      </div>
      <div className="portfolio-card illustration-card">
       <div className="card-content">
        <h3>Illustartion</h3>
        <p>Interactive, user-friendly designs with motion effects.</p>
        </div>
      </div>
      <div className="portfolio-card branding-card">
          <div className="card-content">
        <h3>Branding</h3>
        <p>Interactive, user-friendly designs with motion effects.</p>
        </div>
      </div>
    
      <style jsx>{`
         @import url("https://api.fontshare.com/v2/css?f[]=hind@400&f[]=pilcrow-rounded@600&display=swap");
        .portfolio-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 0;
          font-family: 'Inter', sans-serif;
        }

        .portfolio-card {
          border-radius: 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: all 0.4s ease;
          position: relative;
          height: 200px;
          background-size: cover;
          background-position: center;
        }
.uiux-card {
  background-image: url(${uiuxCardImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}


        .packaging-card {
          background-image: url(${packagingCardImage});
            background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
        }

        .design3d-card {
          background-image: url(${DesignImage});
            background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
        }

        .illustration-card {
          background-image: url(${IllustrationImage});
            background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
        }

        .branding-card {
          background-image: url(${BrandingImage});
            background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
        }

.portfolio-card::after {
  content: 'view'; 
  position: fixed;
  left: var(--mouse-x, -100px);
  top: var(--mouse-y, -100px);
  width: 100px;
  height: 100px;
  background: rgba(247, 246, 246, 0.8);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 400;
  font-family:'Bebas Neue', sans-serif;
  font-size:1.2em;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: opacity 0.2s ease;
  backdrop-filter: blur(2px);
  z-index: 9999;
}


        .portfolio-card:hover::after {
          opacity: 1;
        }

        .portfolio-card:hover {
          height: 400px;
          transform: translateY(0);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          cursor: none;
        }

        .card-content {
          height: 150px;
          padding: 2rem;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          flex-direction: column;
          position: relative;
          z-index: 2;
          transition: all 0.4s ease;
        }

        .portfolio-card:hover .card-content {
          height: 300px;
          transform: translateY(-20px);
        }

        .card-content h3 {
          font-size: 2.2rem;
          font-weight: 800;
          margin: 0;
          color: white;
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.08em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
        }
        .card-content p {
          font-size: 1.2rem;
          font-weight: 800;
          margin: 0;
          color: white;
          font-family: 'Hind', sans-serif;
          letter-spacing: 0.08em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
        }

        @media (max-width: 768px) {
          .portfolio-card {
            height: 160px;
          }

          .portfolio-card:hover {
            height: 280px;
          }

          .card-content {
            padding: 1.5rem;
          }

          .card-content h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
