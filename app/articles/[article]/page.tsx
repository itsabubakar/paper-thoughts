'use client'

import Modal from "react-modal";
import { useParams, useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react';
import { doc, getDoc, DocumentSnapshot, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase';

import RelatedArticle from "@/app/_components/Articles/RelatedArticle";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import Share from "@/app/_components/utils/Share";
import parse from "html-react-parser";
import Loading from '@/app/_components/utils/Loading';
import { AppContext } from '@/app/Context';
import DateFormat from '@/app/_components/utils/DateFormat';
import ConfirmDelete from "@/app/_components/utils/ConfirmDelete";

interface Article {
    title: string;
    tag: string;
    content: string;
    uid: string;
    authorName: string;
    createdAt: {
        seconds: number;
    };
    editedOn?: {
        seconds: number;
    };
}

const Page = () => {

    const params = useParams()
    const router = useRouter()
    const { user, profile, setProfile } = useContext(AppContext)
    const [isModalOpen, setIsModalOpen] = useState(false);



    const articleId: any = params.article

    const [post, setPost] = useState<Article | null>(null);
    const [notFound, setNotFound] = useState(false);

    const fullUrl = typeof window !== 'undefined' ? window.location.href : '';

    const openModal = () => {
        setIsModalOpen(true);
        console.log('test function');

    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    useEffect(() => {
        const fetchArticle = async () => {
            if (articleId) {
                try {
                    const articleDoc = await getDoc(doc(db, 'articles', articleId as string));
                    if (articleDoc.exists()) {
                        setPost(articleDoc.data() as Article);
                    } else {
                        // Handle case where the post doesn't exist
                        setNotFound(true)
                        console.error('Article not found');
                    }
                } catch (error) {
                    setNotFound(true)
                    console.error('Error fetching article:', error);
                }
            }
        };

        fetchArticle();
    }, [articleId]);





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
                    <h2 className="text-orange-500 font-semibold tracking-widest capitalize font-headers text-xl">{post.tag.slice(0, -1)}</h2>

                    {/* header */}
                    <h1 className="text-4xl font-bold pb-2 font-headers capitalize">{post.title}</h1>

                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        {/* author */}
                        <p className="uppercase font-body tracking-wider">By <Link className="underline transition-all duration-200 hover:text-orange-500 hover:no-underline" href={`/account/${post.uid}`}>{post.authorName}</Link></p>
                        {/* share */}
                        <div className=" pt-3 sm:pt-0">
                            <Share url={fullUrl} />

                        </div>

                    </div>

                    <div className='font-headers py-2 text-gray-700'>
                        <p><DateFormat timestamp={post?.createdAt.seconds} /></p>
                        {post.editedOn && <p>Edited on <DateFormat timestamp={post?.editedOn?.seconds} /></p>}

                    </div>
                    {
                        user?.uid === post.uid && <div className='flex gap-4 py-2 font-headers'>
                            <Link className='font-semibold hover:underline ' href={`/write/${articleId}?collection=${post.tag}`}>Edit</Link>
                            <button className='text-red-500 font-semibold hover:underline' onClick={openModal}>
                                Delete
                            </button>
                        </div>
                    }

                </section>

                {/* content */}

                <section className="break-words font-body pt-8 pb-4 text-xl text-gray-800 border-b border-border-color prose prose-p:pb-4 mb-10 ">
                    {parse(post.content)}
                </section>

                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Edit Profile Modal"
                    className="modal-content "
                    overlayClassName="modal-overlay"
                    ariaHideApp={false}
                >
                    <h2 className="font-headers font-semibold py-1">Are you sure?</h2>
                    {/* Use the new EditProfileForm component */}

                    <ConfirmDelete articleId={articleId} closeModal={closeModal} />
                </Modal>



            </div>
        )
    )
}
export default Page