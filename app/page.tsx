import ArticleSection from "./components/Articles/ArticleSection";
import BookReviewSection from "./components/BookReviews/BookReviewSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero/HeroSection";
import PoemSection from "./components/Poems/PoemSection";
import ShortStorySection from "./components/ShortStories/ShortStorySection";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 2lg:px-0">
      <HeroSection />
      <ArticleSection />
      <BookReviewSection />
      <ShortStorySection />
      <PoemSection />
      <Footer />
    </main>
  )
}
