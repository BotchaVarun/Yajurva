import React, { useRef, useEffect } from 'react';
import '../assets/servicecomponent.css';

const ImageParallax = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrappers = container.querySelectorAll('.wrapper');
    const images = container.querySelectorAll('.parallax-card');

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentX = (x / rect.width - 0.5) * 2;

      const containerMoveX = -percentX * 30;
      const imageMoveX = -percentX * 60;
      const bgX = 50 - percentX * 40;

      wrappers.forEach((wrapper) => {
        wrapper.style.transform = `translateX(${containerMoveX}px)`;
      });

      images.forEach((image) => {
        image.style.transform = `translateX(${imageMoveX}px)`;
        image.style.backgroundPosition = `${bgX}% 50%`;
      });

      images.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isHovering =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (isHovering) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        } else {
          card.style.setProperty('--mouse-x', `-100px`);
          card.style.setProperty('--mouse-y', `-100px`);
        }
      });
    };

    const handleMouseLeave = () => {
      wrappers.forEach((wrapper) => {
        wrapper.style.transform = `translateX(0px)`;
      });
      images.forEach((image) => {
        image.style.transform = `translateX(0px)`;
        image.style.backgroundPosition = `50% 50%`;
        image.style.setProperty('--mouse-x', `-100px`);
        image.style.setProperty('--mouse-y', `-100px`);
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="service-wrapper">
        <h1 className="services-heading">Services</h1>
        <div className="image-container" ref={containerRef}>
          <div className="wrapper"><div className="image image-1 parallax-card"></div></div>
          <div className="wrapper"><div className="image image-2 parallax-card"></div></div>
          <div className="wrapper"><div className="image image-3 parallax-card"></div></div>
          <div className="wrapper"><div className="image image-4 parallax-card"></div></div>
        </div>
      </div>

      <div className="buttons">
        <span>All works</span>
        <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" width="24" height="24">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </>
  );
};

export default ImageParallax;
