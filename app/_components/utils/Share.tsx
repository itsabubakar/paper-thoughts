import { FaXTwitter } from 'react-icons/fa6';
import { AiOutlineMail, AiOutlinePrinter } from 'react-icons/ai';



const SocialLinks = ({ url }: any) => {
    console.log(url);

    const shareUrl = encodeURIComponent(url); // Replace with the URL you want to share
    const shareText = encodeURIComponent('Check this out!'); // Replace with the text you want to share

    const twitterHref = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;
    const emailHref = `mailto:?subject=${shareText}&body=${shareUrl}`;
    const printHref = `javascript:window.print();`;
    return (
        <div className="flex pt-3 sm:pt-0">
            <a className="border p-2 border-gray-200 hover:text-orange-500" href={twitterHref} target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={22} />
            </a>
            <a className="border p-2 border-gray-200 hover:text-orange-500" href={emailHref}>
                <AiOutlineMail size={22} />
            </a>
            <a className="border p-2 border-gray-200 hover:text-orange-500" href={printHref}>
                <AiOutlinePrinter size={22} />
            </a>
        </div>
    );
}


export default SocialLinks;