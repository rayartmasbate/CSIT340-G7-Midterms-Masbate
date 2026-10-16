import Navbar from "./components/Navbar";
import Repositories from "./components/Repositories";
import Footer from "./components/Footer";
import Profile from "./components/Profile";


function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />
      <Profile />
      <Repositories />
      <Footer />
    </div>
  );
}

export default App;
