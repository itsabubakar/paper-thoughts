type Props = {}
const SectionWrapper = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className=" max-w-6xl mx-auto pb-10">
            {children}
        </div>
    )
}
export default SectionWrapper