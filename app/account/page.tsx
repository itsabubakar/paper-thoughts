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
import { doc, getDoc, DocumentData } from "firebase/firestore";
import { db } from "@/firebase";

type Props = {}
type UserProfile = {
    penName: string;
    about: string;
    instagram: string;
    twitter: string;
    email: string;
};

const Page = (props: Props) => {
    const [activeTab, setActiveTab] = useState('shortStories');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { logout } = useContext(AppContext)
    const { user, profile, setProfile } = useContext(AppContext)
    const router = useRouter();




    useEffect(() => {

        const fetchProfile = async () => {
            if (user) {
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


        console.log('user not logged in');
    }, [user])


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

    const handlSignOut = async () => {
        try {
            await logout()
            router.push('/')
            console.log('logged out');

        } catch (error) {
            console.log(error)

        }
    }

    return (
        <div className="max-w-3xl mx-auto py-20">
            <section>
                <h2 className="text-4xl font-headers font-semibold">{user?.displayName}</h2>
                <h3 className="text-xl font-headers font-medium capitalize">{profile.penName && profile.penName}</h3>
                <p className="font-body text lg py-2">{profile.about}</p>
                <div className="flex py-3">
                    <Link className="border p-2 border-gray-200 hover:text-orange-500" href={'/'}><FaXTwitter className="" size={22} /></Link>
                    <Link className="border p-2 border-gray-200  hover:text-orange-500" href={'/'}><AiOutlineInstagram className="" size={22} /></Link>
                    <Link className="border p-2 border-gray-200  hover:text-orange-500" href={'/'}><AiOutlineMail className="" size={22} /></Link>

                </div>

                <div>
                    <button
                        onClick={openModal}
                        className="text-orange-500 hover:text-black hover:underline text-sm font-headers"
                    >
                        Edit Profile
                    </button>
                    <button onClick={handlSignOut} className="ml-5 text-orange-500 hover:text-black hover:underline text-sm font-headers">Log out</button>

                </div>


            </section>

            <section className="pt-5">
                <div className="flex font-headers font-medium border-b">
                    <div
                        className={` cursor-pointer pr-4 py-1 text-sm  ${activeTab === 'shortStories' ? 'border-b-gray-700 border-b -mb-[0.6px]' : '-mb-0'
                            }`}
                        onClick={() => handleTabClick('shortStories')}
                    >
                        Short Stories
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
                        className={`cursor-pointer  px-4 py-1 text-sm  ${activeTab === 'bookmarks' ? 'border-b-gray-700 border-b -mb-[0.6px]' : '-mb-0'
                            }`}
                        onClick={() => handleTabClick('bookmarks')}
                    >
                        Bookmarks
                    </div>
                </div>

                <div className="p-4">
                    {/* Render content based on activeTab */}
                    {activeTab === 'shortStories' &&
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, optio eum deleniti laboriosam enim libero dolorum placeat ut possimus doloribus aut expedita quidem vero distinctio a nam suscipit natus cupiditate!</p>
                        </div>}
                    {activeTab === 'poems' &&
                        <div className="grid justify-center md:grid-cols-2 gap-5 md:gap-y-14 pt-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, optio eum deleniti laboriosam enim libero dolorum placeat ut possimus doloribus aut expedita quidem vero distinctio a nam suscipit natus cupiditate!</p>

                        </div>}
                    {activeTab === 'articles' &&
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, optio eum deleniti laboriosam enim libero dolorum placeat ut possimus doloribus aut expedita quidem vero distinctio a nam suscipit natus cupiditate!</p>
                        </div>}
                    {activeTab === 'bookmarks' &&
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, optio eum deleniti laboriosam enim libero dolorum placeat ut possimus doloribus aut expedita quidem vero distinctio a nam suscipit natus cupiditate!</p>
                        </div>}
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