import Share from "@/app/components/utils/Share";
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

                {/* tag */}
                <h2 className="text-orange-500 font-semibold tracking-widest capitalize font-headers text-xl">Contest</h2>

                {/* header */}
                <h1 className="text-4xl font-bold pb-2 font-headers capitalize">Short story writing compoetition</h1>

                {/* share */}
                <div className="pt-3">

                    <Share />

                </div>
            </section>

            {/* Details */}
            <section className="py-6">
                <h2 className="font-headers border-y-4 text-2xl font-bold">Details</h2>
                <div className="text-lg pt-4 font-body">
                    <p className="pb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aperiam obcaecati harum magni consequatur in, illum nesciunt eligendi aspernatur voluptate voluptas cumque id odit labore fugit deleniti eum ratione! Facere.</p>
                    <p className="pb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aperiam obcaecati harum magni consequatur in, illum nesciunt eligendi aspernatur voluptate voluptas cumque id odit labore fugit deleniti eum ratione! Facere.</p>
                    <p className="pb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aperiam obcaecati harum magni consequatur in, illum nesciunt eligendi aspernatur voluptate voluptas cumque id odit labore fugit deleniti eum ratione! Facere.</p>
                </div>
            </section>

            {/* Date */}
            <section className="py-6">
                <h2 className="font-headers border-y-4 text-2xl font-bold">Date</h2>
                <div className="text-lg pt-4 font-body">
                    <p className="pb-6">Friday, November 10, 2023, 10:00 AM CT–12:00 PM CT</p>
                </div>
            </section>
            {/* Location */}
            <section className="py-6">
                <h2 className="font-headers border-y-4 text-2xl font-bold">Location</h2>
                <div className="text-lg pt-4 font-body">
                    <p className="pb-6">Online submissions</p>
                </div>
            </section>

        </div>
    )
}
export default page