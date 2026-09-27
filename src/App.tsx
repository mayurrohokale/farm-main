import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Process from './components/Process';
import Irrigation from './components/Irrigation';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/privacy-policy';
import TermsOfService from './components/terms';
import { useRevealObserver } from './lib/motion';

const LEGAL: Record<string, () => JSX.Element> = {
  '#privacy-policy': () => <PrivacyPolicy />,
  '#terms': () => <TermsOfService />,
};

function App() {
  const [hash, setHash] = useState(window.location.hash);
  useRevealObserver();

  useEffect(() => {
    const onHash = () => {
      const next = window.location.hash;
      setHash((prev) => {
        if (LEGAL[next] || LEGAL[prev]) window.scrollTo(0, 0);
        return next;
      });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (LEGAL[hash]) return LEGAL[hash]();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Process />
        <Irrigation />
        <Products />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
