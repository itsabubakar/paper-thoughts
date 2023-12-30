import Link from "next/link"
import PoemLink from "./PoemLink"
import Loading from "../utils/Loading"

type Props = {
    poems: any
}


const PoemSection = ({ poems }: Props) => {
    return (
        <section className="pb-10 border-t-4 border-t-border-color">
            <h2 className=" uppercase font-bold font-headers bg-orange-500 text-white  py-2 px-2 ">recent  poems</h2>
            {
                poems?.length <= 0 ? <div className="h-40 flex items-center justify-center"><Loading /></div> : <div className="pt-14 grid sm:grid-cols-3 md:grid-cols-3 gap-5 md:gap-y-14 ">
                    {poems?.map((poem: any, index: number) => {
                        return <PoemLink key={poem.id} poem={poem} />
                    })}
                </div>
            }
            <Link className="capitalize font-headers block mt-5 underline hover:text-orange-500 font-semibold" href={'/poems'}>See all poems</Link>
        </section>
    )
}
export default PoemSection