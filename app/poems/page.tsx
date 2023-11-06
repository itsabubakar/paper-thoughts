import PoemLink from "../components/Poems/PoemLink"
import SectionWrapper from "../components/Section/SectionWrapper"
import Pagination from "../components/utils/Pagination"

type Props = {}
const page = (props: Props) => {
    return (
        <SectionWrapper>
            <h2 className=" uppercase font-bold font-headers bg-orange-500 text-white  py-2 px-2 ">recent  poems</h2>
            <div className="pt-14 grid sm:grid-cols-3 md:grid-cols-3 gap-5 md:gap-y-14">
                <PoemLink />
                <PoemLink />
                <PoemLink />
                <PoemLink />
                <PoemLink />
                <PoemLink />
            </div>
            <div>
                <Pagination />
            </div>
        </SectionWrapper>
    )
}
export default page