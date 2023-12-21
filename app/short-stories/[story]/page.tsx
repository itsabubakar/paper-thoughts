'use client'

import RelatedArticle from "@/app/_components/Articles/RelatedArticle";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import Share from "@/app/_components/utils/Share";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { doc, getDoc, DocumentSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';
import Loading from "@/app/_components/utils/Loading";
import parse from "html-react-parser";


type Story = {
    title: string;
    genre: string;
    content: string;
    uid: string;
    authorName: string;
}

const Page = () => {
    const params = useParams()

    const storyId = params.story
    const [story, setPoem] = useState<Story | null>(null);
    const [notFound, setNotFound] = useState(false);

    const fullUrl = typeof window !== 'undefined' ? window.location.href : '';

    useEffect(() => {
        const fetchContent = async () => {
            if (storyId) {
                try {
                    const storyDoc = await getDoc(doc(db, 'short-stories', storyId as string));
                    if (storyDoc.exists()) {
                        setPoem(storyDoc.data() as Story);
                    } else {
                        // Handle case where the story doesn't exist
                        setNotFound(true)
                        console.error('Story not found');
                    }
                } catch (error) {
                    setNotFound(true)
                    console.error('Error fetching poem:', error);
                }
            }
        };

        fetchContent();
    }, [storyId]);

    if (!story) {
        if (notFound) {
            return (
                <div className='h-[80vh] flex justify-center items-center'>
                    <h1 className='text-xl text-gray-800 capitalize'>Story not found</h1>
                </div>
            )
        }
        // You might want to render a loading state or handle other scenarios
        return <Loading />;
    }

    return (
        <div className="max-w-3xl mx-auto">
            <section className="pt-10 pb-8 text-center sm:text-left border-b border-border-color">
                {/* bread crumbs */}
                <div className="pb-3 hidden sm:block">
                    <Link className="hover:text-orange-500 font-headers italic font-sm flex items-center" href={'/'}><MdOutlineArrowBackIosNew size={14} /> Back to Previous</Link>
                </div>

                {/* tag */}
                <h2 className="text-orange-500 font-semibold tracking-widest capitalize font-headers text-xl">{story.genre}</h2>

                {/* header */}
                <h1 className="text-4xl font-bold pb-2 font-headers capitalize">{story.title}</h1>

                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* author */}
                    <p className="uppercase font-body tracking-wider">By <Link className="underline transition-all duration-200 hover:text-orange-500 hover:no-underline" href={`/account/${story.uid}`}>{story.authorName}</Link></p>
                    {/* share */}
                    <div className=" pt-3 sm:pt-0">
                        <Share url={fullUrl} />

                    </div>

                </div>
            </section>

            {/* content */}


            <section className="border-b border-border-color font-body pt-8 pb-4 text-xl text-gray-800  prose prose-h1:font-headers prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-h5:text-lg prose-h6:text-base  prose-headings:font-headers prose-headings:text-xl prose-headings:capitalize prose-headings:font-semibold prose-headings:py-5 prose-strong:font-semibold">
                {parse(story.content)}
            </section>

            {/* related articles */}

            {/* <section>
                <h3 className="uppercase text-xl font-bold font-headers border-b border-border-color py-2 px-2">Related Works</h3>
                <div className="flex gap-2 justify-between py-8 flex-col sm:flex-row">
                    <RelatedArticle />
                    <RelatedArticle />
                    <RelatedArticle />
                </div>

            </section> */}


        </div>
    )
}
export default Page