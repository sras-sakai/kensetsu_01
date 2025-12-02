import { HeroSection } from '../components/HeroSection';
import { MainContent } from '../components/MainContent';
import { Sidebar } from '../components/Sidebar';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MainContent />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
