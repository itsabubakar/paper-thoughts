"use client"
import Link from "next/link"
import { useContext, useEffect } from "react"
import { AiFillApple } from "react-icons/ai"
import { FcGoogle } from 'react-icons/fc'
import { AppContext } from "../Context"
import { useRouter } from 'next/navigation'

import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/firebase"

type Props = {}
const Page = (props: Props) => {
    const router = useRouter();
    const { googleSignIn, user } = useContext(AppContext)


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
            if (currentUser) {
                router.push('/')
            }

        })
        return () => unsubscribe()
    }, [user])
    const handleSignIn = async () => {
        try {
            await googleSignIn()

            console.log('ran');

        } catch (error) {
            console.log(error);

        }
    }
    return <div className="flex min-h-screen bg-white">

        <div className="md:w-1/2 max-w-lg mx-auto shadow-none py-10 ">


            <h1 className=" text-gray-700 text-3xl text-center font-medium font-headers pb-4">Create an account to start writing</h1>
            <div className="">
                <button onClick={handleSignIn} className="transition duration-200 hover:text-black flex font-body items-center justify-center space-x-2 text-white my-2 py-2 bg-black hover:bg-gray-200 rounded w-full">
                    <FcGoogle size={23} />
                    <span>Sign up with Google</span>
                </button>
                {/* <button className="transition duration-200 hover:text-black flex font-body items-center justify-center space-x-2  my-2 py-2 bg-black text-white hover:bg-gray-200 rounded">
                    <AiFillApple size={23} />
                    <span>Sign up with Apple</span>
                </button> */}

            </div>
            {/* <form className="font-body pt-5 ">


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
                    <label className="pb-2 inline-block">Repeat Password</label>

                    <input type="password" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Password" />
                </div>

                <div className="mt-6 block p-5 text-sm md  text-gray-800">
                    <input type="checkbox" className="inline-block border-0  " />
                    <span className="inline">By creating an account you are agreeing to our
                        <a className="" href="#" target="_blank" data-test="Link">
                            <span className="underline ">Terms and Conditions</span> </a> and
                        <a className="" href="#" target="_blank" data-test="Link">
                            <span className="underline">Privacy Policy</span> </a>
                    </span>
                </div>

                <div className="mt-5">
                    <input type="submit" value="Sign up" className="py-3 bg-orange-500 text-white w-full rounded hover:bg-black transition duration-200" />
                </div>
            </form> */}
            <Link className="" href="login" data-test="Link"><span className="block  p-5 text-center text-gray-700   ">Already have an account?</span></Link>
        </div>


    </div>

}
export default Page