import Article from "../_components/Articles/Article"
import ArticleSection from "../_components/Articles/ArticleSection"
import SectionWrapper from "../_components/Section/SectionWrapper"
import Pagination from "../_components/utils/Pagination"

type Props = {}
const page = (props: Props) => {
    return (
        <main className="">
            <SectionWrapper>
                <h2 className=" uppercase font-bold font-headers bg-black text-white  py-2 px-2 ">RECENT articles</h2>
                <div className="pt-4">
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </div>


                <Pagination />
            </SectionWrapper>
        </main>
    )
}
export default page