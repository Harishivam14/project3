import type { Review } from "@/lib/types/review";

export function calculateAverageSentiment(reviews: Review[]): string {
  if (reviews.length === 0) return "N/A";

  const sentimentScores = {
    positive: 1,
    neutral: 0,
    negative: -1,
  };

  const totalScore = reviews.reduce(
    (sum, review) => sum + sentimentScores[review.sentiment],
    0
  );

  const averageScore = totalScore / reviews.length;

  if (averageScore > 0.3) return "Positive";
  if (averageScore < -0.3) return "Negative";
  return "Neutral";
}

export function calculateSentimentDistribution(
  reviews: Review[]
): Array<{ name: string; value: number; count: number }> {
  if (reviews.length === 0) {
    return [];
  }

  const distribution = {
    positive: { name: "Positive", count: 0, value: 0 },
    neutral: { name: "Neutral", count: 0, value: 0 },
    negative: { name: "Negative", count: 0, value: 0 },
  };

  // Count occurrences of each sentiment
  reviews.forEach((review) => {
    distribution[review.sentiment].count++;
  });

  // Calculate percentages
  const total = reviews.length;
  Object.values(distribution).forEach((item) => {
    item.value = Math.round((item.count / total) * 100);
  });

  // Only return sentiments with counts greater than 0
  return Object.values(distribution).filter(item => item.count > 0);
}

export function calculateFileStats(reviews: Review[]) {
  return {
    totalReviews: reviews.length,
    averageSentiment: calculateAverageSentiment(reviews),
    fakeReviews: reviews.filter((r) => r.isFake).length,
    sentimentDistribution: calculateSentimentDistribution(reviews),
  };
}