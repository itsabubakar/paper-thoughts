"use client"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineSearch, AiOutlineYoutube, AiOutlineInstagram, AiOutlineDown, AiOutlineClose, AiOutlineUp } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'
import NavItem from "./NavItem"
import { AppContext } from "../../Context"
import { useRouter } from "next/navigation";


type Props = {}
const Navbar = (props: Props) => {
    const router = useRouter();
    const { menu, setMenu, user } = useContext(AppContext)
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')

    const createQueryString = (name: string, value: string) => {
        const params = new URLSearchParams();
        params.set(name, value);

        return params.toString();
    };

    const handleSearch = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        router.push(`/search?${createQueryString('search', searchValue)}`)

        // console.log(createQueryString('search', searchValue))
    }
    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 300))
            setLoading(false)
        }
        checkAuthentication()
    }, [user])

    const approvedEmails = ['sadiqbilyamin@gmail.com', 'seeker99157@gmail.com', 'weareveryoldkds@gmail.com', 'morganufuoma@gmail.com', 'isahnafisa616@gmail.com', 'deeehmkay@gmail.com'];

    const isEmailApproved = (email: string): boolean => {
        return approvedEmails.includes(email);
    };

    console.log(isEmailApproved(user?.email || ''));


    return (
        <nav className="font-headers fixed top-0 block w-full z-20 max-h-[72px] bg-white border-b border-b-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto flex  px-5 min-h-[72px] items-center bg-white border-b border-b-gray-100 font-medium ">
                <div className="flex-1 flex justify-start">
                    {
                        user && isEmailApproved(user?.email) && <div><Link className=" link font-semibold lg:font-medium " href={'/write'}>Write</Link></div>
                    }
                    {
                        user && !isEmailApproved(user?.email) && <div><Link className=" link font-semibold lg:font-medium " href={'/get-started'}>Get Started</Link></div>
                    }
                    {
                        !user && <div><Link className=" link font-semibold lg:font-medium " href={'/login'}>Sign in</Link></div>
                    }

                </div>

                <Link href={'/'} className="flex-0">
                    <h1 className="text-center md:text-2xl underline decoration-orange-500 font-headers">PaperThoughts</h1>
                    <p className="font-headers text-xs underline decoration-orange-500 text-center">Where words come to life</p>
                </Link>

                <div className="flex gap-5 items-center flex-1 justify-end">


                    {/* donate */}
                    {/* <div className="mr-2 hidden lg:block">
                        <button className="border-2 border-orange-500 rounded px-4 py-2 hover:text-gray-500 hover:border-orange-300 text-sm"><Link href={'/'}>Donate</Link></button>
                    </div> */}

                    {/* Menu & Search */}

                    {loading ? null : user &&
                        <div className="hidden md:block">
                            <Link href={'/account'} className="text-white py-1 px-2 bg-black rounded-full block capitalize">
                                {user?.displayName.split(' ')[0]}
                            </Link>

                        </div>
                    }

                    <div className="  ">
                        <div className="flex gap-5">
                            <form className="hidden md:inline-flex border border-gray-300 px-5 py-1 rounded-full " onSubmit={handleSearch}>
                                <input type="text"
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    value={searchValue}
                                    className="outline-none" placeholder="Search" />
                                <button type="submit">

                                    <AiOutlineSearch size={26} />
                                </button>
                            </form>
                            <button onClick={() => setMenu(!menu)}>
                                {menu ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
                            </button>

                            {/* Menu */}
                            <div className={`hidden md:block  md:w-[600px] top-0 p-10 rounded-lg menu  ${menu ? 'top-20' : ' top-[-600%]'}`}>
                                <div className="w-full md:flex justify-between hidden">
                                    <NavItem
                                        title={"Explore"}
                                        links={[{ href: '/articles', label: 'Articles' }, { href: '/book-reviews', label: 'book reviews' }, { href: '/poems', label: 'Poems' }, { href: '/short-stories', label: 'Short Stories' }]}
                                    />
                                    <NavItem
                                        title={"About Us"}
                                        links={[{ href: '/who-we-are', label: 'who we are' }, { href: '/contact', label: 'contact us' },]}
                                    />
                                    <NavItem
                                        title={"Activities"}
                                        links={[{ href: '/events', label: 'events' }]}
                                    />
                                    <NavItem
                                        title={"Support Us"}
                                        links={[{ href: '/get-started', label: 'submit piece' },
                                            //  { href: '/', label: 'donate' }
                                        ]}
                                    />

                                </div>


                            </div>

                            {/* Mobile menu */}
                            <div className={`  md:hidden right-5 left-5 top-0 p-10 rounded-lg text-black -z-50 bg-white absolute  duration-300 transition-all ease-in-out shadow-[0_8px_30px_rgb(0,0,0,0.12)]    ${menu ? 'top-20' : ' top-[-600%]'}`}>
                                <div className=" md:hidden flex justify-between sm:justify-evenly">

                                    <div className="flex flex-col gap-y-8">
                                        <NavItem
                                            title={"Explore"}
                                            links={[{ href: '/articles', label: 'Articles' }, { href: '/book-reviews', label: 'book reviews' }, { href: '/poems', label: 'Poems' }, { href: '/short-stories', label: 'Short Stories' }]}
                                        />
                                        <NavItem
                                            title={"Activities"}
                                            links={[{ href: '/events', label: 'events' }]}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-8 ">
                                        <NavItem
                                            title={"About Us"}
                                            links={[{ href: '/who-we-are', label: 'who we are' }, { href: '/', label: 'contact us' },]}
                                        />
                                        <NavItem
                                            title={"Support Us"}
                                            links={[{ href: '/get-started', label: 'submit piece' }
                                                //  { href: '/', label: 'donate' }
                                            ]
                                            }
                                        />
                                        <div className="">
                                            <h2 className="pb-3 font-medium uppercase">Follow Us</h2>

                                            <ul className="flex gap-3 items-center">
                                                <li><Link href={'/'}><AiOutlineInstagram className="hover:text-orange-500" size={25} /></Link></li>
                                                <li><Link href={'/'}><AiOutlineYoutube className="hover:text-orange-500" size={25} /></Link></li>
                                                <li><Link href={'/'}><FaXTwitter className="hover:text-orange-500" size={22} /></Link></li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>
                                <div className="max-w-md mx-auto flex items-center py-4 gap-2">
                                    {loading ? null : user &&
                                        <div className="block md:hidden">
                                            <Link href={'/account'} className="text-white w-fit py-1 px-2 bg-black rounded-full block capitalize">
                                                {user?.displayName.split(' ')[0]}
                                            </Link>

                                        </div>
                                    }
                                    <form className="  w-full flex justify-between border border-gray-300 px-5 py-1 rounded-full " onSubmit={handleSearch}>
                                        <input type="text"
                                            onChange={(e) => setSearchValue(e.target.value)}
                                            value={searchValue}
                                            className="w-full outline-none" placeholder="Search" />
                                        <button type="submit">

                                            <AiOutlineSearch size={26} />
                                        </button>
                                    </form>
                                </div>

                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </nav >
    )
}
export default Navbar