import React, { useState, useRef } from 'react';
import type { Plan } from '../../models/Plan';
import { PlanCard } from './PlanCard';

interface MobileCarouselProps {
  plans: Plan[];
  displayPrices: number[];
  onSelect: (plan: Plan) => void;
}

const SWIPE_THRESHOLD_PX = 50;

export const MobileCarousel = ({ plans, displayPrices, onSelect }: MobileCarouselProps) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > SWIPE_THRESHOLD_PX && index < plans.length - 1) { setIndex((i) => i + 1); }
    if (delta < -SWIPE_THRESHOLD_PX && index > 0) { setIndex((i) => i - 1); }
  };

  return (
    <div className="flex flex-col gap-4 md:hidden">
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex justify-center"
      >
        <PlanCard
          plan={plans[index]}
          displayPrice={displayPrices[index]}
          onSelect={onSelect}
        />
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Anterior"
          disabled={index === 0}
          onClick={() => setIndex((i) => i - 1)}
          className="w-8 h-8 rounded-full border-2 border-[#4F46E5] flex items-center justify-center disabled:border-[#CCD1EE] disabled:opacity-40 transition-opacity"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={index === 0 ? '#CCD1EE' : '#4F46E5'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <span className="text-[13px] font-semibold text-[#03050F] font-br-sonoma">
          {index + 1} / {plans.length}
        </span>
        <button
          type="button"
          aria-label="Siguiente"
          disabled={index === plans.length - 1}
          onClick={() => setIndex((i) => i + 1)}
          className="w-8 h-8 rounded-full border-2 border-[#4F46E5] flex items-center justify-center disabled:border-[#CCD1EE] disabled:opacity-40 transition-opacity"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={index === plans.length - 1 ? '#CCD1EE' : '#4F46E5'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
