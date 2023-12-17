// Essay Prose Book review

import Link from "next/link"
import parse from "html-react-parser";
import DateFormat from "../utils/DateFormat";

type Article = {
    article: {
        id: string
        data: {
            title: string
            authorName: string
            tag: string
            content: string
            uid: string
            createdAt: {
                seconds: number
                nanoseconds: number
            }
        }
    }
}
const Article = ({ article }: Article) => {
    return (
        <div className="border-b border-[#c7c7c7] py-5">
            <Link href={`/articles/${article.id}`}>
                <p className="text-orange-500 font-semibold tracking-wider capitalize pb-1 font-headers">{article.data?.tag}</p>
                <h2 className="text-xl font-semibold pb-2 font-headers capitalize">{article.data?.title} </h2>
                <div className="flex">

                    <p className="text-gray-800 font-body">By {article.data?.authorName} <span className="text-orange-500">|</span> <DateFormat timestamp={article.data?.createdAt.seconds} /></p>
                </div>
                <div className="line-clamp-1 md:line-clamp-2">
                    {parse(article?.data?.content)}

                </div>
            </Link>
        </div>
    )
}
export default Article