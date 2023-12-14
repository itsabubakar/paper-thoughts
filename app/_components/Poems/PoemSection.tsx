import Link from "next/link"
import PoemLink from "./PoemLink"

type Props = {
    poems: any
}


const PoemSection = ({ poems }: Props) => {
    return (
        <section className="pb-10 border-t-4 border-t-border-color">
            <h2 className=" uppercase font-bold font-headers bg-orange-500 text-white  py-2 px-2 ">recent  poems</h2>
            <div className="pt-14 grid sm:grid-cols-3 md:grid-cols-3 gap-5 md:gap-y-14 ">
                {
                    poems.map((poem: any) => {
                        return <PoemLink key={poem.id} poem={poem} />
                    })
                }
            </div>
            <Link className="capitalize font-headers block mt-5 underline hover:text-orange-500 font-semibold" href={'/'}>See all poems</Link>
        </section>
    )
}
export default PoemSection