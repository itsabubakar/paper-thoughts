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
                <h3 className="uppercase text-xl font-bold font-headers border-b border-border-color  py-2 px-2">research and articles</h3>
                <p className="font-headers font-semibold py-2 text-lg">Jamilat, <span className="font-body font-normal">Head</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Sadiq, <span className="font-body font-normal">Asst. Head</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Aisha</p>
                <p className="font-headers font-semibold py-2 text-lg">Binshi</p>
                <p className="font-headers font-semibold py-2 text-lg">Tanimu</p>
                <p className="font-headers font-semibold py-2 text-lg">Halilu</p>
                <p className="font-headers font-semibold py-2 text-lg">Dominik</p>
                <p className="font-headers font-semibold py-2 text-lg">Nafeesa</p>
                <p className="font-headers font-semibold py-2 text-lg">Emmanuella</p>

            </section>

            <section className=" pb-5">
                <h3 className="uppercase text-xl font-bold font-headers border-b border-border-color  py-2 px-2">media and design</h3>
                <p className="font-headers font-semibold py-2 text-lg">Blue, <span className="font-body font-normal">Head</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Tobi, <span className="font-body font-normal">Asst. Head</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Mariam</p>
                <p className="font-headers font-semibold py-2 text-lg">Grace</p>
                <p className="font-headers font-semibold py-2 text-lg">Khaleema</p>
            </section>

            <section className=" pb-5">
                <h3 className="uppercase text-xl font-bold font-headers border-b border-border-color  py-2 px-2">PR</h3>
                <p className="font-headers font-semibold py-2 text-lg">Gabriel, <span className="font-body font-normal">Head</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Khaleema, <span className="font-body font-normal">Asst. Head</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Warri</p>
                <p className="font-headers font-semibold py-2 text-lg">Onye</p>
                <p className="font-headers font-semibold py-2 text-lg">Kemi</p>
                <p className="font-headers font-semibold py-2 text-lg">Felicity</p>
            </section>

        </SectionWrapper>
    )
}
export default Page