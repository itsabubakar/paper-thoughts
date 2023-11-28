import ArticleSection from "./_components/Articles/ArticleSection";
import BookReviewSection from "./_components/BookReviews/BookReviewSection";
import HeroSection from "./_components/Hero/HeroSection";
import PoemSection from "./_components/Poems/PoemSection";
import ShortStorySection from "./_components/ShortStories/ShortStorySection";

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
