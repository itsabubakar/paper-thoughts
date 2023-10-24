import ArticleSection from "./components/Articles/ArticleSection";
import BookReviewSection from "./components/BookReviews/BookReviewSection";
import HeroSection from "./components/Hero/HeroSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 2lg:px-0">
      <HeroSection />
      <ArticleSection />
      <BookReviewSection />
    </main>
  )
}
