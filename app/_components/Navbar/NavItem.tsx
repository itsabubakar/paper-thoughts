import Link from "next/link"

type Props = {
    title: string
    links: {
        href: string;
        label: string;
    }[]
}
const NavItem = ({ title, links }: Props) => {


    return (
        <div className="">
            <h2 className="pb-3 uppercase font-medium font-headers">{title}</h2>
            <ul>
                {
                    links.map((link, index) => (
                        <li key={index}><Link className="inner-menu-item font-body" href={link.href} >{link.label}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}
export default NavItem