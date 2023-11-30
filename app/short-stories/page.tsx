import SectionWrapper from "../_components/Section/SectionWrapper"
import StoryLink from "../_components/ShortStories/StoryLink"
import Pagination from "../_components/utils/Pagination"

type Props = {}
const Page = (props: Props) => {
    return (
        <SectionWrapper>
            <h2 className=" uppercase font-bold font-headers bg-black text-white  py-2 px-2 ">RECENT  short stories</h2>
            <StoryLink />
            <StoryLink />
            <StoryLink />
            <StoryLink />
            <StoryLink />
            <div>
                <Pagination />
            </div>
        </SectionWrapper>
    )
}
export default Page