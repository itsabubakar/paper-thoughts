import Link from "next/link"

type Props = {}
const Author = (props: Props) => {
    return (
        <Link href={'/authors/1'} className="block hover:text-orange-500 border-t-2 border-border-color">
            <h3 className="py-6 text-2xl font-semibold font-headers">Sadiq Bilyamin</h3>
        </Link>
    )
}
export default Author