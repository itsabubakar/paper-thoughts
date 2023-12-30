import Link from "next/link"
import BookReview from "./BookReview"
import Loading from "../utils/Loading"

type Props = {
    bookReviews: any
}
const BookReviewSection = ({ bookReviews }: Props) => {

    return (
        <div className="border-t-4 border-t-border-color pb-10">
            <h2 className="uppercase font-bold font-headers bg-orange-500 text-white py-2 px-2">
                Book Reviews
            </h2>
            {
                bookReviews.length <= 0 ? <div className="h-40 flex items-center justify-center"><Loading /></div> : <div className="grid gap-x-5 gap-y-16 gap sm:grid-cols-3 justify-center align-center pt-12">
                    {bookReviews?.map((bookReview: any) => {
                        return <BookReview key={bookReview.id} bookReview={bookReview} />
                    })}
                </div>
            }
            <Link className="capitalize font-headers block mt-5 underline hover:text-orange-500 font-semibold" href={'/book-reviews'}>See all book reviews</Link>
        </div>
    )
}
export default BookReviewSection