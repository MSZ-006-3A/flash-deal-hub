import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { DealsGrid } from '@/components/DealsGrid';
import { UpcomingDealsCarousel } from '@/components/UpcomingDealsCarousel';
import { CategoriesSection } from '@/components/CategoriesSection';
import { Footer } from '@/components/Footer';
import { mockDeals, upcomingDeals } from '@/data/mockDeals';

type Platform = 'all' | 'shopee' | 'tiktok';

const Index = () => {
  const [activePlatform, setActivePlatform] = useState<Platform>('all');

  const filteredDeals = useMemo(() => {
    if (activePlatform === 'all') return mockDeals;
    return mockDeals.filter((deal) => deal.platform === activePlatform);
  }, [activePlatform]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection 
          activePlatform={activePlatform} 
          onPlatformChange={setActivePlatform} 
        />
        <DealsGrid deals={filteredDeals} title="🔥 Deals Happening Now" />
        <UpcomingDealsCarousel deals={upcomingDeals} />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
