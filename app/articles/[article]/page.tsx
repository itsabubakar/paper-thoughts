'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { doc, getDoc, DocumentSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';

import RelatedArticle from "@/app/_components/Articles/RelatedArticle";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import Share from "@/app/_components/utils/Share";
import ReactHtmlParser from 'react-html-parser';
import Loading from '@/app/_components/utils/Loading';

interface Post {
    title: string;
    tag: string;
    content: string;
    uid: string;
    authorName: string;
}

const Page = () => {

    const params = useParams()
    console.log(params.article);

    const postId = params.article
    const [post, setPost] = useState<Post | null>(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            if (postId) {
                try {
                    const postDoc = await getDoc(doc(db, 'posts', postId as string));
                    if (postDoc.exists()) {
                        setPost(postDoc.data() as Post);
                    } else {
                        // Handle case where the post doesn't exist
                        setNotFound(true)
                        console.error('Post not found');
                    }
                } catch (error) {
                    setNotFound(true)
                    console.error('Error fetching post:', error);
                }
            }
        };

        fetchPost();
    }, [postId]);

    if (!post) {
        if (notFound) {
            return (
                <div className='h-[80vh] flex justify-center items-center'>
                    <h1 className='text-xl text-gray-800 capitalize'>Post not found</h1>
                </div>
            )
        }
        // You might want to render a loading state or handle other scenarios
        return <Loading />;
    }

    return (
        notFound ? (
            <div>
                <h1>Post not found</h1>
            </div>
        ) : (
            <div className="max-w-3xl mx-auto">
                <section className="pt-10 pb-8 text-center sm:text-left border-b border-border-color">
                    {/* bread crumbs */}
                    <div className="pb-3 hidden sm:block">
                        <Link className="hover:text-orange-500 font-headers italic font-sm flex items-center" href={'/'}><MdOutlineArrowBackIosNew size={14} /> Back Home</Link>
                    </div>

                    {/* tag */}
                    <h2 className="text-orange-500 font-semibold tracking-widest capitalize font-headers text-xl">{post.tag}</h2>

                    {/* header */}
                    <h1 className="text-4xl font-bold pb-2 font-headers capitalize">{post.title}</h1>

                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        {/* author */}
                        <p className="uppercase font-body tracking-wider">By <Link className="underline transition-all duration-200 hover:text-orange-500 hover:no-underline" href={`/account/${post.uid}`}>{post.authorName}</Link></p>
                        {/* share */}
                        <div className=" pt-3 sm:pt-0">
                            <Share />

                        </div>

                    </div>
                </section>

                {/* content */}

                <section className="font-body pt-8 pb-4 text-xl text-gray-800 border-b border-border-color prose prose-p:pb-4 mb-10">
                    {ReactHtmlParser(post.content)}
                </section>



            </div>
        )
    )
}
export default Page