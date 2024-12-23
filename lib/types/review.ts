export interface Review {
  id: string;
  text: string;
  sentiment: "positive" | "negative" | "neutral";
  confidence: number;
  isFake: boolean;
  date: string;
  fileId?: string; // To track which file the review belongs to
}

export interface ReviewAnalysis {
  sentiment: Review["sentiment"];
  confidence: number;
  isFake: boolean;
}

export interface FileAnalysis {
  id: string;
  name: string;
  reviews: Review[];
  stats: {
    totalReviews: number;
    averageSentiment: string;
    fakeReviews: number;
    sentimentDistribution: Array<{
      name: string;
      value: number;
      count: number;
    }>;
  };
}
