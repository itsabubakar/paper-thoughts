"use client"
import { useContext, useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import { AppContext } from "../../Context"
import { useParams, useRouter } from 'next/navigation'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/firebase"
import dynamic from "next/dynamic"
import { db } from '@/firebase';
import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import Loading from '../../_components/utils/Loading';


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

const Page = ({ searchParams }: { searchParams: any }) => {
    const { collection } = searchParams;
    const params = useParams()

    console.log(collection);

    const postId: any = params.post



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

    useEffect(() => {

        // Fetch post data if postId is present
        const fetchPostData = async () => {
            if (postId) {

                setLoading(true);
                try {
                    const postDocRef = doc(db, `${collection}`, postId); // Replace 'collectionName' with the actual name

                    const postDocSnap = await getDoc(postDocRef);
                    console.log(postDocSnap);

                    if (postDocSnap.exists()) {
                        const postData = postDocSnap.data();
                        console.log(postData);

                        // Set form fields with the fetched data
                        setTitle(postData.title);
                        setTag(postData.tag);
                        setValue(postData.content);

                    } else {
                        console.log('No such document!');
                    }
                } catch (error) {
                    console.error('Error fetching document: ', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchPostData();
    }, [postId, setLoading]);



    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (postId && collection == tag) {
                // Update the existing document
                const postDocRef = doc(db, `${collection}`, postId); // Replace 'collectionName' with the actual name
                await updateDoc(postDocRef, {
                    title,
                    content: value,
                    editedOn: serverTimestamp(),
                    ...(tag === 'short-stories' && { genre }),
                    ...(tag === 'book-reviews' && { imgUrl }),
                });

                // Redirect after update
                if (tag === 'short-stories') {
                    await router.push(`/short-stories/${postId}`);
                } else if (tag === 'book-reviews') {
                    await router.push(`/book-reviews/${postId}`);
                } else if (tag === 'poems') {
                    await router.push(`/poems/${postId}`);
                } else if (tag === 'articles') {
                    await router.push(`/articles/${postId}`);
                }

            } else {
                // ... (existing code to handle new post creation)
            }
        } catch (error) {
            console.error("Error updating document: ", error);
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
                {/* <div className="">

                    <label htmlFor="tag" className="block  text-sm font-medium text-gray-900 py-3 font-headers">Choose a tag</label>
                    <select onChange={(e) => setTag(e.target.value)} id="tags" className="border bg-gray-50  text-gray-900 text-sm focus:ring-black-500 focus:border-black-500 block w-full py-2 font-headers px-2 capitalize">

                        <option value="articles">Article</option>
                        <option value="short-stories">short story</option>
                        <option value="poems">poem</option>
                        <option value="book-reviews">book review</option>
                    </select>
                </div> */}
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
                <ReactQuill value={value} className='my-quill-container mt-4' onChange={setValue} modules={modules} theme="snow" placeholder="Content goes here..." />
                <button className='hover:bg-white hover:text-black border-black border transition duration-200  mt-2 bg-black text-white py-2 px-4 flex'>Publish</button>
            </form>


        </div>
    )
}

export default Page;