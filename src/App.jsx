import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      {/* Navigation bar component */}
      <Navbar />

      {/* Hero section component */}
      <Hero />

      {/* Highlights section component */}
      <Highlights />

      {/* Model section component */}
      <Model />

      {/* Features section component */}
      <Features />

      {/* How it works section component */}
      <HowItWorks />

      {/* Footer component */}
      <Footer />
    </main>
  );
};

// Wrap the App component with Sentry profiler
export default Sentry.withProfiler(App);