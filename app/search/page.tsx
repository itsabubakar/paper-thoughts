'use client'
import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, startAt, endAt, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import SearchLink from '../_components/Search/SearchLink';



const Page = ({ searchParams }: any) => {
    const { search } = searchParams;
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (search) {
            performSearch(search);
        }
    }, [search]);

    const performSearch = async (searchQuery: string) => {
        console.log('Performing search for:', searchQuery);
        setIsLoading(true);

        const collectionsToSearch = ['book-reviews', 'poems', 'short-stories', 'articles'];

        let searchResults: any = [];
        const searchLower = searchQuery.toLowerCase();

        for (const collectionName of collectionsToSearch) {
            console.log(`Searching "${searchQuery}" in titles within collection: ${collectionName}`);
            const q = query(
                collection(db, collectionName),
                orderBy('title'),
                startAt(searchLower),
                endAt(searchLower + '\uf8ff')
            );
            try {
                const querySnapshot = await getDocs(q);
                console.log(`Found ${querySnapshot.size} results in ${collectionName}`);
                querySnapshot.forEach((doc) => {
                    const docData = doc.data();
                    console.log(`Checking document with title: ${docData.title}`);
                    if (docData.title && docData.title.toLowerCase().startsWith(searchLower)) {
                        searchResults.push({ id: doc.id, ...docData });
                    }
                });
            } catch (error) {
                console.error(`Error searching in collection ${collectionName}:`, error);
            }
        }

        console.log('Search results:', searchResults);
        setResults(searchResults);
        setIsLoading(false);
    };

    return (
        <div className=''>
            <h2 className='pt-4 text-sm font-headers font-semibold'>Search Results for: {search}</h2>
            {/* Render your search results here */}
            {isLoading ? ( // Check if the search is in progress
                <div className='h-32 flex justify-center items-center'>
                    <p className='font-headers font-medium'>Searching...</p>
                </div>
            ) : (
                <ul>
                    {results.length > 0 ? results.map((result, index) => (
                        <SearchLink key={index} search={result} />
                    )) : (
                        <div className='h-32 flex justify-center items-center'>
                            <p className='font-headers font-medium'>No results found for {search}</p>
                        </div>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Page;