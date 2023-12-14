import Link from "next/link"
import parse from 'html-react-parser';

type Props = {
    poem: {
        id: string
        data: {
            title: string
            content: string
            authorName: string
            createdAt: {
                seconds: number
            }
        }
    }
}
const PoemLink = ({ poem }: Props) => {
    const { title, content, authorName, createdAt } = poem.data
    return (
        <div className="border-y-border-color border-y sm:border-y-0  sm:border-x-border-color sm:border-x max-w-sm px-5 py-10 sm:py-0 flex justify-center">
            <div className="py-2">
                <h3 className="uppercase text-orange-500 font-semibold font-headers text-center">poem</h3>
                <h2 className="text-xl font-bold text-center font-headers pb-1 capitalize">{title}</h2>
                <p className="text-center capitalize text-gray-700 font-body">By {authorName}</p>
                <div className="pt-2 prose prose-p:text-lg font-body prose-p:pb-3 line-clamp-6 ">

                    {parse(content)}
                </div>
                <Link className="capitalize font-headers block mt-5 underline hover:text-orange-500 font-semibold text-center" href={`/poems/${poem.id}`}>read more</Link>
            </div>
        </div>
    )
}
export default PoemLink