import Link from "next/link"

type Props = {}
const RelatedArticle = (props: Props) => {
    return (
        <div className="border-t py-2 border-border-color pl-3 sm:border-l sm:border-t-0">
            <h3 className="text-orange-500 font-semibold tracking-wider capitalize pb-1 font-headers">Essay</h3>
            <h2 className="text-xl font-semibold pb-2 font-headers">Sadiq Bilyamin</h2>
            <p className="text-gray-800 font-body line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, facilis nulla cumque excepturi earum minima neque vero tempore et voluptatem laboriosam molestiae eos nisi in nobis quaerat eligendi veniam a.</p>
            <Link className="underline transition-all duration-200 hover:text-orange-500 hover:no-underline" href={'/'}>Read more</Link>
        </div>
    )
}
export default RelatedArticle