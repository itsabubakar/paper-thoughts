import Link from "next/link"
import Article from "./Article"

type Props = {

}
const ArticleSection = (props: Props) => {
    return (
        <div className="pb-10 ">
            <h2 className=" uppercase font-bold font-headers bg-black text-white  py-2 px-2 ">RECENT articles</h2>
            <Article />
            <Article />
            <Article />
            <Article />
            <Link className="capitalize font-headers block mt-5 underline hover:text-orange-500 font-semibold" href={'/'}>See all articles</Link>
        </div>
    )
}
export default ArticleSection