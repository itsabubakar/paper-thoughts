import SectionWrapper from "../_components/Section/SectionWrapper"
import Event from "../_components/Events/Event"
import Pagination from "../_components/utils/Pagination"

type Props = {}
const Page = (props: Props) => {
    return (
        <SectionWrapper>
            <h2 className=" uppercase font-bold font-headers bg-black text-white  py-2 px-2 ">Events</h2>
            <div className="pt-4">
                <Event
                    type="Contest"
                />
                <Event
                    type="Conference"
                />
                <Event
                    type="Workshop"
                />
                <Event
                    type="Open mic"
                />
            </div>


            {/* <Pagination /> */}
        </SectionWrapper>
    )
}
export default Page