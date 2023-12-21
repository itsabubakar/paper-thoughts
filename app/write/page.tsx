"use client"
import { useContext, useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import { AppContext } from "../Context"
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/firebase"
import dynamic from "next/dynamic"
import { db } from '@/firebase';
import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
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
        setLoading(true);
        e.preventDefault();
        console.log(tag);

        const postRef = collection(db, tag); // 'posts' is the name of the collection
        const newTag = tag.slice(0, -1); // removing the last 's' in the tag names

        const newDoc = {
            title,
            tag: newTag,
            content: value,
            uid: user?.uid,
            authorName: user?.displayName,
            createdAt: serverTimestamp(),
            ...(tag === 'short-stories' && { genre }),
            ...(tag === 'book-reviews' && { imgUrl }),
        };

        try {
            const docRef = await addDoc(postRef, newDoc);
            const postId = docRef.id;

            // Check if the tag is either poems or short-stories
            if (tag === 'poems' || tag === 'short-stories') {
                // Define the collection name based on the tag
                const authorCollectionName = tag === 'poems' ? 'poets' : 'authors';
                const authorRef = collection(db, authorCollectionName);

                // Create a reference to the author document with the user's uid
                const authorDocRef = doc(authorRef, user?.uid);

                // Check if the author document already exists
                const authorDocSnap = await getDoc(authorDocRef);
                console.log(authorDocSnap);

                // If the author document does not exist, create it
                if (!authorDocSnap.exists()) {
                    await setDoc(authorDocRef, {
                        uid: user?.uid,
                        authorName: user?.displayName,
                        title: user?.displayName.toLowerCase(),
                        // Set 'author' to true if it's a short story, otherwise false
                        author: tag === 'short-stories',
                        // Set 'poet' to true if it's a poem, otherwise false
                        poet: tag === 'poems'
                    });
                }
            }

            // Redirect to the dynamic post page using the postId
            await router.push(`/${tag}/${postId}`);
        } catch (error) {
            console.error("Error adding document: ", error);
            // Handle the error state appropriately here
        } finally {
            setLoading(false);
        }
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
                        onChange={(e) => setTitle(e.target.value.toLowerCase())}
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