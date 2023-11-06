import SectionWrapper from "../components/Section/SectionWrapper"
import PoetsName from "../components/poetry/PoetsName"

type Props = {}
const page = (props: Props) => {
    return (
        <SectionWrapper>
            <h2 className=" uppercase font-bold font-headers bg-black text-white  py-2 px-2 ">poets</h2>

            <div className="pt-10 border-b-2 border-border-color">
                <PoetsName />
                <PoetsName />
                <PoetsName />
                <PoetsName />
                <PoetsName />
            </div>
        </SectionWrapper>
    )
}
export default page