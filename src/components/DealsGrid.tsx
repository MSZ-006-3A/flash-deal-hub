import { Deal } from '@/data/mockDeals';
import { DealCard } from './DealCard';

interface DealsGridProps {
  deals: Deal[];
  title: string;
}

export const DealsGrid = ({ deals, title }: DealsGridProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          <a 
            href="#" 
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </section>
  );
};
