import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: Date;
  label?: string;
  variant?: 'default' | 'compact' | 'hero';
  className?: string;
}

export const CountdownTimer = ({ targetDate, label, variant = 'default', className }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - Date.now();
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (variant === 'compact') {
    return (
      <span className="text-xs font-medium text-muted-foreground">
        {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
      </span>
    );
  }

  if (variant === 'hero') {
    return (
      <div className="flex items-center gap-2">
        {label && <span className="text-sm text-muted-foreground mr-1">{label}</span>}
        <div className="flex items-center gap-1">
          <div className="countdown-box px-3">
            <span>{formatNumber(timeLeft.hours)}</span>
          </div>
          <span className="text-foreground font-bold">:</span>
          <div className="countdown-box px-3">
            <span>{formatNumber(timeLeft.minutes)}</span>
          </div>
          <span className="text-foreground font-bold">:</span>
          <div className="countdown-box px-3 animate-pulse-soft">
            <span>{formatNumber(timeLeft.seconds)}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="countdown-box text-xs">
        {formatNumber(timeLeft.hours)}
      </div>
      <span className="text-muted-foreground text-xs">:</span>
      <div className="countdown-box text-xs">
        {formatNumber(timeLeft.minutes)}
      </div>
      <span className="text-muted-foreground text-xs">:</span>
      <div className="countdown-box text-xs animate-pulse-soft">
        {formatNumber(timeLeft.seconds)}
      </div>
    </div>
  );
};
