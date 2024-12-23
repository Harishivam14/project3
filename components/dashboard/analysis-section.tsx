'use client';

import { ReviewForm } from './review-form';
import { AnalysisDetails } from './analysis-details';
import { SentimentChart } from './sentiment-chart';
import type { ReviewAnalysis } from '@/lib/types/review';

interface AnalysisSectionProps {
  currentAnalysis: ReviewAnalysis | null;
  onReviewSubmit: (values: { review: string }) => Promise<void>;
  onCsvUpload: (file: File) => Promise<void>;
  chartData: Array<{ name: string; value: number }>;
}

export function AnalysisSection({
  currentAnalysis,
  onReviewSubmit,
  onCsvUpload,
  chartData,
}: AnalysisSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      <div className="lg:col-span-1 space-y-6">
        <ReviewForm
          onSubmit={onReviewSubmit}
          onCsvUpload={onCsvUpload}
        />
        {currentAnalysis && <AnalysisDetails analysis={currentAnalysis} />}
      </div>
      <div className="lg:col-span-2">
        <SentimentChart data={chartData} />
      </div>
    </div>
  );
}