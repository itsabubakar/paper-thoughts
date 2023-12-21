import Link from "next/link"

type Props = {
    name: string;
    uid: string;
}
const PoetName = ({ name, uid }: Props) => {
    return (
        <Link href={`/account/${uid}`} className="block hover:text-orange-500 ">

            <h3 className="py-6 text-2xl font-semibold font-headers capitalize">{name}</h3>
        </Link>
    )
}
export default PoetName