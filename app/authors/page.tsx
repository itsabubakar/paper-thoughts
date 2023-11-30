import Author from "../_components/Authors/Author"
import SectionWrapper from "../_components/Section/SectionWrapper"
import Pagination from "../_components/utils/Pagination"

type Props = {}
const Page = (props: Props) => {
    return (
        <SectionWrapper>
            <h2 className=" uppercase font-bold font-headers bg-black text-white  py-2 px-2 ">authors</h2>

            <div className="pt-10 border-b-2 border-border-color">
                <Author />
                <Author />
                <Author />
                <Author />
                <Author />
            </div>
            <div className="pt-5">
                <Pagination />
            </div>
        </SectionWrapper>
    )
}
export default Page