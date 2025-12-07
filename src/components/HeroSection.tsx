import { useState } from 'react';
import { Button } from './ui/button';
import { CountdownTimer } from './CountdownTimer';
import { Zap } from 'lucide-react';

type Platform = 'all' | 'shopee' | 'tiktok';

interface HeroSectionProps {
  onPlatformChange: (platform: Platform) => void;
  activePlatform: Platform;
}

export const HeroSection = ({ onPlatformChange, activePlatform }: HeroSectionProps) => {
  const flashSaleEnd = new Date(Date.now() + 4 * 60 * 60 * 1000); // 4 hours from now

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium animate-pulse-soft">
            <Zap className="h-4 w-4" />
            <span>Live Flash Sale</span>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Flash Deals Happening Now
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              Updated every 5 minutes • Limited stock available
            </p>
          </div>

          {/* Countdown */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Sale ends in</span>
            <CountdownTimer targetDate={flashSaleEnd} variant="hero" />
          </div>

          {/* Platform Switcher */}
          <div className="flex items-center gap-2 p-1 bg-secondary rounded-lg">
            <Button
              variant={activePlatform === 'all' ? 'platform-active' : 'platform'}
              size="sm"
              onClick={() => onPlatformChange('all')}
            >
              All Deals
            </Button>
            <Button
              variant={activePlatform === 'shopee' ? 'platform-active' : 'platform'}
              size="sm"
              onClick={() => onPlatformChange('shopee')}
            >
              🛒 Shopee
            </Button>
            <Button
              variant={activePlatform === 'tiktok' ? 'platform-active' : 'platform'}
              size="sm"
              onClick={() => onPlatformChange('tiktok')}
            >
              🎵 TikTok
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
};
