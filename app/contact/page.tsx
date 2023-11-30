import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import SectionWrapper from "../_components/Section/SectionWrapper"
import Link from "next/link"
import { FaXTwitter } from "react-icons/fa6"

type Props = {}
const Page = (props: Props) => {
    return (
        <SectionWrapper>
            <h2 className="rounded uppercase font-bold font-headers bg-black text-white  py-2 px-2 ">Contact us</h2>
            <div className="text-center py-5">
                <p className="pb-2 font-body text-lg text-gray-800">For general inquiries: <span className="text-orange-500 font-headers">info@paperthoughts.com</span></p>
                <p className="font-body text-lg text-gray-800">For partnership inquiries contact: <span className="text-orange-500 font-headers">Gabriel Oguche | gabriel@paperthoughts.com</span></p>
            </div>

            <div>
                <div className="rounded-lg bg-gray-900 px-5 py-10 text-white my-5 md:flex justify-between">
                    <div>
                        <ul className="flex gap-3 items-center pb-6 w-1/2">
                            <li><Link href={'/'}><AiOutlineInstagram className="hover:text-orange-500" size={25} /></Link></li>
                            <li><Link href={'/'}><AiOutlineYoutube className="hover:text-orange-500" size={25} /></Link></li>
                            <li><Link href={'/'}><FaXTwitter className="hover:text-orange-500" size={22} /></Link></li>
                        </ul>
                        <p className="font-body text-lg">Read Poetry presented by Paper Thoughts</p>
                    </div>

                    <div className="w-1/2">
                        <h3 className="text-xl pb-3 font-headers">Sign Up for Updates from Paper thoughts</h3>
                        <form action="">
                            <div className="flex flex-col gap-2">

                                <label className="lg font-body" htmlFor="email">Email</label>
                                <input className="rounded  px-2 py-1 border" type="text" placeholder="Enter your email" />
                            </div>
                            <button className="rounded mt-4 bg-white border-2 border-white transition duration-200 text-gray-800 font-medium px-2 py-1 font-body hover:border-black hover:text-black">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
export default Page