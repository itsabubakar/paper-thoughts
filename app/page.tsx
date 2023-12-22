import ArticleSection from "./_components/Articles/ArticleSection";
import BookReviewSection from "./_components/BookReviews/BookReviewSection";
import HeroSection from "./_components/Hero/HeroSection";
import PoemSection from "./_components/Poems/PoemSection";
import ShortStorySection from "./_components/ShortStories/ShortStorySection";

import { collectionGroup, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase';
import { getData } from "./_components/utils/utils";

// Fetch data here

const fetchData: any = async (data: string) => {
  try {
    console.log('trying to fetch data');

    // Fetch latest 4 articles
    const articlesQuery = query(collectionGroup(db, data), orderBy('createdAt', 'desc'), limit(4));
    const articlesSnapshot = await getDocs(articlesQuery);

    return articlesSnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));

  } catch (error) {
    console.error('Error fetching data:', error);
  }

}

const articles = await getData('articles');
// const bookReviews = await fetchData('book-reviews');
// const shortStories = await fetchData('short-stories');
// const poems = await fetchData('poems');

export const revalidate = 60

export default function Home() {


  return (
    <main>
      <HeroSection />
      <ArticleSection articles={articles} />
      {/* <BookReviewSection bookReviews={bookReviews} /> */}
      {/* <ShortStorySection shortStories={shortStories} /> */}
      {/* <PoemSection poems={poems} /> */}
    </main>
  )
}
