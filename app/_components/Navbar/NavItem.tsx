'use client'
import { AppContext } from "@/app/Context";
import Link from "next/link"
import { useContext } from "react";

type Props = {
    title: string
    links: {
        href: string;
        label: string;
    }[]
}
const NavItem = ({ title, links }: Props) => {
    const { menu, setMenu } = useContext(AppContext)


    return (
        <div className="">
            <h2 className="pb-3 uppercase font-medium font-headers">{title}</h2>
            <ul>
                {
                    links.map((link, index) => (
                        <li onClick={() => setMenu(!menu)} key={index}><Link className="inner-menu-item font-body" href={link.href} >{link.label}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}
export default NavItem