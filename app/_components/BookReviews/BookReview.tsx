import Image from "next/image"
import Link from "next/link"
import parse from "html-react-parser";

type Props = {
    bookReview: {
        id: string
        data: {
            title: string
            authorName: string
            imgUrl: string
            content: string
            uid: string
            createdAt: {
                seconds: number
                nanoseconds: number
            }
        }
    }
}
const BookReview = ({ bookReview }: Props) => {
    // console.log(bookReview);

    return (
        <div className="border-y-border-color border-y sm:border-y-0  sm:border-x-border-color sm:border-x max-w-sm px-5 py-10 sm:py-0">
            <Link href={`/book-reviews/${bookReview.id}`} className="flex flex-col items-center">
                <Image
                    src={bookReview.data?.imgUrl}
                    alt={bookReview.data?.title}
                    width={250}
                    height={400}
                    className=""
                    unoptimized
                />
                {/* <p className="italic text-sm pt-2 font-headers">Cassava Republic Press</p> */}
            </Link>
            <Link className="hover:text-orange-500" href={`/book-reviews/${bookReview.id}`}>
                <h3 className="uppercase pt-2 text-orange-500 font-semibold font-headers ">book review</h3>
                <h2 className="pt-1 font-bold text-2xl font-headers capitalize">{bookReview.data?.title}</h2>
            </Link>

            <p className="pt-2 tracking-wider font-body">By {bookReview.data?.authorName}</p>
            <div className="line-clamp-2 md:line-clamp-3">
                {parse(bookReview.data.content)}

            </div>
        </div>
    )
}
export default BookReview