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
        [{ header: [2, 3, 4, 5, 6, false] }],
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
    const [tag, setTag] = useState('articles');
    const [imgUrl, setImgUrl] = useState('');
    const [genre, setGenre] = useState('');

    const { user, loading, setLoading } = useContext(AppContext)
    const router = useRouter();

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
        console.log(tag);

        const postRef = collection(db, tag); // 'posts' is the name of the collection
        const newTag = tag.slice(0, -1); // removing the last s in the tag names

        if (tag === "book-reviews") {
            const newDoc = {
                title,
                tag: newTag,
                imgUrl,
                content: value,
                uid: user?.uid,
                authorName: user?.displayName,
                createdAt: serverTimestamp(),
            }
            const docRef = await addDoc(postRef, newDoc)
            // Get the ID of the newly created document
            const postId = docRef.id;

            // Redirect to the dynamic post page using the postId
            router.push(`/${tag}/${postId}`);

        } else if (tag === 'short-stories') {
            {
                const newDoc = {
                    title,
                    tag: newTag,
                    genre,
                    content: value,
                    uid: user?.uid,
                    authorName: user?.displayName,
                    createdAt: serverTimestamp(),
                }
                const docRef = await addDoc(postRef, newDoc);
                // Get the ID of the newly created document
                const postId = docRef.id;

                // Redirect to the dynamic post page using the postId
                router.push(`/${tag}/${postId}`);

            }
        } else {
            {
                const newDoc = {
                    title,
                    tag: newTag,
                    content: value,
                    uid: user?.uid,
                    authorName: user?.displayName,
                    createdAt: serverTimestamp(),
                }
                const docRef = await addDoc(postRef, newDoc);
                // Get the ID of the newly created document
                const postId = docRef.id;

                // Redirect to the dynamic post page using the postId
                router.push(`/${tag}/${postId}`);

            }
        }


        setLoading(false)
    };



    return (
        loading ? (
            <Loading />
        ) : <div className='py-6'>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="title" className="block  text-sm font-medium text-gray-900 py-3 font-headers">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        className="capitalize text-sm border-b border-gray-300 font-headers py-3 px-2 w-full placeholder:text-sm border"
                    />
                </div>
                <div className="">

                    <label htmlFor="countries" className="block  text-sm font-medium text-gray-900 py-3 font-headers">Choose a tag</label>
                    <select onChange={(e) => setTag(e.target.value)} id="tags" className="border bg-gray-50  text-gray-900 text-sm focus:ring-black-500 focus:border-black-500 block w-full py-2 font-headers px-2 capitalize">

                        <option value="articles">Article</option>
                        <option value="short-stories">short story</option>
                        <option value="poems">poem</option>
                        <option value="book-reviews">book review</option>
                    </select>
                </div>
                {
                    tag === 'book-reviews' && <div className="">
                        <label htmlFor="imgUrl" className="block  text-sm font-medium text-gray-900 py-3 font-headers">Image Url</label>
                        <input
                            type="text"
                            id="imgUrl"
                            value={imgUrl}
                            onChange={(e) => setImgUrl(e.target.value)}
                            placeholder="imgUrl"
                            className="border bg-gray-50  text-gray-900 text-sm focus:ring-black-500 focus:border-black-500 block w-full py-2 font-headers px-2 capitalize"
                        />
                    </div>
                }
                {
                    tag === 'short-stories' && <div className="">
                        <label htmlFor="genre" className="block  text-sm font-medium text-gray-900 py-3 font-headers">Genre</label>
                        <input
                            type="text"
                            id="genre"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            placeholder="genre"
                            className="border bg-gray-50  text-gray-900 text-sm focus:ring-black-500 focus:border-black-500 block w-full py-2 font-headers px-2 capitalize"
                        />
                    </div>
                }
                <ReactQuill className='my-quill-container mt-4' onChange={setValue} modules={modules} theme="snow" placeholder="Content goes here..." />
                <button className='hover:bg-white hover:text-black border-black border transition duration-200  mt-2 bg-black text-white py-2 px-4 flex'>Publish</button>
            </form>


        </div>
    )
}

export default Page;