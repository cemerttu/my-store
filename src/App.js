import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnhancedNavbar from "./components/EnhancedNavbar";
import Footer from "./components/Footer";
import NotificationSystem from "./components/NotificationSystem";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { AppProvider } from "./context/AppContext";
import "./index.css";

function App() {
  return (
    <AppProvider>
      <Router>
        <EnhancedNavbar />
        <NotificationSystem />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;