import Share from "@/app/_components/utils/Share";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

type Props = {}
const page = ({
    params,
}: {
    params: { event: string };
}) => {
    return (
        <div className="max-w-3xl mx-auto">
            <section className="pt-10 pb-8 text-center sm:text-left border-b border-border-color">
                {/* bread crumbs */}
                <div className="pb-3 hidden sm:block">
                    <Link className="hover:text-orange-500 font-headers italic font-sm flex items-center" href={'/'}><MdOutlineArrowBackIosNew size={14} /> Back to Previous</Link>
                </div>



                {/* header */}
                <h1 className="text-4xl font-bold pb-2 font-headers capitalize">Short story writing compoetition</h1>

                {/* author */}
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* author */}
                    <p className="uppercase font-body tracking-wider">By <Link className="underline transition-all duration-200 hover:text-orange-500 hover:no-underline" href={'/'}>Sadiq Bilyamin</Link></p>
                    {/* share */}


                </div>

            </section>

            {/* Poem */}
            <section className="py-8">
                <p className="pb-6">Lorem, ipsum dolor sit amet consectetur eligendi porro voluptate! Harum neque veritatis quia!</p>
                <p className="pb-6">Lorem, ipsum dolor sit amet consectetur eligendi porro voluptate! Harum neque veritatis quia!</p>
                <p className="pb-6">Lorem, endi porro voluptate! Harum neque veritatis quia!ipsum dolor sit amet consectetur eligendi porro voluptate! Harum neque veritatis quia!</p>
                <p className="pb-6">Lorem, ipsum dolor sit amet consectetur eligendi porro voluptate! Harum neque veritatis quia!endi porro voluptate! Harum neque veritatis quia!</p>
                <p className="pb-6">Lorem, ipsum dolor sit amet consectetur lore loeemmm eligendi porro voluptate! Harum neque veritatis quia!</p>
            </section>

            <div className="pb-8">
                <Share />
            </div>

        </div>
    )
}
export default page