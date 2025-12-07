import { Deal } from '@/data/mockDeals';
import { CountdownTimer } from './CountdownTimer';
import { Button } from './ui/button';

interface DealCardProps {
  deal: Deal;
}

export const DealCard = ({ deal }: DealCardProps) => {
  const formatPrice = (price: number) => `$${price.toFixed(2)}`;
  const formatSold = (sold: number) => {
    if (sold >= 1000) {
      return `${(sold / 1000).toFixed(1)}k sold`;
    }
    return `${sold} sold`;
  };

  return (
    <div className="deal-card group cursor-pointer">
      <div className="relative mb-3">
        <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
          <img
            src={deal.image}
            alt={deal.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="absolute top-2 left-2">
          <span className="discount-badge">-{deal.discount}%</span>
        </div>
        <div className="absolute top-2 right-2">
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${
            deal.platform === 'shopee' 
              ? 'bg-primary/10 text-primary' 
              : 'bg-foreground/10 text-foreground'
          }`}>
            {deal.platform === 'shopee' ? 'Shopee' : 'TikTok'}
          </span>
        </div>
      </div>

      <h3 className="text-sm font-medium line-clamp-2 mb-2 min-h-[2.5rem]">
        {deal.name}
      </h3>

      <div className="flex items-baseline gap-2 mb-2">
        <span className="price-sale text-lg">{formatPrice(deal.salePrice)}</span>
        <span className="price-original">{formatPrice(deal.originalPrice)}</span>
      </div>

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-muted-foreground">{formatSold(deal.unitsSold)}</span>
        {!deal.isUpcoming && <CountdownTimer targetDate={deal.endsAt} />}
      </div>

      <Button variant="deal" size="sm" className="w-full">
        View Deal
      </Button>
    </div>
  );
};
