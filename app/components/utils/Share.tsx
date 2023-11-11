import Link from "next/link"
import { AiOutlineInstagram, AiOutlineMail, AiOutlinePrinter } from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6"

type Props = {}
const Share = (props: Props) => {
    return (
        <div className="flex pt-3 sm:pt-0">
            <Link className="border p-2 border-gray-200 hover:text-orange-500" href={'/'}><FaXTwitter className="" size={22} /></Link>
            <Link className="border p-2 border-gray-200  hover:text-orange-500" href={'/'}><AiOutlineInstagram className="" size={22} /></Link>
            <Link className="border p-2 border-gray-200  hover:text-orange-500" href={'/'}><AiOutlineMail className="" size={22} /></Link>
            <Link className="border p-2 border-gray-200  hover:text-orange-500" href={'/'}> <AiOutlinePrinter className="" size={22} /></Link>

        </div>
    )
}
export default Share