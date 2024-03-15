import { useRouter } from "next/router"
const Menu = () => {
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
    return (
        <div className="flex flex-col w-[60%] bg-gray-100 h-full justify-start">
            <ul className="flex flex-col gap-9">
                <button className="hover:text-[#D4A373] hover:underline" onClick={home}><li className="text-gray-600">Home</li></button>
                <button className="hover:text-[#D4A373] hover:underline" onClick={blog}><li className="text-gray-600">Blog</li></button>
                <button className="hover:text-[#D4A373] hover:underline" onClick={contact}><li className="text-gray-600">Contact</li></button>
            </ul>
        </div>
    )
}

export default Menu