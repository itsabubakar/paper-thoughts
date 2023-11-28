"use client"
import Link from "next/link"
import { useContext, useState } from "react"
import { AiOutlineMenu, AiOutlineSearch, AiOutlineYoutube, AiOutlineInstagram, AiOutlineDown, AiOutlineClose, AiOutlineUp } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'
import NavItem from "./NavItem"
import { AppContext } from "../../Context"


type Props = {}
const Navbar = (props: Props) => {
    const [poetsLink, setPoetsLink] = useState(false)
    const [authorsLink, setAuthorsLink] = useState(false)
    const { menu, setMenu } = useContext(AppContext)

    return (
        <nav className="font-headers fixed top-0 block w-full z-20 max-h-[72px] bg-white border-b border-b-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto flex  px-5 min-h-[72px] items-center bg-white border-b border-b-gray-100 font-medium justify-between">
                <div className="flex gap-4 ">
                    <div><Link className="link font-semibold lg:font-medium" href={'signup'}>Write</Link></div>


                </div>

                <Link href={'/'} className="">
                    <h1 className="text-center md:text-2xl underline decoration-orange-500 font-headers">PaperThoughts</h1>
                    <p className="font-headers text-sm underline decoration-orange-500 text-center">Where words come to life</p>
                </Link>

                <div className="flex gap-5 items-center ">


                    {/* donate */}
                    {/* <div className="mr-2 hidden lg:block">
                        <button className="border-2 border-orange-500 rounded px-4 py-2 hover:text-gray-500 hover:border-orange-300 text-sm"><Link href={'/'}>Donate</Link></button>
                    </div> */}

                    {/* Menu & Search */}

                    <div>
                        <Link href={'/account'} className="text-white py-1 px-2 bg-black rounded-full block">
                            AS
                        </Link>

                    </div>

                    <div className="  ">
                        <div className="flex gap-5">
                            <button><Link href={'/'}><AiOutlineSearch size={26} /></Link></button>
                            <button onClick={() => setMenu(!menu)}>
                                {menu ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
                            </button>

                            {/* Menu */}
                            <div className={`hidden md:block  md:w-[600px] top-0 p-10 rounded-lg menu  ${menu ? 'top-20' : ' top-[-600%]'}`}>
                                <div className="w-full md:flex justify-between hidden">
                                    <NavItem
                                        title={"Explore"}
                                        links={[{ href: '/articles', label: 'Articles' }, { href: '/book-review', label: 'book reviews' }, { href: '/poems', label: 'Poems' }, { href: '/poets', label: 'Poets' }, { href: '/short-stories', label: 'Short Stories' }, { href: '/authors', label: 'Authors' }]}
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
                                        links={[{ href: '/', label: 'submit piece' },
                                            //  { href: '/', label: 'donate' }
                                        ]}
                                    />

                                </div>

                                <div className="flex gap-10 px-2 justify-around pt-4">
                                    <Link onClick={() => setMenu(!menu)} href={'/signup'} className="border border-orange-500 capitalize text-center py-1 bg-orange-500 text-white px-5 w-2/3 rounded-2xl hover:border-border-color hover:text-gray-800 hover:bg-white transition duration-200"> sign up</Link>
                                    <Link onClick={() => setMenu(!menu)} href={'/login'} className="border border-orange-500 capitalize text-center py-1 bg-orange-500 text-white px-5 w-2/3 rounded-2xl hover:border-border-color hover:text-gray-800 hover:bg-white transition duration-200">login</Link>
                                </div>
                            </div>

                            {/* Mobile menu */}
                            <div className={`  md:hidden right-5 left-5 top-0 p-10 rounded-lg text-black -z-50 bg-white absolute  duration-300 transition-all ease-in-out shadow-[0_8px_30px_rgb(0,0,0,0.12)]    ${menu ? 'top-20' : ' top-[-600%]'}`}>
                                <div className=" md:hidden flex justify-between sm:justify-evenly">

                                    <div className="flex flex-col gap-y-8">
                                        <NavItem
                                            title={"Explore"}
                                            links={[{ href: '/articles', label: 'Articles' }, { href: '/', label: 'book reviews' }, { href: '/', label: 'Poems' }, { href: '/', label: 'Poets' }, { href: '/', label: 'Short Stories' }, { href: '/', label: 'Authors' }]}
                                        />
                                        <NavItem
                                            title={"Activities"}
                                            links={[{ href: '/events', label: 'events' }]}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-8 ">
                                        <NavItem
                                            title={"About Us"}
                                            links={[{ href: '/', label: 'who we are' }, { href: '/', label: 'people' }, { href: '/', label: 'contact us' },]}
                                        />
                                        <NavItem
                                            title={"Support Us"}
                                            links={[{ href: '/', label: 'submit piece' }
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
                                <div className="flex gap-10 px-2 justify-around pt-8">
                                    <Link onClick={() => setMenu(!menu)} href={'/signup'} className="border border-orange-500 capitalize text-center py-1 bg-orange-500 text-white px-5 w-2/3 rounded-2xl hover:border-border-color hover:text-gray-800 hover:bg-white transition duration-200"> sign up</Link>
                                    <Link onClick={() => setMenu(!menu)} href={'/login'} className="border border-orange-500 capitalize text-center py-1 bg-orange-500 text-white px-5 w-2/3 rounded-2xl hover:border-border-color hover:text-gray-800 hover:bg-white transition duration-200">login</Link>
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