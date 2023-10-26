type Props = {}
const StoryLink = (props: Props) => {
    return (
        <div className="border-b border-[#c7c7c7] py-5">
            <p className="text-orange-500 font-semibold tracking-wider capitalize pb-1 font-headers">Short Story</p>
            <h2 className="text-xl font-semibold pb-2 font-headers">Poetic Justice’s mission is to provide</h2>
            <p className="text-gray-800 font-body mb-2 line-clamp-5 md:line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non veritatis quod cupiditate laboriosam? Eaque, recusandae. Iste a saepe delectus sapiente perspiciatis dolore voluptatum nam quidem nemo, ullam sequi obcaecati ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tempora commodi neque quibusdam corporis quisquam quam nam doloremque quod animi distinctio illo ipsa doloribus, eos ab quae unde aperiam eveniet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum neque eius earum excepturi sit, modi optio perspiciatis porro, quia ipsum, doloremque temporibus eos officiis quo commodi accusantium. Itaque, vitae ut?</p>
            <p className="text-gray-700 font-body">By Sadiq Bilyamin <span className="text-orange-500">|</span> October 24, 2023</p>
        </div>
    )
}
export default StoryLink