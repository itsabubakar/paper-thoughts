"use client"
import { useContext, useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import { AppContext } from "../Context"
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/firebase"
import dynamic from "next/dynamic"
import { db } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import Loading from '../_components/utils/Loading';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })
const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ script: "sub" }, { script: "super" }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
        ["link"],
        ["clean"],
    ]
}

const Page = () => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');

    const { user, loading, setLoading } = useContext(AppContext)
    const router = useRouter();

    // console.log(user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
            if (!currentUser) {
                router.push('/')
            }

        })
        return () => unsubscribe()
    }, [user])

    const handleSubmit = async (e: any) => {
        setLoading(true)
        e.preventDefault();
        const postRef = collection(db, 'posts'); // 'posts' is the name of the collection
        const newDoc = {
            title,
            tag,
            content: value,
            uid: user?.uid,
            authorName: user?.displayName,
            createdAt: serverTimestamp(),
        };

        const docRef = await addDoc(postRef, newDoc);

        // Get the ID of the newly created document
        const postId = docRef.id;

        // Redirect to the dynamic post page using the postId
        router.push(`/articles/${postId}`);
        setLoading(false)
    };



    return (
        loading ? (
            <Loading />
        ) : <div className='py-6'>
            <form onSubmit={handleSubmit}>
                <div className="-4">

                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        className="capitalize text-xl border-x border-t border-gray-300 font-headers py-2 px-4 w-full placeholder:text-xl outline-0"
                    />
                </div>
                <div className="-4">

                    <input
                        type="text"
                        id="tag"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        placeholder="Tag"
                        className="capitalize text-xl border-x border-t border-gray-300 font-headers py-2 px-4 w-full placeholder:text-lg outline-0"
                    />
                </div>
                <ReactQuill className='my-quill-container ' onChange={setValue} modules={modules} theme="snow" placeholder="Content goes here..." />
                <button className='hover:bg-white hover:text-black border-black border transition duration-200  mt-2 bg-black text-white py-2 px-4 flex'>Publish</button>
            </form>


        </div>
    )
}

export default Page;