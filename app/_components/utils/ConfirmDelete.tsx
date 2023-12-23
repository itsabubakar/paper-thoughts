import { db } from "@/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {}
const ConfirmDelete = ({ closeModal, articleId }: any) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);



    const handleDelete = async () => {
        const documentRef = doc(db, 'articles', articleId); // Replace 'collectionName' with your actual collection name
        try {
            await deleteDoc(documentRef);
            closeModal()

            router.push('/')
            // Handle successful deletion, e.g., show a message or update state
        } catch (error) {
            console.error("Error deleting document: ", error);
            // Optionally handle the error, e.g., show an error message
        }
    };
    return (
        <div className="flex gap-5">
            <button>Cancel</button>
            <button className='text-red-500 font-semibold hover:underline' onClick={handleDelete}>
                Delete
            </button>
        </div>
    )
}
export default ConfirmDelete