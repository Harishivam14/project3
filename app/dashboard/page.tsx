"use client";

import { StatsOverview } from "@/components/dashboard/stats-overview";
import { AnalysisSection } from "@/components/dashboard/analysis-section";
import { ReviewSection } from "@/components/dashboard/review-section";
import { Footer } from "@/components/layout/footer";
import { DashboardHead } from "@/components/layout/dashboard-head";
import { useReviewAnalysis } from "@/lib/hooks/use-review-analysis";
import { FileSelector } from "@/components/dashboard/file-selector";

export default function DashboardPage() {
  const {
    currentAnalysis,
    isAnalyzing,
    analyzeReview,
    analyzeCsv,
    reviews,
    stats,
    fileAnalyses,
    currentFileId,
    setCurrentFileId,
  } = useReviewAnalysis();

  const handleCsvUpload = async (file: File) => {
    try {
      await analyzeCsv(file);
    } catch (error) {
      console.error("CSV processing error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardHead />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <FileSelector
            files={fileAnalyses}
            currentFileId={currentFileId}
            onFileSelect={setCurrentFileId}
          />
        </div>
        <StatsOverview
          totalReviews={stats.totalReviews}
          averageSentiment={stats.averageSentiment}
          fakeReviews={stats.fakeReviews}
        />
        <AnalysisSection
          currentAnalysis={currentAnalysis}
          onReviewSubmit={analyzeReview}
          onCsvUpload={handleCsvUpload}
          chartData={stats.sentimentDistribution}
          isAnalyzing={isAnalyzing}
        />
        <ReviewSection reviews={reviews} />
      </main>
      <Footer />
    </div>
  );
}
