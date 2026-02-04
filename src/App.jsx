import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import LoadingSpinner from './components/common/LoadingSpinner'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))
const Faq = lazy(() => import('./pages/Faq'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const BuildingCleaningService = lazy(() => import('./pages/BuildingCleaningService'))
const PaintingService = lazy(() => import('./pages/PaintingService'))
const PlasteringService = lazy(() => import('./pages/PlasteringService'))
const HVACService = lazy(() => import('./pages/HVACService'))
const MEPService = lazy(() => import('./pages/MEPService'))
const WallpaperFixingService = lazy(() => import('./pages/WallpaperFixingService'))
const CarpentryService = lazy(() => import('./pages/CarpentryService'))
const EngravingService = lazy(() => import('./pages/EngravingService'))
const TilingService = lazy(() => import('./pages/TilingService'))
const PlumbingService = lazy(() => import('./pages/PlumbingService'))
const FalseCeilingService = lazy(() => import('./pages/FalseCeilingService'))


function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/building-cleaning" element={<BuildingCleaningService />} />
          <Route path="services/painting-works" element={<PaintingService />} />
          <Route path="services/plastering-works" element={<PlasteringService />} />
          <Route path="services/hvac-maintenance" element={<HVACService />} />
          <Route path="services/electromechanical-works" element={<MEPService />} />
          <Route path="services/wallpaper-fixing" element={<WallpaperFixingService />} />
          <Route path="services/carpentry-flooring" element={<CarpentryService />} />
          <Route path="services/engraving-ornamentation" element={<EngravingService />} />
          <Route path="services/tiling-works" element={<TilingService />} />
          <Route path="services/plumbing-sanitary" element={<PlumbingService />} />
          <Route path="services/false-ceiling-partition" element={<FalseCeilingService />} />

          <Route path="faq" element={<Faq />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App