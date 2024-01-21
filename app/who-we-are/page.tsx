import SectionWrapper from "../_components/Section/SectionWrapper"

type Props = {}
const Page = (props: Props) => {
    return (
        <SectionWrapper>
            <h2 className="uppercase font-bold font-headers bg-black text-white  py-2 px-2">People</h2>
            <section className="text-lg pb-10">
                <p className="pt-5 font-body"> Welcome to Paper Thoughts a vibrant community of literature enthusiasts with a
                    passion for the spoken word and the power of the written language. Our club
                    is a sanctuary for poets, storytellers, and anyone who finds solace in the
                    beauty of prose.</p>
                <p className="pt-2 font-body"> At the heart of our club is the celebration of Nigerian literature. We
                    convene monthly to dive into the rich tapestry of Nigerian storytelling,
                    exploring works that range from the classic to the contemporary. Our sessions
                    are not just readings; they are immersive experiences that capture the essence
                    of each book and its cultural significance.</p>
                <p className="pt-2 font-body"> In addition to our monthly book readings, we host spoken word poetry events
                    where emotions and ideas take flight through the rhythm and rhyme of language.
                    Our members come together to perform, listen, and appreciate poetry in all its
                    forms.</p>
                <p className="pt-2 font-body"> Book reviews are also a cornerstone of our club&apos;s activities. We encourage
                    critical thinking and lively discourse, as we dissect themes, characters, and
                    narratives, enriching our understanding and appreciation of Nigerian literature.</p>

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
                <p className="font-headers font-semibold py-2 text-lg">Oluwatobilola Gbolu, <span className="font-body font-normal">Asst. Head</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Omotosho Mariam Opeyemi</p>
                <p className="font-headers font-semibold py-2 text-lg">Grace Temidayo</p>
                <p className="font-headers font-semibold py-2 text-lg">Kalimah Ibrahim</p>
            </section>

            <section className=" pb-5">
                <h3 className="uppercase text-xl font-bold font-headers border-b border-border-color  py-2 px-2">PR</h3>
                <p className="font-headers font-semibold py-2 text-lg">Gabriel Oguche, <span className="font-body font-normal">Head</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Kalimah Ibrahim, <span className="font-body font-normal">Asst. Head</span></p>
                <p className="font-headers font-semibold py-2 text-lg">Olupitan Kemi</p>
                <p className="font-headers font-semibold py-2 text-lg">Yusuf Abdulrahman Ajoge</p>
                <p className="font-headers font-semibold py-2 text-lg">Ugwu Onyinyechukwu</p>
                <p className="font-headers font-semibold py-2 text-lg">Warri</p>
                <p className="font-headers font-semibold py-2 text-lg">Felicity</p>
            </section>

        </SectionWrapper>
    )
}
export default Page