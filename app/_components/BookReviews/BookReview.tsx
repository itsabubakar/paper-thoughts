import Image from "next/image"
import Link from "next/link"
type Props = {}
const BookReview = (props: Props) => {
    return (
        <div className="border-y-border-color border-y sm:border-y-0  sm:border-x-border-color sm:border-x max-w-sm px-5 py-10 sm:py-0">
            <Link href={'/book-review/1'} className="flex flex-col items-center">
                <Image
                    src="/images/cover-img.jpg"
                    alt="Season of Crimson Blossoms Cover"
                    width={250}
                    height={400}
                    className=""
                />
                <p className="italic text-sm pt-2 font-headers">Cassava Republic Press</p>
            </Link>
            <Link className="hover:text-orange-500" href={'/book-review/1'}>
                <h3 className="uppercase pt-2 text-orange-500 font-semibold font-headers ">book review</h3>
                <p className="pt-1 font-bold text-2xl font-headers">Lorem ipsum dolor sit amet</p>
            </Link>

            <p className="pt-2 tracking-wider font-body">By Sadiq Bilyamin</p>
            <p className="pt-1 tracking-wider font-body">Reviewed by Also Sadiq Bilyamin</p>
        </div>
    )
}
export default BookReview