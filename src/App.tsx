
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import ServiceCard from "./components/services"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        
        <ServiceCard/>
      </main>
      
      <Footer />
    </div>
  );
}


export default App;
