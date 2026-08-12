import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuoteStrip from './components/QuoteStrip';
import About from './components/About';
import Facilities from './components/Facilities';
import Programs from './components/Programs';
import Trainer from './components/Trainer';
import Membership from './components/Membership';
import Gallery from './components/Gallery';
import EnquiryForm from './components/EnquiryForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CONTACT } from './assets/config/contact';

export default function App() {
  const { i18n } = useTranslation();
  const [splashDone, setSplashDone] = useState(false);
  const lang = i18n.resolvedLanguage === 'kn' ? 'kn' : 'en';

  return (
    <div className={`app ${splashDone ? 'is-ready' : ''}`} lang={lang}>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
      <Navbar />
      <main>
        <Hero />
        <QuoteStrip />
        <About />
        <Facilities />
        <Programs />
        <Trainer />
        <Membership />
        <Gallery />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <a className="floating-wa" href={`https://wa.me/${CONTACT.whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
    </div>
  );
}
