'use client'
import React, { useEffect, useState } from 'react';
import { db } from '@/firebase';
import { collection, getDocs, query, limit } from 'firebase/firestore';
import SectionWrapper from '../_components/Section/SectionWrapper';
import PoetsName from '../_components/Poetry/PoetName';
import Pagination from '../_components/utils/Pagination';
import Loading from '../_components/utils/Loading';

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
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        // Fetch total number of authors for pagination
        const fetchTotalAuthors = async () => {
            // Fetch all documents to count them. This is not efficient for large collections.
            const poemsSnapshot = await getDocs(collection(db, 'poems'));
            setTotalAuthors(poemsSnapshot.docs.length);
        };

        const fetchPoemsCollection = async () => {
            setLoading(true);
            // Here you would adjust the query to fetch only a subset of authors based on your pagination
            const poemsQuery = query(collection(db, 'poems'), limit(ITEMS_PER_PAGE)); // Use query with limit
            const poemsSnapshot = await getDocs(poemsQuery);
            const poems = poemsSnapshot.docs.map((doc) => doc.data());
            const uniqueAuthors = getUniqueAuthors(poems);
            setAuthors(uniqueAuthors);
        };

        fetchTotalAuthors();
        fetchPoemsCollection();
        setLoading(false);
    }, [currentPage]); // Re-fetch when currentPage changes

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(totalAuthors / ITEMS_PER_PAGE);


    return (
        <SectionWrapper>
            <h2 className="uppercase font-bold font-headers bg-black text-white py-2 px-2">poets</h2>

            {
                loading ? <div className="h-[50vh] flex justify-center items-center">
                    <Loading />
                </div> : (
                    <>


                        <div className="pt-10 border-b-2 border-border-color">
                            {authors.map((author) => (
                                <PoetsName key={author.uid} name={author.name} uid={author.uid} />
                            ))}
                        </div>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageClick={handlePageClick}
                        />
                    </>
                )
            }

        </SectionWrapper>
    );
};

// Function to extract unique authors from the poems array
const getUniqueAuthors = (poems: any[]): Author[] => {
    const unique = new Map<string, Author>();
    poems.forEach((poem) => {
        const authorData = { uid: poem.uid, name: poem.authorName }; // adjust these fields based on your actual data structure
        if (!unique.has(authorData.uid)) {
            unique.set(authorData.uid, authorData);
        }
    });
    return Array.from(unique.values());
};

export default Page;