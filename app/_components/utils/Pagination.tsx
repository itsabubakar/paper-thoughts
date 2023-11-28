type Props = {}
const Pagination = (props: Props) => {
    return (
        <div className="pt-5">
            <ul className="flex  gap-1 w-fit">
                <li className="border-2 border-[#c7c7c7] w-6 flex justify-center">1</li>
                <li className="border-2 border-[#c7c7c7] w-6 flex justify-center">2</li>
                <li className="border-2 border-[#c7c7c7] w-6 flex justify-center">3</li>
                <li className="border-2 border-[#c7c7c7] w-6 flex justify-center">4</li>
                <li className="border-2 border-[#c7c7c7] w-6 flex justify-center">6</li>
            </ul>
        </div>
    )
}
export default Pagination