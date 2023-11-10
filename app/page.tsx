import ArticleSection from "./components/Articles/ArticleSection";
import BookReviewSection from "./components/BookReviews/BookReviewSection";
import HeroSection from "./components/Hero/HeroSection";
import PoemSection from "./components/Poems/PoemSection";
import ShortStorySection from "./components/ShortStories/ShortStorySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ArticleSection />
      <BookReviewSection />
      <ShortStorySection />
      <PoemSection />
    </main>
  )
}
