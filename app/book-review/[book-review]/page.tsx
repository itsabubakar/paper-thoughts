'use client'

import RelatedArticle from "@/app/_components/Articles/RelatedArticle";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import Share from "@/app/_components/utils/Share";
import Image from "next/image";

const page = ({
    params,
}: {
    params: { book: string };
}) => {


    return (
        <div className="max-w-5xl mx-auto">
            <section className="pt-10 pb-8 text-center sm:text-left border-b border-border-color">
                {/* bread crumbs */}
                <div className="pb-3 hidden sm:block">
                    <Link className="hover:text-orange-500 font-headers italic font-sm flex items-center" href={'/'}><MdOutlineArrowBackIosNew size={14} /> Back to Previous</Link>
                </div>


                {/* header */}
                <h1 className="text-4xl font-bold pb-2 font-headers capitalize">Seasons of crimson blossom</h1>

                <div className="flex flex-col sm:flex-row justify-between items-center">
                    {/* author */}
                    <p className="uppercase font-body tracking-wider">reviewd By <Link className="underline transition-all duration-200 hover:text-orange-500 hover:no-underline" href={'/'}>Sadiq Bilyamin</Link></p>
                    {/* share */}
                    <div className=" pt-3 sm:pt-0">
                        <Share />

                    </div>

                </div>
            </section>

            {/* content */}
            <section className="flex flex-row-reverse font-body pt-8 pb-4 text-xl text-gray-800 border-b border-border-color gap-x-16">
                <div className="w-1/4 items-end ">
                    <Image
                        src="/images/cover-img.jpg"
                        alt="Season of Crimson Blossoms Cover"
                        width={200}
                        height={400}
                        className="w-full"
                    />
                </div>
                <div className="w-2/3">

                    <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam ipsam hic fuga aspernatur illum mollitia in? Possimus veniam accusantium cum similique et. Tempore eos pariatur, quam dolor ut nesciunt!</p>
                    <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam ipsam hic fuga aspernatur illum mollitia in? Possimus veniam accusantium cum similique et. Tempore eos pariatur, quam dolor ut nesciunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti, error dicta pariatur non doloribus ducimus dolore consectetur a voluptates commodi minima! Tenetur non cumque modi officiis omnis nobis culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis quibusdam incidunt reiciendis nulla, consequatur pariatur in repellendus aspernatur quod cupiditate molestias velit aut eos ab tempora numquam explicabo praesentium.</p>
                    <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam ipsam hic fuga aspernatur illum mollitia in? Possimus veniam accusantium cum similique et. Tempore eos pariatur, quam dolor ut nesciunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti, error dicta pariatur non doloribus ducimus dolore consectetur a voluptates commodi minima! Tenetur non cumque modi officiis omnis nobis culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis quibusdam incidunt reiciendis nulla, consequatur pariatur in repellendus aspernatur quod cupiditate molestias velit aut eos ab tempora numquam explicabo praesentium.</p>

                </div>


            </section>

            {/* related articles */}

            <section>
                <h3 className="uppercase text-xl font-bold font-headers border-b border-border-color py-2 px-2">Related Articles</h3>
                <div className="flex gap-2 justify-between py-8 flex-col sm:flex-row">
                    <RelatedArticle />
                    <RelatedArticle />
                    <RelatedArticle />
                </div>

            </section>


        </div>
    )
}
export default page