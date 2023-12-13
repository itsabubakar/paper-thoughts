// Essay Prose Book review

import Link from "next/link"
import parse from "html-react-parser";


type Article = {
    article: {
        id: string
        data: {
            title: string
            tag: string
            content: string
            uid: string
        }
    }
}
const Article = ({ article }: Article) => {
    return (
        <div className="border-b border-[#c7c7c7] py-5">
            <Link href={`/articles/${article.id}`}>
                <p className="text-orange-500 font-semibold tracking-wider capitalize pb-1 font-headers">{article.data.tag}</p>
                <h2 className="text-xl font-semibold pb-2 font-headers">{article.data.title} </h2>
                <p className="text-gray-800 font-body">By Sadiq Bilyamin <span className="text-orange-500">|</span> October 24, 2023</p>
                <div className="line-clamp-1 md:line-clamp-2">
                    {parse(article.data.content)}

                </div>
            </Link>
        </div>
    )
}
export default Article