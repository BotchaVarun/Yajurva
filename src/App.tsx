import { Button } from "@/components/ui/button"; // Only needed if you're using Button
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        

      </main>
      
      <Footer />
    </div>
  );
}


export default App;
