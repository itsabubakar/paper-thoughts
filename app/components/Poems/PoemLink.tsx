import Link from "next/link"

type Props = {}
const PoemLink = (props: Props) => {
    return (
        <div className="border-y-border-color border-y sm:border-y-0  sm:border-x-border-color sm:border-x max-w-sm px-5 py-10 sm:py-0 flex justify-center">
            <div className="py-2">
                <h3 className="uppercase text-orange-500 font-semibold font-headers text-center">poem</h3>
                <h2 className="text-xl font-bold text-center font-headers pb-1">Lorem lorem</h2>
                <p className="text-center capitalize text-gray-700 font-body">By Sadiq Bilyamin</p>
                <div className="pt-2">
                    <p className="text-lg font-body pb-3 ">lorem ipsum lorem lore lorem</p>
                    <p className="text-lg font-body  pb-3">lorem ipsum lorem lore lorem velit magnam repellat necessitatibus deserunt omnis cum. Sunt perspiciatis hic vitae assumenda possimus officiis, nemo dignissimos fugit et?</p>
                    <p className="text-lg font-body  pb-3">lorem ipsum lorem lore lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro odio, error facere </p>
                    <Link className="capitalize font-headers block mt-5 underline hover:text-orange-500 font-semibold text-center" href={'/'}>read more</Link>
                </div>
            </div>
        </div>
    )
}
export default PoemLink