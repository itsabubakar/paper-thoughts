type Props = {}
const GetStarted = (props: Props) => {
    return (
        <div className="max-w-3xl mx-auto px-5 md:px-10 py-8">
            <h1 className="font-headers  text-2xl font-bold text-center pb-4">Get Started</h1>

            <p className="mb-4 font-body">
                Welcome to our community! We're thrilled that you're interested in contributing to our platform.
                If you're passionate about writing and eager to share your insights, ideas, or stories, we offer a couple of ways to get involved.
            </p>

            <h2 className="font-headers  text-xl font-bold text-center pb-4">Submit Your Post via Email</h2>

            <p className="mb-4 font-body">
                Have a post ready to go? Great! You can submit your content to us directly via email. Please send your post to
                <span className="font-bold"> <a href="mailto:submissions@paperthoughts.org" className="text-orange-500 hover:text-orange-800">submissions@paperthoughts.org</a> </span>
                with the subject line "Post Submission." Make sure to include the following:
            </p>

            <ul className="list-disc list-inside mb-4 font-body">
                <li>Your complete post in a document format or within the email body.</li>
                <li>A brief bio about yourself and any links to your social media profiles or personal blog.</li>
            </ul>

            <p className="mb-4 font-body">
                Our team will review your submission and get back to you as soon as possible. If your post aligns with our content standards and themes,
                we'll feature it on our website!
            </p>

            <h2 className="font-headers  text-xl font-bold  pb-4">Apply as a Writer</h2>

            <p className="mb-4 font-jost">
                If you're looking for a more consistent writing opportunity, why not apply to become one of our contributing writers? As a writer for our platform,
                you'll have the chance to reach a wider audience and be a part of our dynamic content team.
            </p>

            <p className="mb-4 font-jost">
                To apply, please send an email to
                <span className="font-bold"> <a href="mailto:info@paperthoughts.org" className="text-orange-600 hover:text-orange-800">info@paperthoughts.org</a> </span>
                with the subject line "Writer Application." Include the following in your application:
            </p>

            <ul className="list-disc list-inside mb-4 font-jost">
                <li>A cover letter explaining why you want to write for us and what topics you're passionate about.</li>
                <li>At least two writing samples that showcase your ability to engage and inform readers.</li>
            </ul>

            <p className="mb-4 font-jost">
                We're always on the lookout for talented writers who bring fresh perspectives to our website. If you're ready to make an impact with your words,
                we can't wait to hear from you!
            </p>

            <p className="mb-4 font-jost">
                Thank you for your interest in contributing to our community. We're looking forward to reading your submissions and potentially welcoming you
                to our team of writers.
            </p>

            <p className="text-center font-font">
                Let's create something amazing together!
            </p>

            <p className="text-center font-jost mt-4">
                <a href="mailto:info@paperthoughts.org" className="text-orange-600 hover:text-orange-800 font-bold">Contact Us</a> if you have any questions or need more information.
            </p>
        </div>
    )
}
export default GetStarted