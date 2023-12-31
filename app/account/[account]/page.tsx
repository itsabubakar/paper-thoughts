'use client';
import { getDoc, doc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";

import { useEffect, useState } from "react";
import { AiOutlineInstagram, AiOutlineMail, AiOutlinePrinter } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import Article from "../../_components/Articles/Article";
import PoemLink from "../../_components/Poems/PoemLink";
import { useParams } from "next/navigation";
import Loading from "@/app/_components/utils/Loading";
import StoryLink from "@/app/_components/ShortStories/StoryLink";
import BookReview from "@/app/_components/BookReviews/BookReview";

type Props = {}
type Account = {
    displayName: string
    email: string
    uid: string
    penName?: string
    about?: string
    instagram?: string
    twitter?: string

}

type Item = {
    id: string;
    data: any
    // ... other properties of the item
};

const Page = (props: Props) => {
    const [activeTab, setActiveTab] = useState("short-stories");
    const [account, setAccount] = useState<Account>();
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<Item[]>([]);


    const params = useParams()
    const accountId = params.account

    // Function to fetch items based on the active tab

    const fetchItems = async () => {
        console.log(account);
        console.log('running');


        if (account) {
            const itemsRef = collection(db, activeTab);
            console.log(activeTab);

            const q = query(itemsRef, where("uid", "==", account.uid));

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
        } else {
            console.log("Account not found");
        }
    };

    useEffect(() => {
        console.log('sup');
        const fetchUserData = async () => {
            setLoading(true); // Start loading when the activeTab changes and user exists


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
                        const userData: Account = userDoc.data() as Account;
                        setAccount(userData);
                        fetchItems();

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

    }, []);

    useEffect(() => {
        // Function to fetch items based on the active tab


        if (account) {
            fetchItems();
        }
    }, [account, activeTab]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };


    const hasItemsToShow = items.length > 0;



    return (
        <div className="max-w-3xl mx-auto py-20">
            <section>
                <h2 className="text-4xl font-headers font-semibold">{account?.displayName}</h2>
                <h3 className="text-xl font-headers font-medium capitalize">{account?.penName && account.penName}</h3>
                <p className="font-body text lg py-2">{account?.about}</p>
                <div className="flex py-3">
                    <a
                        className={`border p-2 border-gray-200 ${account?.twitter ? 'hover:text-orange-500' : 'text-gray-500 cursor-not-allowed'}`}
                        href={account?.twitter ? `https://twitter.com/${account.twitter}` : undefined}
                        onClick={!account?.twitter ? (e) => e.preventDefault() : undefined}
                    >
                        <FaXTwitter size={22} />
                    </a>
                    <a
                        className={`border p-2 border-gray-200 ${account?.instagram ? 'hover:text-orange-500' : 'text-gray-500 cursor-not-allowed'}`}
                        href={account?.instagram ? `https://instagram.com/${account.instagram}` : undefined}
                        onClick={!account?.instagram ? (e) => e.preventDefault() : undefined}
                    >
                        <AiOutlineInstagram size={22} />
                    </a>
                    <a
                        className={`border p-2 border-gray-200 ${account?.email ? 'hover:text-orange-500' : 'text-gray-500 cursor-not-allowed'}`}
                        href={account?.email ? `mailto:${account?.email}` : undefined}
                        onClick={!account?.email ? (e) => e.preventDefault() : undefined}
                    >
                        <AiOutlineMail size={22} />
                    </a>

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

                <div className="p-4">
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


        </div>
    );
};

export default Page;
