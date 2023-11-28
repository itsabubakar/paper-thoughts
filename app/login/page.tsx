import { AiFillApple } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

type Props = {}
const page = (props: Props) => {
    return <div className="flex min-h-screen bg-white">

        <div className="md:w-1/2 max-w-lg mx-auto shadow-none py-10">

            <div className="text-left p-0">

                <h1 className=" text-gray-700 text-3xl text-center font-medium font-headers">Login in to your account</h1>
            </div>
            <form action="#" className="font-body pt-5 ">
                <div className="">
                    <a href="#" className="transition duration-200 hover:text-black flex font-body items-center justify-center space-x-2 text-white my-2 py-2 bg-black hover:bg-gray-200 rounded">
                        <FcGoogle size={23} />
                        <span>Sign in with Google</span>
                    </a>
                    <a href="#" className="transition duration-200 hover:text-black flex font-body items-center justify-center space-x-2  my-2 py-2 bg-black text-white hover:bg-gray-200 rounded">
                        <AiFillApple size={23} />
                        <span>Sign in with Apple</span>
                    </a>

                </div>


                <div
                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p
                        className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                        OR
                    </p>
                </div>
                <div className="mt-5">

                    <label className="pb-2 inline-block">Email</label>
                    <input type="text" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email" />
                </div>

                <div className="mt-5">
                    <label className="pb-2 inline-block">Password</label>

                    <input type="password" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent" placeholder="Password" />
                </div>


                <div className="mt-5">
                    <input type="submit" value="Login" className="py-3 bg-orange-500 text-white w-full rounded hover:bg-black transition duration-200" />
                </div>
            </form>
            <a className="" href="signup" data-test="Link"><span className="block  p-5 text-center text-gray-700   ">Don&apos;t have an account?</span></a>
        </div>


    </div>

}
export default page