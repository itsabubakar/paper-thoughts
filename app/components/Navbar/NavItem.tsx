import Link from "next/link"

type Props = {
    title: string,
    linkItem: string[]
}
const NavItem = ({ title, linkItem }: Props) => {
    return (
        <div className="md:px-5">
            <h2 className="pb-3 uppercase font-medium">{title}</h2>
            <ul>
                {
                    linkItem.map((item, index) => (
                        <li key={index}><Link className="inner-menu-item" href={'/'}>{item}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}
export default NavItem