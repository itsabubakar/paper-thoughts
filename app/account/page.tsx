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

type Props = {}
const Page = (props: Props) => {
    const [activeTab, setActiveTab] = useState('shortStories');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { logout } = useContext(AppContext)
    const { user } = useContext(AppContext)
    const router = useRouter();

    useEffect(() => {
        if (!user)
            router.push('/login')
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
                <h2 className="text-4xl font-headers font-semibold">Abubakar Sadiq Bilyamin</h2>
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
    )
}
export default Page