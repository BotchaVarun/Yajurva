import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Development from "./pages/Development";

import Hyperspeed from "./components/homepage/Hyperspeed";
import SplitText from "./components/homepage/SplitText.jsx";
import CircularText from "./components/homepage/CircularText";
import Services from "./components/services";

// Import other pages if you have them
import About from "./pages/About";
// import Contact from "./pages/Contact";

function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <main>
      {/* Hyperspeed Section */}
      <section className="bg-black" style={{ minHeight: "100vh" }}>
        <div className="h-screen relative overflow-hidden">
          {/* Hyperspeed Background */}
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          />

          {/* SplitText Overlay */}
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            style={{
              zIndex: 100,
              pointerEvents: "none",
            }}
          >
            {/* Centered Content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                zIndex: "1",
                position: "relative",
                padding: "0 1rem",
              }}
            >
              {/* First Block */}
              <div
                className="text-center"
                style={{
                  fontSize: "clamp(1.2rem, 4vw, 2.5rem)",
                  fontWeight: "bold",
                  color: "white",
                  textShadow:
                    "0 0 20px rgba(184, 24, 24, 0.8), 0 0 40px rgba(120, 30, 30, 0.6)",
                  lineHeight: "1.2",
                  transform: "translateY(-50px)",
                  width: "100%",
                  maxWidth: "900px",
                  margin: "0 auto",
                  zIndex: 1,
                }}
              >
                <SplitText
                  text={`Elevating \n Your Digital \n presence \n with the wisdom of \n the past`}
                  className="block"
                  delay={210}
                  duration={0.6}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </div>

              {/* Second Block */}
              <div
                className="text-center"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                  fontWeight: "bold",
                  color: "white",
                  textShadow:
                    "0 0 20px rgba(184, 24, 24, 0.8), 0 0 40px rgba(120, 30, 30, 0.6)",
                  lineHeight: "1.4",
                  width: "100%",
                  maxWidth: "920px",
                  margin: "0 auto",
                  flexWrap: "wrap",
                }}
              >
                <SplitText
                  text={`Blending heritage and technology,\nYajurva delivers stunning UI/UX design,\nwebsites, and digital growth solutions -\nrooted in quality and trust.`}
                  className="block"
                  delay={210}
                  duration={0.6}
                  ease="power3.out"
                  splitType="lines"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </div>

              {/* Third Block */}
              <div className="text-center" style={{ position: "relative", zIndex: 1000 }}>
                <CircularText
                  text="YOUR*VISION*OUR*CODE*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="custom-class"
                />

                <p
                  style={{
                    fontSize: "clamp(0.9rem, 4vw, 1.2rem)",
                    fontWeight: "bold",
                    color: "white",
                    textShadow:
                      "0 0 20px rgba(184, 24, 24, 0.8), 0 0 40px rgba(120, 30, 30, 0.6)",
                    lineHeight: "1.2",
                    marginTop: "-110px",
                    fontFamily: "'Clash Display', sans-serif",
                  }}
                >
                  Hire us
                </p>
              </div>
            </div>
          </div>

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none"
            style={{ zIndex: 5 }}
          />
        </div>
      </section>

      {/* Services Section */}
      <Services />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Home />} />
        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/Development" element={<Development />} />
       { /* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
