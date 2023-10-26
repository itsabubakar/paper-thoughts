"use client"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineMenu, AiOutlineSearch, AiOutlineYoutube, AiOutlineInstagram, AiOutlineDown, AiOutlineClose, AiOutlineUp } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'
import NavItem from "./NavItem"

type Props = {}
const Navbar = (props: Props) => {
    const [poetsLink, setPoetsLink] = useState(false)
    const [authorsLink, setAuthorsLink] = useState(false)
    const [menu, setMenu] = useState(false)

    return (
        <nav className="font-headers fixed top-0 block w-full z-20 max-h-[72px] bg-white border-b border-b-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between  px-5 min-h-[72px] items-center bg-white border-b border-b-gray-100 font-medium">
                <div className="flex gap-4">
                    <div><Link className="link font-semibold lg:font-medium" href={'/'}>Submit</Link></div>

                    {/* Poets */}
                    <div className="lg:block hidden">
                        <button onClick={() => {
                            if (authorsLink) {
                                setAuthorsLink(false)
                            }
                            if (poetsLink) {
                                setPoetsLink(false)
                            }
                            setPoetsLink(!poetsLink)
                        }} className="link">Poems & Poets {poetsLink ? <AiOutlineUp size={12} /> : <AiOutlineDown size={12} />}</button>
                        <div className={`inner-link ${poetsLink ? 'top-[74px]' : ' top-[-200%]'}`}>
                            <Link className="inner-link-item " href={'/'}>Poems</Link>
                            <Link className="inner-link-item" href={'/'}>Poets</Link>
                        </div>
                    </div>

                    {/* Authors */}
                    <div className="lg:block hidden">
                        <button onClick={() => {
                            if (poetsLink) {
                                setPoetsLink(false)
                            }
                            if (authorsLink) {
                                setAuthorsLink(false)
                            }
                            setAuthorsLink(!authorsLink)
                        }} className="link">Stories & Authors {authorsLink ? <AiOutlineUp size={12} /> : <AiOutlineDown size={12} />}</button>
                        <div className={`inner-link ${authorsLink ? 'top-[74px]' : ' top-[-200%]'}`}>
                            <Link className="inner-link-item" href={'/'}>Short Stories</Link>
                            <Link className="inner-link-item" href={'/'}>Authors</Link>
                        </div>
                    </div>
                </div>

                <Link href={'/'} className="lg:mr-20">
                    <h1 className="text-center md:text-2xl underline decoration-orange-500 font-headers">PaperThoughts</h1>
                    <p className="font-headers text-sm underline decoration-orange-500">Where words come to life</p>
                </Link>

                <div className="flex gap-5 items-center">
                    {/* socials */}
                    <div className="hidden md:block">
                        <ul className="flex gap-3 items-center">
                            <li><Link href={'/'}><AiOutlineInstagram className="hover:text-orange-500" size={25} /></Link></li>
                            <li><Link href={'/'}><AiOutlineYoutube className="hover:text-orange-500" size={25} /></Link></li>
                            <li><Link href={'/'}><FaXTwitter className="hover:text-orange-500" size={22} /></Link></li>
                        </ul>
                    </div>

                    {/* donate */}
                    <div className="mr-2 hidden lg:block">
                        <button className="border-2 border-orange-500 rounded px-4 py-2 hover:text-gray-500 hover:border-orange-300 text-sm"><Link href={'/'}>Donate</Link></button>
                    </div>

                    {/* Menu & Search */}

                    <div className="ml-2  ">
                        <div className="flex gap-5">
                            <button><Link href={'/'}><AiOutlineSearch size={26} /></Link></button>
                            <button onClick={() => setMenu(!menu)}>
                                {menu ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
                            </button>

                            {/* Menu */}
                            <div className={`hidden md:flex  md:w-[600px] top-0 p-10 rounded-lg menu  ${menu ? 'top-20' : ' top-[-600%]'}`}>
                                <div className="w-full md:flex justify-between hidden">
                                    <NavItem
                                        title={'Explore'}
                                        linkItem={['Articles', 'book reviews', 'Poems', 'Poets', 'Short Stories', 'Authors']}
                                    />
                                    <NavItem
                                        title={'Activities'}
                                        linkItem={['events', 'contests']}
                                    />
                                    <NavItem
                                        title={'About Us'}
                                        linkItem={['who we are', 'people', 'contact us']}
                                    />

                                    <NavItem
                                        title={'Support Us'}
                                        linkItem={['Donate']}
                                    />
                                </div>


                            </div>

                            {/* Mobile menu */}
                            <div className={`  md:hidden right-5 left-5 top-0 p-10 rounded-lg text-black -z-50 bg-white absolute  duration-300 transition-all ease-in-out shadow-[0_8px_30px_rgb(0,0,0,0.12)]    ${menu ? 'top-20' : ' top-[-600%]'}`}>
                                <div className=" md:hidden flex justify-between">

                                    <div className="flex flex-col gap-y-8">
                                        <NavItem
                                            title={'Explore'}
                                            linkItem={['Articles', 'book reviews', 'Poems', 'Poets', 'Short Stories', 'Authors']}
                                        />
                                        <NavItem
                                            title={'Activities'}
                                            linkItem={['events', 'contests']}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-8 ">
                                        <NavItem
                                            title={'About Us'}
                                            linkItem={['who we are', 'people', 'contact us']}
                                        />

                                        <NavItem
                                            title={'Support Us'}
                                            linkItem={['Donate']}
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
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </nav >
    )
}
export default Navbar