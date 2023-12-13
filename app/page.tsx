'use client';
import ArticleSection from "./_components/Articles/ArticleSection";
import BookReviewSection from "./_components/BookReviews/BookReviewSection";
import HeroSection from "./_components/Hero/HeroSection";
import PoemSection from "./_components/Poems/PoemSection";
import ShortStorySection from "./_components/ShortStories/ShortStorySection";

import { SetStateAction, useEffect, useState } from 'react';
import { collectionGroup, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/firebase';

interface DocumentData {
  // Define the properties and their types for each document in the collection group
  // Example:
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [bookReviews, setBookReviews] = useState([]);
  const [shortStories, setShortStories] = useState([]);
  const [poems, setPoems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('trying to fetch data');

        // Fetch latest 4 articles
        const articlesQuery = query(collectionGroup(db, 'articles'), orderBy('createdAt', 'desc'), limit(4));
        const articlesSnapshot = await getDocs(articlesQuery);

        const articlesData = articlesSnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        console.log(articlesData);

        setArticles(articlesData);


        // Fetch latest 4 book reviews
        const bookReviewsQuery = query(collectionGroup(db, 'book-reviews'), orderBy('createdAt', 'desc'), limit(4));
        const bookReviewsSnapshot = await getDocs(bookReviewsQuery);
        setBookReviews(bookReviewsSnapshot.docs.map(doc => doc.data() as DocumentData) as SetStateAction<never[]>);



        // Fetch latest 4 short stories
        const shortStoriesQuery = query(collectionGroup(db, 'short-stories'), orderBy('createdAt', 'desc'), limit(4));
        const shortStoriesSnapshot = await getDocs(shortStoriesQuery);
        setShortStories(shortStoriesSnapshot.docs.map(doc => doc.data() as DocumentData) as SetStateAction<never[]>);

        // Fetch latest 4 poems
        const poemsQuery = query(collectionGroup(db, 'poems'), orderBy('createdAt', 'desc'), limit(4));
        const poemsSnapshot = await getDocs(poemsQuery);
        setPoems(poemsSnapshot.docs.map(doc => doc.data() as DocumentData) as SetStateAction<never[]>);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <HeroSection />
      <ArticleSection articles={articles} />
      <BookReviewSection bookReviews={bookReviews} />
      <ShortStorySection shortStories={shortStories} />
      <PoemSection poems={poems} />
    </main>
  )
}
