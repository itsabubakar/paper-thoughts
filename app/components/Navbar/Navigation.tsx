"use client"
import Link from "next/link"
import { useState } from "react"


const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className={`px-3 lg:px-0`}>
            <div className="flex items-center justify-between">

                {/* Logo */}
                <div className='z-50 flex justify-between items-center w-full lg:w-fit'>
                    <Link href={'/'} className='flex items-center'>
                        <div className='h-[88px] w-[54px]'>
                            logo
                        </div>

                    </Link>
                    <div className='text-3xl lg:hidden' onClick={() => setOpen(!open)}>
                        {open ? "open" : "close"}
                    </div>
                </div>

                <ul className={` lg:flex hidden items-center  gap-8 font-poppins text-sm`}>
                    <li><Link onClick={() => console.log('foo')} href={"/about"} >About</Link></li>
                    <li><Link onClick={() => console.log('foo')} href={"/portfolio"} >Portfolio</Link></li>
                    <li><Link onClick={() => console.log('foo')} href={"/resume"} >Résumé</Link></li>
                    <li><Link onClick={() => console.log('foo')} href={"/calendar"} >Calendar</Link></li>
                    <li className='py-2 px-3'><Link onClick={() => console.log('foo')} href={"/contact"} >Contact</Link></li>

                </ul>

                {/* Mobile links */}
                <div className={`lg:hidden text-black font-poppins bg-white right-0 absolute h-fit bottom-0 py-24 pl-4 duration-700 ${open ? 'top-28' : ' top-[-110%]'}`}>
                    <ul className=''>
                        <li className='py-2 px-3'><Link onClick={() => console.log('foo')} href={"/"} >Home</Link></li>
                        <li className='py-2 px-3'><Link onClick={() => console.log('foo')} href={"/about"} >About</Link></li>
                        <li className='py-2 px-3'><Link onClick={() => console.log('foo')} href={"/portfolio"} >Portfolio</Link></li>
                        <li className='py-2 px-3'><Link onClick={() => console.log('foo')} href={"/resume"} >Résumé</Link></li>
                        <li className='py-2 px-3'><Link onClick={() => console.log('foo')} href={"/calendar"} >Calendar</Link></li>
                        <li className='py-2 px-3'><Link onClick={() => console.log('foo')} href={"/contact"} >Contact</Link></li>
                    </ul>


                </div>




            </div>
        </nav>
    )
}

