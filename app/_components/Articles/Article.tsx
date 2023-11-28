// Essay Prose Book review

import Link from "next/link"

type Props = {}
const Article = (props: Props) => {
    return (
        <div className="border-b border-[#c7c7c7] py-5">
            <Link href={'/articles/1'}>
                <p className="text-orange-500 font-semibold tracking-wider capitalize pb-1 font-headers">Essay</p>
                <h2 className="text-xl font-semibold pb-2 font-headers">Poetic Justice’s mission is to provide</h2>
                <p className="text-gray-800 font-body">By Sadiq Bilyamin <span className="text-orange-500">|</span> October 24, 2023</p>
                <p className="line-clamp-1 md:line-clamp-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, suscipit amet! Quis mollitia debitis inventore eos sunt, tenetur ut amet ea dolorum adipisci deleniti a voluptate quidem autem quas praesentium?</p>
            </Link>
        </div>
    )
}
export default Article