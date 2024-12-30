import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import HomePage from './components/HomePage';
    import ApologyLetter from './components/ApologyLetter';
    import QuotesPage from './components/QuotesPage';
    import SorrySculpture from './components/SorrySculpture';
    import MemoriesPage from './components/MemoriesPage';
    import PhotoGallery from './components/PhotoGallery';
    import GiftPage from './components/GiftPage';
    import Footer from './components/Footer';

    function App() {
      return (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apology-letter" element={<ApologyLetter />} />
            <Route path="/quotes" element={<QuotesPage />} />
            <Route path="/sorry-sculpture" element={<SorrySculpture />} />
            <Route path="/memories" element={<MemoriesPage />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/gift" element={<GiftPage />} />
          </Routes>
          <Footer />
        </>
      );
    }

    export default App;
