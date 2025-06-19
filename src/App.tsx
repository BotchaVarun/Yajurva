import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import ServiceCard from "./components/services";
import ImageParallax from "./components/servicecomponent";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
<section className="flex items-center justify-center text-center px-4 h-[250px]">
     <br/>
        <br/>
           <br/>
  <h2 className="text-4xl font-bold text-gray-800 font-[Pilcrow Rounded]">
    Our Company Services
  </h2>
</section>
                   <br/>
             <br/>
             <br/>
             <br/>
             <br/>
      <main className="flex-grow">
        <div className="space-y-24">
          {/* Section 1: ServiceCard with heading */}
          <section className="text-center px-4">

            <ServiceCard />
          </section>
                       <br/>
             <br/>
             <br/>
             <br/>
             <br/>
          {/* Section 2: ImageParallax with heading */}
          <section className="text-center px-4">
            <ImageParallax />
          </section>
          <section className="text-center px-4">
             <br/>
             <br/>
             <br/>
             <br/>
             <br/>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
