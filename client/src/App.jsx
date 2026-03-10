import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Pages
const Home = lazy(() => import('./pages/Home'));
const OurStory = lazy(() => import('./pages/OurStory'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const ShippingDelivery = lazy(() => import('./pages/ShippingDelivery'));
const ReturnsRefunds = lazy(() => import('./pages/ReturnsRefunds'));

const Support = lazy(() => import('./pages/Support'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
  <div className="page-loader">
    <div className="page-loader__spinner"></div>
  </div>
);

function AppContent() {
  const location = useLocation();
  const isHidden = false; // no admin/vendor routes anymore

  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/shipping" element={<ShippingDelivery />} />
          <Route path="/returns" element={<ReturnsRefunds />} />

          <Route path="/support" element={<Support />} />
          {/* Coming soon routes */}
          <Route path="/products" element={<ComingSoon />} />
          <Route path="/product/:id" element={<ComingSoon />} />
          <Route path="/design-house" element={<ComingSoon />} />
          <Route path="/new-arrivals" element={<ComingSoon />} />
          <Route path="/search" element={<ComingSoon />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
