import Link from "next/link"
import parse from "html-react-parser";
import DateFormat from "../utils/DateFormat";
import Author from "../Authors/Author";
import PoetName from "../Poetry/PoetName";

// type Article = {
//     article: {
//         id: string
//         data: {
//             title: string
//             authorName: string
//             tag: string
//             content: string
//             uid: string
//             createdAt: {
//                 seconds: number
//                 nanoseconds: number
//             }
//         }
//     }
// }
const SearchLink = ({ search }: any) => {
    const { author, poet } = search
    return (
        <div className="border-b border-[#c7c7c7] py-5">
            {
                author ? <div>
                    <h2 className=" text-sm  text-orange-500 font-semibold tracking-wider capitalize  font-headers">Authors</h2>
                    <Author uid={search?.uid} name={search?.authorName} />
                </div> : poet ? <div>
                    <h2 className="text-sm  text-orange-500 font-semibold tracking-wider capitalize  font-headers">Poet</h2>
                    <PoetName uid={search?.uid} name={search?.authorName} />
                </div> : <Link href={`/articles/${search.id}`}>

                    <p className="text-orange-500 font-semibold tracking-wider capitalize pb-1 font-headers tetxt-sm">{search?.tag}</p>
                    <h2 className="text-xl font-semibold pb-2 font-headers capitalize">{search?.title} </h2>
                    <div className="flex">

                        <p className="text-gray-800 font-body">By {search?.authorName} <span className="text-orange-500">|</span> <DateFormat timestamp={search?.createdAt?.seconds} /></p>
                    </div>
                    <div className="line-clamp-1 md:line-clamp-2">
                        {parse(search?.content)}

                    </div>
                </Link>
            }

        </div>
    )
}
export default SearchLink