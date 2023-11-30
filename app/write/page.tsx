'use client'

import { useContext, useEffect } from "react"
import { AppContext } from "../Context"
import { useRouter } from 'next/navigation'


type Props = {}
const Page = (props: Props) => {
    const { user } = useContext(AppContext)
    const router = useRouter();

    useEffect(() => {
        if (!user)
            router.push('/login')
    }, [user])

    return (
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, qui animi modi assumenda voluptates illum vero soluta adipisci beatae quae suscipit deserunt dolore amet veniam praesentium cumque dolores quibusdam pariatur!
        </div>
    )
}
export default Page