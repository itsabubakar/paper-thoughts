'use client'
import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, startAt, endAt, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';



const Page = ({ searchParams }: any) => {
    const { search } = searchParams;
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (search) {
            performSearch(search);
        }
    }, [search]);

    const performSearch = async (searchQuery) => {
        console.log('Performing search for:', searchQuery);

        const collectionsToSearch = ['book-reviews', 'poems', 'short-stories', 'articles'];

        let searchResults = [];
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
    };

    return (
        <div>
            <h1>Search Results for: {search}</h1>
            {/* Render your search results here */}
            <ul>
                {results.map((result, index) => (
                    <li key={index}>
                        {/* {result.id} - {JSON.stringify(result)} */}
                        result
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;