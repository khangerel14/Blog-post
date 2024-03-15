import Copy from "@/images/logocop"
import Social from "@/images/socialicon"
import Link from "next/link"
const Footer = () => {
    return (
        <div className="flex flex-col my-14 mt-10 w-full text-gray-600">
            <div className="flex justify-between my-5 w-5/6 max-md:flex-col max-md:text-center max-md:w-full max-sm:gap-5">
                <div className="flex flex-col gap-5 w-1/4 max-md:hidden">
                    <h1 className="text-black font-semibold">About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div>
                        <p>Email : info@jstemplate.net</p>
                        <p>Phone : 880 123 456 789</p>
                    </div>
                </div>
                <div>
                    <ul className="flex flex-col">
                        <Link href={'/home'}><button><li>Home</li></button></Link>
                        <Link href={'/blog'}><button><li>Blog</li></button></Link>
                        <Link href={'/contact'}><button><li>Contact</li></button></Link>
                    </ul>
                </div>
                <div className="max-md:ml-[35%]">
                    <Social />
                </div>
            </div>
            <hr />
            <div className="flex justify-between my-5 max-md:justify-center">
                <div className="flex gap-2">
                    <Copy />
                    <div>
                        <div className="flex text-black">
                            <h1>Meta</h1>
                            <h1 className="font-bold">Blog</h1>
                        </div>
                        <p>© All Rights Reserved.</p>
                    </div>
                </div>
                <div className="flex gap-7 max-md:hidden">
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer