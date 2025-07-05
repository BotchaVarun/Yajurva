import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

import Hyperspeed from './components/homepage/Hyperspeed';
import SplitText from './components/homepage/SplitText'
import CircularText from './components/homepage/CircularText';
function App() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div>
      <Navbar />
      
      {/* Main content area with Hyperspeed component */}
      <main>
        {/* Hyperspeed Section with black background */}
        <section className="bg-black" style={{ minHeight: '100vh' }}>
          {/* Hyperspeed Container with proper layering */}
          <div className="h-screen relative overflow-hidden">
            
            {/* Hyperspeed Background - Lower z-index */}
            <Hyperspeed
              effectOptions={{
                onSpeedUp: () => { },
                onSlowDown: () => { },
                distortion: 'turbulentDistortion',
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
                  shoulderLines: 0xFFFFFF,
                  brokenLines: 0xFFFFFF,
                  leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                  rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                  sticks: 0x03B3C3,
                }
              }}
            />
            
            {/* SplitText Overlay - Higher z-index, centered */}
            <div 
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{ 
                zIndex: 999,
                pointerEvents: 'none'
              }}
            >
              <div 
                className="text-center"
              style={{
                fontSize: 'clamp(2rem, 6vw, 5rem)', // responsive between 2rem and 5rem based on viewport width
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0 0 20px rgba(184, 24, 24, 0.8), 0 0 40px rgba(120, 30, 30, 0.6)',
                lineHeight: '1.2',
                transform: 'translateY(50px)',
                padding: '0 1rem', // optional: adds side padding on small screens
                textAlign: 'center', // just in case
                
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
 <div 
  className="text-center"
  style={{
    fontSize: 'clamp(1rem, 6vw, 1.5rem)', // Adjusted max for better scaling
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 20px rgba(184, 24, 24, 0.8), 0 0 40px rgba(120, 30, 30, 0.6)',
    lineHeight: '1.2',
    transform: 'translateY(50px)',
    padding: '0 1rem',
    textAlign: 'center',
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
 <div 
  className="text-center"
  style={{
    fontSize: 'clamp(1rem, 6vw, 1.5rem)', // Adjusted max for better scaling
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 20px rgba(184, 24, 24, 0.8), 0 0 40px rgba(120, 30, 30, 0.6)',
    lineHeight: '1.2',
    transform: 'translateY(200px)',
    padding: '0 1rem',
    textAlign: 'center',
  }}
>
  <CircularText
  text="YOUR*VISION*OUR*CODE*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>
<p 
className="text-center"
  style={{
    fontSize: 'clamp(1rem, 6vw, 1.5rem)', // Adjusted max for better scaling
    fontWeight: 'bold',
    color: 'white',
    textShadow: '0 0 20px rgba(184, 24, 24, 0.8), 0 0 40px rgba(120, 30, 30, 0.6)',
    lineHeight: '1.2',
    transform: 'translateY(-110px)',
    padding: '0 1rem',
    textAlign: 'center',
    fontFamily: "'Clash Display', sans-serif",
  }}>
    Hire us
  </p>


</div>

            </div>
            
            {/* Optional: Add a subtle overlay for better text readability */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" 
              style={{ zIndex: 5 }} 
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
