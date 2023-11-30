import BookReview from "../_components/BookReviews/BookReview"
import SectionWrapper from "../_components/Section/SectionWrapper"
import Pagination from "../_components/utils/Pagination"

type Props = {}
const Page = (props: Props) => {
    return (
        <SectionWrapper>
            <h2 className="uppercase font-bold font-headers bg-orange-500 text-white py-2 px-2">
                Book Reviews
            </h2>
            <div className="grid gap-x-5 gap-y-16 gap sm:grid-cols-3 justify-center align-center pt-16">
                <BookReview />
                <BookReview />
                <BookReview />
                <BookReview />
                <BookReview />
                <BookReview />
            </div>

            <div className="pt-8">
                <Pagination />
            </div>
        </SectionWrapper>
    )
}
export default Page