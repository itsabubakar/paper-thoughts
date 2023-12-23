import Link from "next/link"
import FooterNav from "./FooterNav"
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6"
import NavItem from "../Navbar/NavItem"

type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="w-full border-t border-t-gray-700 py-8">

            <Link href={'/'} className="pb-6 block">
                <h1 className="text-center md:text-2xl underline decoration-orange-500 font-headers">PaperThoughts</h1>
                <p className="font-headers text-sm underline decoration-orange-500 text-center">Where words come to life</p>
            </Link>
            <div className=" flex gap-y-5 flex-wrap justify-between">
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
                    links={[{ href: '/write', label: 'submit piece' },
                        //  { href: '/', label: 'donate' }
                    ]}
                />
            </div>
            <div className=" flex justify-center pt-2">
                <ul className="flex gap-3 items-center">
                    <li><Link href={'/'}><AiOutlineInstagram className="hover:text-orange-500" size={25} /></Link></li>
                    <li><Link href={'/'}><AiOutlineYoutube className="hover:text-orange-500" size={25} /></Link></li>
                    <li><Link href={'/'}><FaXTwitter className="hover:text-orange-500" size={22} /></Link></li>
                </ul>
            </div>

            <div>
                <h2 className="py-2 uppercase font-semibold text-xs font-headers text-center text-gray-500">© Paper Thoughts 2023. All rights reserved.</h2>
            </div>

        </div>
    )
}
export default Footer