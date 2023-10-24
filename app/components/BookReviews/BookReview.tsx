import Image from "next/image"
type Props = {}
const BookReview = (props: Props) => {
    return (
        <div className="border-x-border-color border-x grid justify-center max-w-sm">
            <div>
                <Image
                    src="/images/cover-img.jpg"
                    alt="Season of Crimson Blossoms Cover"
                    width={250}
                    height={400}
                    className=""
                />
                <p className="italic text-sm pt-2">Cassava Republic Press</p>
            </div>
            <h3 className="uppercase pt-2 text-orange-500 font-semibold">book review</h3>
            <p className="pt-1 font-semibold text-2xl">Lorem ipsum dolor sit amet</p>
            <p className="pt-2 tracking-wider">By Sadiq Bilyamin</p>
            <p className="pt-1 tracking-wider">Reviewed by Also Sadiq Bilyamin</p>
        </div>
    )
}
export default BookReview