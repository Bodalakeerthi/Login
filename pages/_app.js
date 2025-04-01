import "../styles/globals.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/ProfileSidebar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (  
    <div className="app"> 
      <Navbar setSearchQuery={setSearchQuery} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <main>
        <Component {...pageProps} searchQuery={searchQuery} cart={cart} setCart={setCart} />
      </main>
      <Footer/>
    </div>
  );
}

export default MyApp;
