'use client';
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AiOutlineInstagram, AiOutlineMail, AiOutlinePrinter } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Article from "../_components/Articles/Article";
import PoemLink from "../_components/Poems/PoemLink";
import Modal from "react-modal";
import EditProfileForm from "../_components/Modal/EditProfileForm";
import { AppContext } from "../Context";
import { useRouter } from "next/navigation";
import { doc, getDoc, DocumentData, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import StoryLink from "../_components/ShortStories/StoryLink";
import Loading from "../_components/utils/Loading";
import BookReview from "../_components/BookReviews/BookReview";

type Props = {}
type UserProfile = {
    penName: string;
    about: string;
    instagram: string;
    twitter: string;
    email: string;
};
type Item = {
    id: string;
    data: any
    // ... other properties of the item
};

const Page = (props: Props) => {
    const [activeTab, setActiveTab] = useState('short-stories');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { logout } = useContext(AppContext)
    const { user, profile, setProfile } = useContext(AppContext)
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Function to fetch items based on the active tab
    const fetchItems = async () => {
        if (user) {
            const itemsRef = collection(db, activeTab);
            const q = query(itemsRef, where("uid", "==", user.uid));

            try {
                const querySnapshot = await getDocs(q);
                const fetchedItems = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }));
                console.log(fetchedItems);

                setItems(fetchedItems);
            } catch (error) {
                console.error("Error fetching items: ", error);
            } finally {
                setLoading(false); // Stop loading whether data is fetched or an error occurs
            }
        }
    };

    useEffect(() => {

        const fetchProfile = async () => {
            if (user) {
                setLoading(true); // Start loading when the activeTab changes and user exists
                const profileRef = doc(db, 'users', user.uid);
                try {
                    const docSnap = await getDoc(profileRef);

                    if (docSnap.exists()) {
                        console.log("Profile data:", docSnap.data());
                        setProfile(docSnap.data() as UserProfile);
                    } else {
                        console.log("No such profile!");
                    }
                } catch (error) {
                    console.error("Error fetching profile: ", error);
                }
            } else {
                console.log('No user is signed in.');
                router.push('/')
            }
        };

        fetchProfile();
        fetchItems();

        console.log('user not logged in');
    }, [user, activeTab])


    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const openModal = () => {
        setIsModalOpen(true);
        console.log('test function');

    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSignOut = async () => {
        try {
            await logout()
            router.push('/')
            console.log('logged out');

        } catch (error) {
            console.log(error)

        }
    }

    const hasItemsToShow = items.length > 0;

    return (
        <div className="max-w-3xl mx-auto py-20">
            <section>
                <h2 className="text-4xl font-headers font-semibold">{user?.displayName}</h2>
                <h3 className="text-xl font-headers font-medium capitalize">{profile.penName && profile.penName}</h3>
                <p className="font-body text lg py-2">{profile.about}</p>
                <div className="flex py-3">
                    <a
                        className={`border p-2 border-gray-200 ${profile.twitter ? 'hover:text-orange-500' : 'text-gray-500 cursor-not-allowed'}`}
                        href={profile.twitter ? `https://twitter.com/${profile.twitter}` : undefined}
                        onClick={!profile.twitter ? (e) => e.preventDefault() : undefined}
                    >
                        <FaXTwitter size={22} />
                    </a>
                    <a
                        className={`border p-2 border-gray-200 ${profile.instagram ? 'hover:text-orange-500' : 'text-gray-500 cursor-not-allowed'}`}
                        href={profile.instagram ? `https://instagram.com/${profile.instagram}` : undefined}
                        onClick={!profile.instagram ? (e) => e.preventDefault() : undefined}
                    >
                        <AiOutlineInstagram size={22} />
                    </a>
                    <a
                        className={`border p-2 border-gray-200 ${profile.email ? 'hover:text-orange-500' : 'text-gray-500 cursor-not-allowed'}`}
                        href={profile.email ? `mailto:${profile.email}` : undefined}
                        onClick={!profile.email ? (e) => e.preventDefault() : undefined}
                    >
                        <AiOutlineMail size={22} />
                    </a>

                </div>

                <div>
                    <button
                        onClick={openModal}
                        className="text-orange-500 hover:text-black hover:underline text-sm font-headers"
                    >
                        Edit Profile
                    </button>
                    <button onClick={handleSignOut} className="ml-5 text-orange-500 hover:text-black hover:underline text-sm font-headers">Log out</button>

                </div>


            </section>

            <section className="pt-5">
                <div className="flex font-headers font-medium border-b">
                    <div
                        className={` cursor-pointer pr-4 py-1 text-sm  ${activeTab === 'short-stories' ? 'border-b-gray-700 border-b -mb-[0.6px]' : '-mb-0'
                            }`}
                        onClick={() => handleTabClick('short-stories')}
                    >
                        Stories
                    </div>
                    <div
                        className={`cursor-pointer  px-4 py-1 text-sm  ${activeTab === 'poems' ? 'border-b-gray-700 border-b -mb-[0.6px]' : '-mb-0'
                            }`}
                        onClick={() => handleTabClick('poems')}
                    >
                        Poems
                    </div>
                    <div
                        className={`cursor-pointer  px-4 py-1 text-sm  ${activeTab === 'articles' ? 'border-b-gray-700 border-b -mb-[0.6px]' : '-mb-0'
                            }`}
                        onClick={() => handleTabClick('articles')}
                    >
                        Articles
                    </div>
                    <div
                        className={`cursor-pointer  px-4 py-1 text-sm  ${activeTab === 'book-reviews' ? 'border-b-gray-700 border-b -mb-[0.6px]' : '-mb-0'
                            }`}
                        onClick={() => handleTabClick('book-reviews')}
                    >
                        Reviews
                    </div>
                </div>

                <div className="">
                    {/* Render content based on activeTab */}
                    {loading && <div className="flex h-20 justify-center items-center">
                        <Loading />
                    </div>}
                    {!loading && activeTab === 'short-stories' && hasItemsToShow && (
                        items.map((item) => (
                            <div className="" key={item.id}>
                                <StoryLink shortStory={item} />
                            </div>
                        ))
                    )}
                    {!loading && activeTab === 'poems' && hasItemsToShow && (
                        <div className="grid justify-center md:grid-cols-2 gap-5 md:gap-y-14 pt-5">
                            {items.map((item) => (

                                <PoemLink key={item.id} poem={item} />
                            ))}
                        </div>
                    )}
                    {!loading && activeTab === 'articles' && hasItemsToShow && (
                        items.map((item) => (
                            <div className="" key={item.id}>
                                {/* Render your article */}
                                <Article article={item} />
                            </div>
                        ))
                    )}
                    {!loading && activeTab === 'book-reviews' && hasItemsToShow && (
                        <div className="grid gap-x-5 gap-y-16 gap sm:grid-cols-3 justify-center align-center pt-12" >
                            {items.map((item) => (

                                <BookReview key={item.id} bookReview={item} />
                            ))}
                        </div>
                    )}

                    {/* If no items to show, render the no content message just once */}
                    {!loading && !hasItemsToShow && (<p>No {activeTab} by this user.</p>)}
                </div>

            </section>

            {/* Modal for Edit Profile */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Edit Profile Modal"
                className="modal-content "
                overlayClassName="modal-overlay"
                ariaHideApp={false}
            >
                <h2 className="font-headers  text-2xl font-semibold py-1">Edit Profile</h2>
                {/* Use the new EditProfileForm component */}

                <EditProfileForm profile={profile} closeModal={closeModal} />
            </Modal>
        </div>
    )
}
export default Page