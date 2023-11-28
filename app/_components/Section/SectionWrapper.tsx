type Props = {}
const SectionWrapper = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="py-5 px-5 xl:px-0 max-w-6xl mx-auto pb-10">
            {children}
        </div>
    )
}
export default SectionWrapper