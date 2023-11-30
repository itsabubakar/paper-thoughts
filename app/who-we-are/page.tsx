import SectionWrapper from "../_components/Section/SectionWrapper"

type Props = {}
const Page = (props: Props) => {
    return (
        <SectionWrapper>
            <h2 className="uppercase font-bold font-headers bg-black text-white  py-2 px-2">People</h2>
            <section className="text-lg pb-10">
                <p className="pt-2 font-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quisquam iure accusamus consectetur distinctio, officia illum provident ex veniam dolor rerum porro corrupti ad tempore necessitatibus? Aspernatur reiciendis doloremque saepe!</p>
                <p className="pt-2 font-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur quisquam iure accusamus consectetur distinctio, officia illum provident ex veniam dolor rerum porro corrupti ad tempore necessitatibus? Aspernatur reiciendis doloremque saepe!</p>
            </section>

            <section className=" pb-5">
                <h3 className="uppercase text-xl font-bold font-headers border-b border-border-color  py-2 px-2">Patron</h3>
                <p className="font-headers font-semibold py-2 text-lg">Wole Soyinka, <span className="font-body font-normal">Patron</span></p>
            </section>

            <section className=" pb-5">
                <h3 className="uppercase text-xl font-bold font-headers border-b border-border-color  py-2 px-2">Office of the president</h3>
                <p className="font-headers font-semibold py-2 text-lg">Morgan Lastname, <span className="font-body font-normal">President</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Morgan Lastname, <span className="font-body font-normal">President</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Morgan Lastname, <span className="font-body font-normal">President</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Morgan Lastname, <span className="font-body font-normal">President</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Morgan Lastname, <span className="font-body font-normal">President</span></p>
            </section>

            <section className=" pb-5">
                <h3 className="uppercase text-xl font-bold font-headers border-b border-border-color  py-2 px-2">Finance and administration</h3>
                <p className="font-headers font-semibold py-2 text-lg">Gabriel oguche, <span className="font-body font-normal">Accountant</span></p>
            </section>
        </SectionWrapper>
    )
}
export default Page