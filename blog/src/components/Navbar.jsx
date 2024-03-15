import MenuOne from "@/images/onclick";
import { useRouter } from "next/router";
import { useState } from "react"
import Menu from "./MenuBar";
import Cancel from "@/images/cancel";

const { default: Navicon } = require("@/images/navicon")

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const router = useRouter()
    const contact = () => { 
        router.push('/contact')
    }
    const home = () => {
        router.push('/home')
    }
    const blog = () => {
        router.push('/blog')
    }
    const asideMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="flex justify-between items-center mt-7 max-md:mx-12 max-sm:mx-5">
            <Navicon />
            <ul className="flex gap-9 max-md:hidden">
                <button className="hover:text-[#D4A373] hover:underline" onClick={home}><li className="text-gray-600">Home</li></button>
                <button className="hover:text-[#D4A373] hover:underline" onClick={blog}><li className="text-gray-600">Blog</li></button>
                <button className="hover:text-[#D4A373] hover:underline" onClick={contact}><li className="text-gray-600">Contact</li></button>
            </ul>
            <div className="flex max-md:hidden">
                <input type="search" name="" id="" placeholder=" search" className="border-2 rounded-md bg-gray-100 p-1"/>
            </div>
            <button className="md:hidden" onClick={asideMenu}>
                {isOpen === false ? <MenuOne /> : <Cancel />}
            </button>
            {isOpen && <Menu setIsOpen={setIsOpen} />}
        </div>
    )
}

export default Navbar