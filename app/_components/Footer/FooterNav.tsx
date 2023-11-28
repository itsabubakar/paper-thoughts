import Link from "next/link"

type Props = {
    title: string,
    linkItem: string[]
}
const FooterNav = ({ title, linkItem }: Props) => {
    return (
        <div className="">
            <h2 className="pb-2 uppercase font-semibold">{title}</h2>
            <ul>
                {
                    linkItem.map((item, index) => (
                        <li key={index}><Link className="capitalize font-headers font-medium hover:text-orange-500 duration-200" href={'/'}>{item}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}
export default FooterNav