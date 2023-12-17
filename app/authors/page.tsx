'use client'
import React, { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import SectionWrapper from '../_components/Section/SectionWrapper';
import Pagination from '../_components/utils/Pagination';
import Loading from '../_components/utils/Loading';
import Author from '../_components/Authors/Author';

type Props = {};

type Author = {
    uid: string;
    name: string;
};

const ITEMS_PER_PAGE = 10;

const Page = (props: Props) => {
    const [authors, setAuthors] = useState<Author[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalAuthors, setTotalAuthors] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTotalAuthors = async () => {
            const shortStoriesSnapshot = await getDocs(collection(db, 'short-stories'));
            setTotalAuthors(shortStoriesSnapshot.docs.length);
        };

        const fetchShortStoriesCollection = async () => {
            const offset = (currentPage - 1) * ITEMS_PER_PAGE;
            const shortStoriesQuery = query(
                collection(db, 'short-stories'),
                limit(ITEMS_PER_PAGE),
                // Add the necessary query to skip documents based on the current page
            );
            const shortStoriesSnapshot = await getDocs(shortStoriesQuery);
            const stories = shortStoriesSnapshot.docs.map((doc) => doc.data());
            const uniqueAuthors = getUniqueAuthors(stories);
            setAuthors(uniqueAuthors);
            setLoading(false);
        };

        fetchTotalAuthors();
        fetchShortStoriesCollection();
    }, [currentPage]);

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(totalAuthors / ITEMS_PER_PAGE);

    return (
        <SectionWrapper>
            <h2 className="uppercase font-bold font-headers bg-black text-white py-2 px-2">Authors</h2>
            {loading ? (
                <div className="h-[50vh] flex justify-center items-center">
                    <Loading />
                </div>
            ) : (
                <>

                    <div className="pt-10 border-b-2 border-border-color">
                        {authors.map((author) => (
                            <Author key={author.uid} name={author.name} uid={author.uid} />
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageClick={handlePageClick}
                    />
                </>
            )}
        </SectionWrapper>
    );
};

const getUniqueAuthors = (stories: any[]): Author[] => {
    const unique = new Map<string, Author>();
    stories.forEach((story) => {
        const authorData = {
            uid: story.uid, // Adjust this field based on your document structure
            name: story.authorName, // Adjust this field based on your document structure
        };
        console.log(authorData);

        unique.set(authorData.uid, authorData); // This will overwrite duplicates
    });
    return Array.from(unique.values());
};

export default Page;