import React from 'react';
import './Homepage/css/Services.css'; // Import the corresponding CSS file
import SpotlightCard from './SpotlightCard';
  

function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        
        {/* Section Heading */}
        <div className="services-header">
          <h2 className="services-title">
            <span className="title-light">Our</span> Services
          </h2>
          <p className="services-subtitle">
            At Yajurva, we craft meaningful digital experiences tailored to your business. 
            From websites and apps to UI/UX and growth strategies, our services blend 
            creativity with functionality to deliver long-lasting impact.
          </p>
        </div>

        {/* Services Grid (2 columns on desktop) */}
        <div className="services-grid">
          
          {/* Featured Service Card: Web Design */}
          <div className="service-card featured">
            
              <SpotlightCard className="custom-spotlight-card card-content" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="card-icon"><span>✨</span></div>
              <h3 className="card-title">Web Design</h3>
              <p className="card-description">
                We design visually stunning, user-friendly websites that leave a lasting impression. 
                Blending creativity with functionality, our designs elevate your brand identity.
              </p>
              <div className="card-footer">
                <p className="card-price">
                  Starts at <span className="price-amount">$1,500</span>
                </p>
                <button className="card-button">Book a Call →</button>
              </div>
               </SpotlightCard>

            
          </div>

          {/* Standard Service Card: Web Development */}
          <div className="service-card">
            
              <SpotlightCard className="custom-spotlight-card card-content" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="card-icon"><span>💻</span></div>
              <h3 className="card-title">Web Development</h3>
              <p className="card-description">
                Our team builds scalable, high-performing websites that align with your business objectives. 
                We ensure your site is fast, secure, and future-ready.
              </p>
              <div className="card-footer">
                <p className="card-price">
                  Starts at <span className="price-amount">$1,800</span>
                </p>
                <button className="card-button">Book a Call →</button>
              </div>
              </SpotlightCard>
             

          </div>

          {/* Standard Service Card: App Development */}
          <div className="service-card">
             <SpotlightCard className="custom-spotlight-card card-content" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="card-icon"><span>📱</span></div>
              <h3 className="card-title">App Development</h3>
              <p className="card-description">
                We create modern, scalable mobile applications that deliver smooth user experiences 
                and drive engagement across platforms.
              </p>
              <div className="card-footer">
                <p className="card-price">
                  Starts at <span className="price-amount">$2,000</span>
                </p>
                <button className="card-button">Book a Call →</button>
              </div>
            </SpotlightCard>
          </div>

          {/* Featured Service Card: Digital Marketing */}
          <div className="service-card featured">
            <SpotlightCard className="custom-spotlight-card card-content" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className="card-icon"><span>📢</span></div>
              <h3 className="card-title">Digital Marketing</h3>
              <p className="card-description">
                From SEO and social media to content strategy, our marketing solutions 
                help your brand grow online while building long-term customer relationships.
              </p>
              <div className="card-footer">
                <p className="card-price">
                  Starts at <span className="price-amount">$1,200</span>
                </p>
                <button className="card-button">Book a Call →</button>
              </div>
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;
