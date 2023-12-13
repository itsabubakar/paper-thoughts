import Link from "next/link"
import Article from "./Article"

type Props = {
    articles: any
}
const ArticleSection = ({ articles }: Props) => {
    return (
        <div className="pb-10 ">
            <h2 className=" uppercase font-bold font-headers bg-black text-white  py-2 px-2 ">RECENT articles</h2>
            {
                articles?.map((article: any, index: number) => {
                    return <Article key={article.id} article={article} />
                })
            }
            <Link className="capitalize font-headers block mt-5 underline hover:text-orange-500 font-semibold" href={'/'}>See all articles</Link>
        </div>
    )
}
export default ArticleSection