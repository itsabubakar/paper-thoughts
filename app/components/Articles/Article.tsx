// Essay Prose Book review

type Props = {}
const Article = (props: Props) => {
    return (
        <div className="border-b border-[#c7c7c7] py-5">
            <p className="text-orange-500 font-semibold tracking-wider capitalize pb-1 font-headers">Essay</p>
            <h2 className="text-xl font-semibold pb-2 font-headers">Poetic Justice’s mission is to provide</h2>
            <p className="text-gray-700 font-body">By Sadiq Bilyamin <span className="text-orange-500">|</span> October 24, 2023</p>
        </div>
    )
}
export default Article