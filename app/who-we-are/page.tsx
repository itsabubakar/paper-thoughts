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
                <p className="font-headers font-semibold py-2 text-lg">Dr. Alim Sabur, <span className="font-body font-normal">Patron</span></p>
            </section>

            <section className=" pb-5">
                <h3 className="uppercase text-xl font-bold font-headers border-b border-border-color  py-2 px-2">research and articles</h3>
                <p className="font-headers font-semibold py-2 text-lg">Jamilat Anavami Adagiri, <span className="font-body font-normal">Head</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Sadiq Bilyamin, <span className="font-body font-normal">Asst. Head</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Aisha Safiyanu</p>
                <p className="font-headers font-semibold py-2 text-lg">Binshi Musa-Bentley</p>
                <p className="font-headers font-semibold py-2 text-lg">Tanimu</p>
                <p className="font-headers font-semibold py-2 text-lg">Halilu</p>
                <p className="font-headers font-semibold py-2 text-lg">Kehinde Dominik</p>
                <p className="font-headers font-semibold py-2 text-lg">Nafisa Isah</p>
                <p className="font-headers font-semibold py-2 text-lg">Emmanuella</p>
                <p className="font-headers font-semibold py-2 text-lg">Aigbe Ehiosun Itohan Michelle</p>

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
                <p className="font-headers font-semibold py-2 text-lg">Gabriel Oguche, <span className="font-body font-normal">Head</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Kalimah Ibrahim, <span className="font-body font-normal">Asst. Head</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Warri</p>
                <p className="font-headers font-semibold py-2 text-lg">Onye</p>
                <p className="font-headers font-semibold py-2 text-lg">Kemi</p>
                <p className="font-headers font-semibold py-2 text-lg">Felicity</p>
            </section>

        </SectionWrapper>
    )
}
export default Page