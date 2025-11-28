import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Team from './pages/Team';
import Coach from './pages/Coach';
import Events from './pages/Events';
import About from './pages/About';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route 
                    path="/" 
                    element={
                        <PageWrapper>
                            <Home />
                        </PageWrapper>
                    } 
                />
                <Route 
                    path="/shop" 
                    element={
                        <PageWrapper>
                            <Shop />
                        </PageWrapper>
                    } 
                />
                <Route 
                    path="/team" 
                    element={
                        <PageWrapper>
                            <Team />
                        </PageWrapper>
                    } 
                />
                 <Route 
                    path="/events" 
                    element={
                        <PageWrapper>
                            <Events />
                        </PageWrapper>
                    } 
                />
                 <Route 
                    path="/about" 
                    element={
                        <PageWrapper>
                            <About />
                        </PageWrapper>
                    } 
                />
                <Route 
                    path="/coach" 
                    element={
                        <PageWrapper>
                            <Coach />
                        </PageWrapper>
                    } 
                />
            </Routes>
        </AnimatePresence>
    );
};

const PageWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
    >
        {children}
    </motion.div>
);

const App: React.FC = () => {
  return (
    <Router>
        <div className="bg-skate-black min-h-screen selection:bg-skate-accent selection:text-black flex flex-col">
          <ScrollToTop />
          <Navbar />

          <main className="flex-grow">
            <AnimatedRoutes />
          </main>

          <Footer />

          {/* Noise Overlay for the whole page */}
          <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04] mix-blend-overlay bg-noise"></div>
        </div>
    </Router>
  );
};

export default App;