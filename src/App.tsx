import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ContentProvider } from './contexts/ContentContext';
import { WordPressProvider } from './contexts/WordPressContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { OfficePage } from './pages/OfficePage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { PermitTypesPage } from './pages/PermitTypesPage';
import { RequirementsPage } from './pages/RequirementsPage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminNewsPage } from './pages/admin/AdminNewsPage';
import { AdminFAQPage } from './pages/admin/AdminFAQPage';
import { AdminPricingPage } from './pages/admin/AdminPricingPage';
import { AdminOfficePage } from './pages/admin/AdminOfficePage';
import { AdminWordPressPage } from './pages/admin/AdminWordPressPage';

export default function App() {
  return (
    <AuthProvider>
      <WordPressProvider>
        <ContentProvider>
          <Router>
            <div className="min-h-screen bg-gray-50">
              <Routes>
                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/news" element={<AdminNewsPage />} />
                <Route path="/admin/faq" element={<AdminFAQPage />} />
                <Route path="/admin/pricing" element={<AdminPricingPage />} />
                <Route path="/admin/office" element={<AdminOfficePage />} />
                <Route path="/admin/wordpress" element={<AdminWordPressPage />} />
                
                {/* Public Routes */}
                <Route path="/*" element={
                  <>
                    <Header />
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/office" element={<OfficePage />} />
                      <Route path="/faq" element={<FAQPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/permit-types" element={<PermitTypesPage />} />
                      <Route path="/requirements" element={<RequirementsPage />} />
                    </Routes>
                    <Footer />
                  </>
                } />
              </Routes>
            </div>
          </Router>
        </ContentProvider>
      </WordPressProvider>
    </AuthProvider>
  );
}