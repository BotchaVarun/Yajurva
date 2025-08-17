// src/pages/About.jsx
import React from "react";
import TextPressure from "../components/AboutPage/TextPressure";
import ProfileCard from "../components/AboutPage/ProfileCard";

function About() {
  return (
    <div className="about-page">
      {/* Greeting Section */}
      <div className="greeting-section">
        <div style={{ position: "relative", height: "250px", width: "100%" }}>
          <TextPressure
            text="Hello! Welcome to Our About Page"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={42}
          />
        </div>
        <p className="greeting-text">
          We’re a passionate team of developers, designers, and creators bringing 
          innovation and technology together to build impactful digital experiences.
        </p>
      </div>

      {/* Developer Section */}
      <div className="developer-section">
        <h2 className="section-title">
          Meet Our <span className="highlight">Developers</span>
        </h2>

        <div className="profile-grid">
          <ProfileCard
                      name="Javi A. Torres"
                      title="Software Engineer"
                      handle="javicodes"
                      status="Online"
                      contactText="Contact Me"
                      avatarUrl="src\assets\img\varun.jpg"
                      showUserInfo={true}
                      enableTilt={true}
                      enableMobileTilt={false}
                      onContactClick={() => console.log("Contact clicked")} behindGradient={undefined} innerGradient={undefined} miniAvatarUrl={undefined}          />

          <ProfileCard
                      name="Varun Botcha"
                      title="Frontend Developer"
                      handle="varun.codes"
                      status="Available"
                      contactText="Hire Me"
                      avatarUrl="src\assets\img\varun.jpg"
                      showUserInfo={true}
                      enableTilt={true}
                      enableMobileTilt={true}
                      onContactClick={() => console.log("Varun clicked")} behindGradient={undefined} innerGradient={undefined} miniAvatarUrl={undefined}          />

          <ProfileCard
                      name="Sara Lee"
                      title="UI/UX Designer"
                      handle="sara.designs"
                      status="Busy"
                      contactText="Message"
                      avatarUrl="src\assets\img\varun.jpg"
                      showUserInfo={true}
                      enableTilt={true}
                      enableMobileTilt={false}
                      onContactClick={() => console.log("Sara clicked")} behindGradient={undefined} innerGradient={undefined} miniAvatarUrl={undefined}          />
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        .about-page {
          background: linear-gradient(to bottom, #000000, #1a1a1a, #000000);
          min-height: 100vh;
          color: white;
          padding: 4rem 1.5rem;
        }

        .greeting-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 4rem;
        }

        .greeting-text {
          margin-top: 1.5rem;
          max-width: 700px;
          font-size: 1.125rem;
          line-height: 1.6;
          color: #d1d5db;
        }

        .developer-section {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 3rem;
        }

        .highlight {
          color: #ef4444; /* red accent */
        }

        .profile-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          place-items: center;
        }
      `}</style>
    </div>
  );
}

export default About;
