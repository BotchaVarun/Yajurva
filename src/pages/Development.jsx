// src/pages/Development.jsx
import React from "react";
import GridDistortion from "../components/DevelopmentPage/GridDistortion";
import ScrollReveal from "../components/DevelopmentPage/ScrollReveal";
import MagicBento from "../components/DevelopmentPage/MagicBento";

function Development() {
  return (
    <div className="development-page">
      {/* Section 1 - Hero (Grid Distortion) */}
      <section className="hero-section">
        <GridDistortion
          imageSrc="https://picsum.photos/1920/1080?grayscale"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="custom-class"
        />
        <div className="hero-overlay">
          <h1>Development</h1>
          <p>Transforming ideas into interactive digital experiences.</p>
        </div>
      </section>

      {/* Section 2 - ScrollReveal Text */}
      <section className="text-section">
        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
          <p>
            Development is not just about writing code — it's about bringing ideas to life,
            shaping the future, and creating digital experiences that leave a mark.
          </p>
          <p>
            When does a man die? When he is hit by a bullet? No! When he suffers a disease?
            No! When he ate a soup made out of a poisonous mushroom? No!
            A man dies when he is forgotten!
          </p>
        </ScrollReveal>
      </section>

      {/* Section 3 - MagicBento */}
      <section className="bento-section">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </section>

      {/* Styling */}
      <style jsx>{`
        .development-page {
          background: #0a0a0a;
          color: #fff;
          font-family: "Poppins", Arial, sans-serif;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          width: 100%;
          height: 600px;
        }

        .hero-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #fff;
          z-index: 2;
          background: rgba(0, 0, 0, 0.5);
          padding: 2rem 3rem;
          border-radius: 1rem;
        }

        .hero-overlay h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero-overlay p {
          font-size: 1.2rem;
          color: #ddd;
        }

        /* Text Section */
        .text-section {
          padding: 4rem 2rem;
          max-width: 900px;
          margin: 0 auto;
          font-size: 1.2rem;
          line-height: 1.8;
          color: #ddd;
          text-align: center;
        }

        .text-section p {
          margin-bottom: 1.5rem;
        }

        /* Bento Section */
        .bento-section {
          padding: 5rem 2rem;
          background: radial-gradient(circle at top, #1a0033, #000);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Development;
