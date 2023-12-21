'use client'

import Link from "next/link";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import Share from "@/app/_components/utils/Share";
import RelatedArticle from "@/app/_components/Articles/RelatedArticle";


const Page = ({
    params,
}: {
    params: { author: string };
}) => {

    const fullUrl = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <div className="max-w-3xl mx-auto">
            <section className="pt-10 pb-8 text-center sm:text-left border-b border-border-color">
                {/* bread crumbs */}
                <div className="pb-3 hidden sm:block">
                    <Link className="hover:text-orange-500 font-headers italic font-sm flex items-center" href={'/'}><MdOutlineArrowBackIosNew size={14} /> Back to Previous</Link>
                </div>



                {/* author */}
                <h1 className="text-4xl font-bold pb-2 font-headers">Sadiq Bilyamin</h1>

                <div className="pt-2">
                    <Share url={fullUrl} />
                </div>
            </section>

            {/* Poet info */}
            <section className="font-body py-8">
                <p className="pb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quia numquam delectus minima. Soluta magni numquam ut facilis. Quibusdam placeat doloribus sint qui laudantium est fugit provident veniam tenetur. Amet!</p>
                <p className="pb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quia numquam delectus minima. Soluta magni numquam ut facilis. Quibusdam placeat doloribus sint qui laudantium est fugit provident veniam tenetur. Amet!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quia numquam delectus minima. Soluta magni numquam ut facilis. Quibusdam placeat doloribus sint qui laudantium est fugit provident veniam tenetur. Amet!
                </p>
            </section>

            <section className="pb-6">
                <h3 className=" py-2 font-semibold capitalize font-headers border-t">Sadiq Bilyamin&apos;s socials</h3>
                <Share url={fullUrl} />
            </section>

            <section className="pb-6">
                <h3 className="uppercase text-xl font-bold font-headers border-b border-border-color py-2 px-2">Works</h3>
                <div className="flex gap-2 justify-between py-8 flex-col sm:flex-row">
                    <RelatedArticle />
                    <RelatedArticle />
                    <RelatedArticle />
                </div>
                <div className="flex justify-center">
                    <button className="px-2 py-1 text-white bg-orange-500 font-semibold hover:opacity-80 transition duration-200">View all</button>
                </div>
            </section>
        </div>
    )
}
export default Page