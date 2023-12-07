"use client"
import { useContext, useEffect, useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import { AppContext } from "../Context"
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/firebase"
import dynamic from "next/dynamic"

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
    const [value, setValue] = useState("");
    const [title, setTitle] = useState('');

    const { user } = useContext(AppContext)
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
        e.preventDefault();
        const doc = {
            title,
            content: value
        }
        console.log(doc);

        // await fetch('/api/post', {
        //     method: 'POST',
        //     body: JSON.stringify(doc),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // router.push('/')
    }



    return (
        <div className='py-6'>
            <form onSubmit={handleSubmit}>
                <div className="-4">

                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        className="text-xl border-x border-t border-gray-300 font-headers py-2 px-4 w-full placeholder:text-xl outline-0"
                    />
                </div>
                <ReactQuill className='my-quill-container ' onChange={setValue} modules={modules} theme="snow" placeholder="Content goes here..." />
                <button className='hover:bg-white hover:text-black border-black border transition duration-200  mt-2 bg-black text-white py-2 px-4 flex'>Publish</button>
            </form>


        </div>
    )
}

export default Page;