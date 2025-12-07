import { Deal } from '@/data/mockDeals';
import { CountdownTimer } from './CountdownTimer';

interface UpcomingDealCardProps {
  deal: Deal;
}

export const UpcomingDealCard = ({ deal }: UpcomingDealCardProps) => {
  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <div className="deal-card min-w-[200px] md:min-w-[240px] flex-shrink-0">
      <div className="relative mb-3">
        <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
          <img
            src={deal.image}
            alt={deal.name}
            className="h-full w-full object-cover opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/10 flex items-center justify-center">
            <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
              Coming Soon
            </span>
          </div>
        </div>
        <div className="absolute top-2 left-2">
          <span className="discount-badge">-{deal.discount}%</span>
        </div>
      </div>

      <h3 className="text-sm font-medium line-clamp-2 mb-2 min-h-[2.5rem]">
        {deal.name}
      </h3>

      <div className="flex items-baseline gap-2 mb-3">
        <span className="price-sale">{formatPrice(deal.salePrice)}</span>
        <span className="price-original text-xs">{formatPrice(deal.originalPrice)}</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Starts in</span>
        {deal.startsAt && <CountdownTimer targetDate={deal.startsAt} />}
      </div>
    </div>
  );
};
