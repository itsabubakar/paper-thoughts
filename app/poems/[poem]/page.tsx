"use client"
import Share from "@/app/_components/utils/Share";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { doc, getDoc, DocumentSnapshot } from 'firebase/firestore';
import { db } from '@/firebase';
import Loading from "@/app/_components/utils/Loading";
import parse from "html-react-parser";


type Poem = {
    title: string;
    tag: string;
    content: string;
    uid: string;
    authorName: string;
};
const Page = () => {

    const params = useParams()

    // Construct the full URL using the router's pathname and the current host
    const fullUrl = typeof window !== 'undefined' ? window.location.href : '';

    console.log(fullUrl);



    const articleId = params.poem
    const [poem, setPoem] = useState<Poem | null>(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchArticle = async () => {
            if (articleId) {
                try {
                    const poemsDoc = await getDoc(doc(db, 'poems', articleId as string));
                    if (poemsDoc.exists()) {
                        setPoem(poemsDoc.data() as Poem);
                    } else {
                        // Handle case where the poem doesn't exist
                        setNotFound(true)
                        console.error('Poem not found');
                    }
                } catch (error) {
                    setNotFound(true)
                    console.error('Error fetching poem:', error);
                }
            }
        };

        fetchArticle();
    }, [articleId]);

    if (!poem) {
        if (notFound) {
            return (
                <div className='h-[80vh] flex justify-center items-center'>
                    <h1 className='text-xl text-gray-800 capitalize'>Poem not found</h1>
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



                {/* header */}
                <h1 className="text-4xl font-bold pb-2 font-headers capitalize">{poem.title}</h1>

                {/* author */}
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* author */}
                    <p className="uppercase font-body tracking-wider">By <Link className="underline transition-all duration-200 hover:text-orange-500 hover:no-underline" href={`/account/${poem.uid}`}>{poem.authorName}</Link></p>
                    {/* share */}
                    <div className=" pt-3 sm:pt-0">
                        <Share />

                    </div>

                </div>

            </section>

            {/* Poem */}

            <section className="font-body pt-8 pb-4 text-xl text-gray-800  prose  mb-10">
                {parse(poem.content)}
            </section>




        </div>
    )
}
export default Page