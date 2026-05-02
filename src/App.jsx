import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/global.css';

import TopBar    from './components/layout/TopBar';
import Header    from './components/layout/Header';
import Footer    from './components/layout/Footer';
import ScrollTop from './components/ui/ScrollTop';

import HomePage      from './pages/HomePage';
import AboutPage     from './pages/AboutPage';
import ProductsPage    from './pages/ProductsPage';
import ProductCategoryPage from './pages/ProductCategoryPage';
import ProductMidPage from './pages/ProductMidPage';
import ProductDetailPage from './pages/ProductDetailPage';
import IndustriesPage from './pages/IndustriesPage';
import CompliancePage from './pages/CompliancePage';
import GalleryPage    from './pages/GalleryPage';
import ContactPage    from './pages/ContactPage';
import BlogsPage      from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ overflowX: 'hidden', width: '100%' }}>
      <ScrollToTop />
      <TopBar />
      <Header />
      <Routes>
        <Route path="/"           element={<HomePage />} />
        <Route path="/about"      element={<AboutPage />} />
        <Route path="/products"                                              element={<ProductsPage />} />
        <Route path="/products/:categorySlug"                                element={<ProductCategoryPage />} />
        <Route path="/products/:categorySlug/:slug2"                         element={<ProductMidPage />} />
        <Route path="/products/:categorySlug/:subcatSlug/:productSlug"       element={<ProductDetailPage />} />
        <Route path="/industries"        element={<IndustriesPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/gallery"    element={<GalleryPage />} />
        <Route path="/blogs"     element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />
        <Route path="/contact"    element={<ContactPage />} />
      </Routes>
      <Footer />
      <ScrollTop />
      </div>
    </BrowserRouter>
  );
}
