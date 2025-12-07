import { Deal } from '@/data/mockDeals';
import { UpcomingDealCard } from './UpcomingDealCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Button } from './ui/button';

interface UpcomingDealsCarouselProps {
  deals: Deal[];
}

export const UpcomingDealsCarousel = ({ deals }: UpcomingDealsCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 260;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-8 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Upcoming Deals</h2>
            <p className="text-sm text-muted-foreground mt-1">Don't miss these upcoming flash sales</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('left')}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {deals.map((deal) => (
            <div key={deal.id} className="snap-start">
              <UpcomingDealCard deal={deal} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
