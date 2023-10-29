import Link from "next/link"
import { useContext } from "react";
import { AppContext } from "../../Context";

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
            <h2 className="pb-3 uppercase font-medium">{title}</h2>
            <ul>
                {
                    links.map((link, index) => (
                        <li key={index}><Link onClick={() => setMenu(!menu)
                        } className="inner-menu-item" href={link.href} >{link.label}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}
export default NavItem