import Link from 'next/link'
import { BsBookmarks } from 'react-icons/bs'

type Props = {}
const HeroSection = (props: Props) => {
    return (
        <div className="flex justify-center">
            <div className="max-w-3xl px-5 md:px-0 text-center py-20">
                <p className="uppercase pb-4 font-medium">Featured article</p>
                <h2 className=" text-3xl md:text-5xl lg:text-7xl font-semibold">202-400 goals.</h2>
                <div className="flex justify-center gap-2 py-8">
                    <Link href={'/account/4Z1sACnghdPQM3ugrCdDHOo9i0s1'} className="font-medium hover:text-orange-500">By Nafisa Isah /</Link>
                    <Link href={'/articles'} className="font-medium hover:text-orange-500">In Articles /</Link>
                </div>
                <div className="uppercase flex gap-4 justify-center">
                    <Link href={'articles/oOjRRM92i4JNIHlR8lbi'} className="duration-200 ease-in  w-32 text-sm font-medium hover:bg-white hover:text-black hover:border-2 hover:border-orange-500 shadow-black px-4 py-2 bg-orange-500 text-white">Read</Link>
                    {/* <button className="duration-200 ease-in flex gap-1 items-center border-2 border-orange-500 px-4 py-2 w-32 text-sm font-medium hover:shadow-2xl shadow-black hover:bg-orange-500 hover:text-white"><BsBookmarks size={15} />Read Later</button> */}
                </div>
            </div>


        </div>
    )
}
export default HeroSection