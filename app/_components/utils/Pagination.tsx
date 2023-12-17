import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageClick: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageClick }) => {
    return (
        <div className="flex flex-col items-center py-5 space-y-2">
            <div className="flex items-center space-x-1">
                <button
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => onPageClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <MdOutlineKeyboardArrowLeft size={24} />
                </button>

                <span className="p-2 border rounded bg-orange-500 text-white">
                    {currentPage}
                </span>

                <button
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => onPageClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <MdOutlineKeyboardArrowRight size={24} />
                </button>
            </div>

            <p className='font-headers text-gray-700 text-sm'>Showing page {currentPage} out of {totalPages}</p>
        </div>
    );
};

export default Pagination;