import Link from "next/link"
import DateFormat from "../utils/DateFormat"
import parse from "html-react-parser";

type Props = {
    shortStory: {
        id: string
        data: {
            title: string
            tag: string
            genre: string
            content: string
            uid: string
            authorName: string
            createdAt: {
                seconds: number
                nanoseconds: number
            }
        }
    }
}
const StoryLink = ({ shortStory }: Props) => {
    const { title, genre, content, authorName, createdAt } = shortStory.data
    return (
        <div className="block border-b border-[#c7c7c7] py-5">
            <p className="text-orange-500 font-semibold tracking-wider capitalize pb-1 font-headers">Short Story: {genre}</p>
            <Link href={`/short-stories/${shortStory.id}`} className="text-xl font-semibold pb-2 font-headers capitalize">{title}</Link>
            <div className="text-gray-800 font-body mb-2 line-clamp-5 md:line-clamp-3">
                {parse(content)}
            </div>
            <p className="text-gray-700 font-body">By {authorName} <span className="text-orange-500">|</span> <DateFormat timestamp={createdAt.seconds} /></p>
        </div>
    )
}
export default StoryLink