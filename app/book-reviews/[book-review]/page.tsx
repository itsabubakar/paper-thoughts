'use client'
import parse from "html-react-parser";

import RelatedArticle from "@/app/_components/Articles/RelatedArticle";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import Share from "@/app/_components/utils/Share";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";
import Loading from "@/app/_components/utils/Loading";

type BookReview = {
    title: string;
    tag: string;
    imgUrl: string;
    content: string;
    uid: string;
    authorName: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
};
const Page = () => {
    const params = useParams()

    const articleId = params['book-review']
    console.log(articleId)
    const [bookReview, setBookReview] = useState<BookReview | null>(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            if (articleId) {
                try {
                    const bookReview = await getDoc(doc(db, 'book-reviews', articleId as string));
                    if (bookReview.exists()) {
                        setBookReview(bookReview.data() as BookReview);
                    } else {
                        // Handle case where the book review doesn't exist
                        setNotFound(true)
                        console.error('Book review not found');
                    }
                } catch (error) {
                    setNotFound(true)
                    console.error('Error fetching book review:', error);
                }
            }
        };

        fetchArticle();
    }, [articleId]);

    if (!bookReview) {
        if (notFound) {
            return (
                <div className='h-[80vh] flex justify-center items-center'>
                    <h1 className='text-xl text-gray-800 capitalize'>Book review not found</h1>
                </div>
            )
        }
        // You might want to render a loading state or handle other scenarios
        return <Loading />;
    }

    const createdAtTimestamp = bookReview.createdAt.seconds;
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Convert timestamp to Date object
    const createdAtDate = new Date(createdAtTimestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

    // Get numerical components
    const year = createdAtDate.getFullYear();
    const monthIndex = createdAtDate.getMonth();
    const month = monthNames[monthIndex];
    const day = createdAtDate.getDate();


    // Display the numerical components

    return (
        <div className="max-w-5xl mx-auto">
            <section className="pt-10 pb-8 text-center sm:text-left border-b border-border-color">
                {/* bread crumbs */}
                <div className="pb-3 hidden sm:block">
                    <Link className="hover:text-orange-500 font-headers italic font-sm flex items-center" href={'/'}><MdOutlineArrowBackIosNew size={14} /> Back to Previous</Link>
                </div>


                {/* header */}
                <h1 className="text-4xl font-bold pb-2 font-headers capitalize">{bookReview.title}</h1>
                <p>{month} {day}, {year}</p>

                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* author */}
                    <p className="uppercase font-body tracking-wider">By <Link className="underline transition-all duration-200 hover:text-orange-500 hover:no-underline" href={`/account/${bookReview.uid}`}>{bookReview.authorName}</Link></p>

                    {/* share */}
                    <div className=" pt-3 sm:pt-0">
                        <Share />

                    </div>

                </div>
            </section>

            {/* content */}
            <section className="flex flex-row-reverse font-body pt-8 pb-4 text-xl text-gray-800 border-b border-border-color gap-x-16">
                <div className="w-1/4 items-end ">
                    <Image
                        src={bookReview.imgUrl}
                        alt="Season of Crimson Blossoms Cover"
                        width={200}
                        height={400}
                        className="w-full"
                        unoptimized
                    />
                </div>
                <div className="w-2/3 font-body pt-8 pb-4 text-xl text-gray-800  prose  mb-10">

                    {parse(bookReview.content)}

                </div>


            </section>


            {/* related articles */}

            <section>
                <h3 className="uppercase text-xl font-bold font-headers border-b border-border-color py-2 px-2">Related Articles</h3>
                <div className="flex gap-2 justify-between py-8 flex-col sm:flex-row">
                    <RelatedArticle />
                    <RelatedArticle />
                    <RelatedArticle />
                </div>

            </section>


        </div>
    )
}
export default Page