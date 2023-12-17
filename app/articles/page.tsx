'use client'
import { useEffect, useState } from "react";
import Article from "../_components/Articles/Article";
import Pagination from "../_components/utils/Pagination";
import { db } from "@/firebase";
import {
    collectionGroup,
    query,
    orderBy,
    limit,
    getDocs,
    startAfter,
    DocumentData,
    QueryDocumentSnapshot
} from 'firebase/firestore';
import SectionWrapper from "../_components/Section/SectionWrapper";
import Loading from "../_components/utils/Loading";

interface ArticleData {
    id: string;
    data: DocumentData;
    docRef?: QueryDocumentSnapshot<DocumentData>;
}



const PAGE_SIZE = 3; // Number of articles per page

const Page = () => {
    const [articles, setArticles] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [totalArticles, setTotalArticles] = useState(0);
    const [lastDocs, setLastDocs] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);

    const collection = 'articles'

    // Fetches articles for a specific page
    const fetchArticles = async (page: number) => {
        setLoading(true);
        try {
            let articlesQuery;

            if (page === 1) {
                articlesQuery = query(
                    collectionGroup(db, collection),
                    orderBy('createdAt', 'desc'),
                    limit(PAGE_SIZE)
                );
            } else {
                const lastDocIndex = page - 2;

                // Check if you are trying to navigate back from a page that doesn't exist (e.g., last page + 1)
                if (lastDocs[lastDocIndex]) {
                    const lastDoc = lastDocs[lastDocIndex];
                    articlesQuery = query(
                        collectionGroup(db, collection),
                        orderBy('createdAt', 'desc'),
                        startAfter(lastDoc),
                        limit(PAGE_SIZE)
                    );
                } else {
                    // If you don't have a valid lastDoc, fetch the first page as a fallback
                    articlesQuery = query(
                        collectionGroup(db, collection),
                        orderBy('createdAt', 'desc'),
                        limit(PAGE_SIZE)
                    );
                }
            }

            const articlesSnapshot = await getDocs(articlesQuery);
            const newArticles = articlesSnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
                docRef: doc // store the doc reference to be used for pagination
            }));

            // Update lastDocs state with the last document reference of the current page
            const newLastDocs: any = [...lastDocs];
            if (newArticles.length > 0) {
                newLastDocs[page - 1] = newArticles[newArticles.length - 1].docRef;
                setLastDocs(newLastDocs);
            } else {
                // Handle case when there are no new articles (e.g., when on the last page)
                newLastDocs[page - 1] = null;
            }

            setArticles(newArticles);
            setCurrentPage(page);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
        setLoading(false);
    };

    // Calculate the total number of pages
    useEffect(() => {
        const getTotalPages = async () => {
            const totalQuery = query(collectionGroup(db, 'articles'));
            const querySnapshot = await getDocs(totalQuery);
            const total = querySnapshot.docs.length;

            setTotalPages(Math.ceil(total / PAGE_SIZE));
            setTotalArticles(total);
        };

        getTotalPages();
    }, []);

    // Load the initial articles when the component mounts
    useEffect(() => {
        fetchArticles(1); // Fetch the first page
    }, []);

    const handlePageClick = (page: number) => {
        fetchArticles(page);
    };

    const startIndex = (currentPage - 1) * PAGE_SIZE + 1;
    const endIndex = Math.min(startIndex + PAGE_SIZE - 1, totalArticles);

    return (
        <main className="">
            <SectionWrapper>
                <h2 className="uppercase font-bold font-headers bg-black text-white py-2 px-2">RECENT ARTICLES</h2>
                {/* Show loading component when loading is true */}
                {loading ? <div className="h-[50vh] flex justify-center items-center">
                    <Loading />
                </div> : (
                    <div className="pt-4">
                        <p className="text-sm my-2 font-headers font-semibold">
                            Showing {startIndex} to {endIndex} of {totalArticles} articles
                        </p>
                        {articles.map(article => (
                            <Article key={article.id} article={article} />
                        ))}
                    </div>
                )}
                {/* Add functionality to the Pagination component */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageClick={handlePageClick}
                />
            </SectionWrapper>

        </main>
    );
};

export default Page;
