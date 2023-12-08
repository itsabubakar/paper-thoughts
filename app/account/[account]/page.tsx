'use client';
import { getDoc, doc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AiOutlineInstagram, AiOutlineMail, AiOutlinePrinter } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Article from "../../_components/Articles/Article";
import PoemLink from "../../_components/Poems/PoemLink";
import Modal from "react-modal";
import EditProfileForm from "../../_components/Modal/EditProfileForm";
import { AppContext } from "../../Context";
import { useRouter, useParams } from "next/navigation";

type Props = {}
type account = {
    displayName: string
    email: string
    uid: string
}

const Page = (props: Props) => {
    const [activeTab, setActiveTab] = useState("shortStories");
    const [account, setAccount] = useState<account>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { logout, setUser } = useContext(AppContext); // Update to set the user details
    const { user } = useContext(AppContext);
    const router = useRouter();
    const params = useParams()
    const accountId = params.account



    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Get the user ID from router params
                const userId = accountId as string;

                // Check if the user ID exists
                if (userId) {
                    // Fetch user details from the 'users' collection
                    const userDoc = await getDoc(doc(db, "users", userId));


                    // Check if the user document exists
                    if (userDoc.exists()) {
                        // Set user details in the context
                        const userData: account = userDoc.data() as account;


                        setAccount(userData);

                        // Proceed with any other logic you need with the user details
                    } else {
                        console.error("User not found");
                    }
                } else {
                    console.error("User ID not provided in router params");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [accountId]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handlSignOut = async () => {
        try {
            await logout();
            router.push('/');
            console.log('logged out');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto py-20">
            <section>
                <h2 className="text-4xl font-headers font-semibold">{account?.displayName}</h2>
                <p className="font-body text lg py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fuga enim neque ratione saepe commodi hic consectetur nostrum quis, culpa minus repellat incidunt doloremque architecto debitis voluptatum quia perferendis obcaecati?</p>
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
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                        </div>}
                    {activeTab === 'poems' &&
                        <div className="grid justify-center md:grid-cols-2 gap-5 md:gap-y-14 pt-5">
                            <PoemLink />
                            <PoemLink />
                            <PoemLink />
                            <PoemLink />
                            <PoemLink />
                            <PoemLink />

                        </div>}
                    {activeTab === 'articles' &&
                        <div>
                            <Article />
                            <Article />
                            <Article />
                            <Article />
                        </div>}
                    {activeTab === 'bookmarks' &&
                        <div>
                            <Article />
                            <Article />
                        </div>}
                </div>

            </section>

            {/* Modal for Edit Profile */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Edit Profile Modal"
                className="modal-content"
                overlayClassName="modal-overlay"
                ariaHideApp={false}
            >
                <h2>Edit Profile</h2>
                {/* Use the new EditProfileForm component */}
                <EditProfileForm closeModal={closeModal} />
            </Modal>
        </div>
    );
};

export default Page;
