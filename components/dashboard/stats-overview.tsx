'use client';

import { StatsCard } from './stats-card';
import { BarChart3, MessageCircle, ShieldAlert } from 'lucide-react';

interface StatsOverviewProps {
  totalReviews: number;
  averageSentiment: string;
  fakeReviews: number;
}

export function StatsOverview({ totalReviews, averageSentiment, fakeReviews }: StatsOverviewProps) {
  const fakeReviewPercentage = totalReviews > 0 
    ? ((fakeReviews / totalReviews) * 100).toFixed(1)
    : '0.0';

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <StatsCard
        title="Total Reviews"
        value={totalReviews}
        icon={<MessageCircle className="h-4 w-4" />}
      />
      <StatsCard
        title="Average Sentiment"
        value={averageSentiment}
        icon={<BarChart3 className="h-4 w-4" />}
      />
      <StatsCard
        title="Fake Reviews Detected"
        value={fakeReviews}
        description={`${fakeReviewPercentage}% of total reviews`}
        icon={<ShieldAlert className="h-4 w-4" />}
      />
    </div>
  );
}