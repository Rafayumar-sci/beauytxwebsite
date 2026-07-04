import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceCategory from "./pages/ServiceCategory";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceGroup from "./pages/ServiceGroup";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import BookAppointment from "./pages/BookAppointment";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStructuredData from "./components/GlobalStructuredData";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:categoryId/g/:groupSlug" element={<ServiceGroup />} />
        <Route path="/services/:categoryId/:serviceSlug" element={<ServiceDetail />} />
        <Route path="/services/:categoryId" element={<ServiceCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        {/* Global JSON-LD schemas injected on every page */}
        <GlobalStructuredData />
        <Navbar />
        <main id="main-content" role="main" style={{ flex: 1 }}>
          <AnimatedRoutes />
        </main>
        <WhatsAppButton />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}
