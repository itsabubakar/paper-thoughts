import Link from "next/link"
import BookReview from "./BookReview"

type Props = {}
const BookReviewSection = (props: Props) => {
    return (
        <div className="border-t-8 border-t-border-color">
            <h2 className="uppercase font-bold font-headers   pt-4 text-orange-500 pb-5">
                Book Reviews
            </h2>
            <div className="grid gap-5 grid-cols-3 justify-center">
                <BookReview />
                <BookReview />
                <BookReview />
            </div>
            <Link className="capitalize font-headers block mt-5 underline hover:text-blue-500 font-semibold" href={'/'}>See all book reviews</Link>
        </div>
    )
}
export default BookReviewSection