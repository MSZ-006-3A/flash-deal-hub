import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, ShoppingBag, Clock, TrendingUp } from 'lucide-react';
import { mockDeals, Deal } from '@/data/mockDeals';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/CountdownTimer';
import { DealCard } from '@/components/DealCard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const DealDetail = () => {
  const { id } = useParams<{ id: string }>();
  const deal = mockDeals.find((d) => d.id === id);

  if (!deal) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container-custom py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Deal Not Found</h1>
          <p className="text-muted-foreground mb-6">The deal you're looking for doesn't exist or has expired.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedDeals = mockDeals
    .filter((d) => d.category === deal.category && d.id !== deal.id)
    .slice(0, 4);

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;
  const formatSold = (sold: number) => {
    if (sold >= 1000) {
      return `${(sold / 1000).toFixed(1)}k`;
    }
    return sold.toString();
  };

  const savings = deal.originalPrice - deal.salePrice;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="hover:text-primary transition-colors cursor-pointer">{deal.category}</span>
          <span>/</span>
          <span className="text-foreground line-clamp-1">{deal.name}</span>
        </div>

        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Deals
        </Link>

        {/* Product Detail Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left - Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
              <img
                src={deal.image}
                alt={deal.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="discount-badge text-base px-4 py-2">-{deal.discount}% OFF</span>
              </div>
              <div className="absolute top-4 right-4">
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                  deal.platform === 'shopee' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-foreground text-background'
                }`}>
                  {deal.platform === 'shopee' ? 'Shopee' : 'TikTok'}
                </span>
              </div>
            </div>
            
            {/* Image Thumbnails Placeholder */}
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                    i === 1 ? 'border-primary' : 'border-transparent hover:border-primary/50'
                  }`}
                >
                  <img
                    src={deal.image}
                    alt={`${deal.name} thumbnail ${i}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-6">
            {/* Category Badge */}
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
              {deal.category}
            </span>

            {/* Product Name */}
            <h1 className="text-2xl lg:text-3xl font-bold leading-tight">
              {deal.name}
            </h1>

            {/* Stats Row */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>{formatSold(deal.unitsSold)} sold</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Limited time offer</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="p-6 rounded-xl bg-secondary/50 space-y-4">
              <div className="flex items-end gap-4">
                <span className="text-4xl font-bold text-primary">{formatPrice(deal.salePrice)}</span>
                <span className="text-xl text-muted-foreground line-through">{formatPrice(deal.originalPrice)}</span>
                <span className="discount-badge">-{deal.discount}%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                You save <span className="font-semibold text-primary">{formatPrice(savings)}</span>
              </p>
            </div>

            {/* Countdown */}
            <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">Flash Sale Ends In</span>
                </div>
                <CountdownTimer targetDate={deal.endsAt} className="text-base" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                variant="deal" 
                size="lg" 
                className="w-full text-lg h-14"
                onClick={() => window.open('#', '_blank')}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Buy Now on {deal.platform === 'shopee' ? 'Shopee' : 'TikTok'}
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg" className="h-12">
                  <Heart className="w-5 h-5 mr-2" />
                  Add to Watchlist
                </Button>
                <Button variant="outline" size="lg" className="h-12">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Deal
                </Button>
              </div>
            </div>

            {/* Product Details */}
            <div className="pt-6 border-t border-border space-y-4">
              <h3 className="font-semibold">Deal Details</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Free shipping on orders over $25
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Limited stock available - act fast!
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Authentic product from verified seller
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  30-day return policy
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Deals Section */}
        {relatedDeals.length > 0 && (
          <section className="pt-8 border-t border-border">
            <h2 className="text-2xl font-bold mb-6">Related Deals in {deal.category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedDeals.map((relatedDeal) => (
                <DealCard key={relatedDeal.id} deal={relatedDeal} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default DealDetail;
