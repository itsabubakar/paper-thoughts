import Link from "next/link"
import Article from "../Articles/Article"
import StoryLink from "./StoryLink"

type Props = {
    shortStories: any
}
const ShortStorySection = ({ shortStories }: Props) => {
    return (
        <div className="pb-10">
            <h2 className=" uppercase font-bold font-headers bg-black text-white  py-2 px-2 ">RECENT  short stories</h2>
            {
                shortStories?.map((shortStory: any) => {
                    return <StoryLink key={shortStory.id} shortStory={shortStory} />
                })
            }
            <Link className="capitalize font-headers block mt-5 underline hover:text-orange-500 font-semibold" href={'/short-stories'}>See all short stories</Link>
        </div>
    )
}
export default ShortStorySection