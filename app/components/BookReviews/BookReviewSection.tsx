import Link from "next/link"
import BookReview from "./BookReview"

type Props = {}
const BookReviewSection = (props: Props) => {
    return (
        <div className="border-t-4 border-t-border-color pb-10">
            <h2 className="uppercase font-bold font-headers bg-orange-500 text-white py-2 px-2">
                Book Reviews
            </h2>
            <div className="grid gap-x-5 gap-y-16 gap sm:grid-cols-3 justify-center align-center pt-12">
                <BookReview />
                <BookReview />
                <BookReview />
            </div>
            <Link className="capitalize font-headers block mt-5 underline hover:text-orange-500 font-semibold" href={'/'}>See all book reviews</Link>
        </div>
    )
}
export default BookReviewSection