import Article from "../components/Articles/Article"
import ArticleSection from "../components/Articles/ArticleSection"
import SectionWrapper from "../components/Section/SectionWrapper"
import Pagination from "../components/utils/Pagination"

type Props = {}
const page = (props: Props) => {
    return (
        <main className="px-5 xl:px-0 pt-2 max-w-6xl mx-auto">
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