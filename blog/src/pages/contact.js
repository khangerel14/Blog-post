import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ContactUs from "@/constant/contact"

const Contact = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col gap-20">
            <Navbar />
            <div className="flex flex-col gap-7 mx-auto justify-center w-[650px] max-md:mx-5 max-md:w-fit">
                <h1 className="font-semibold text-3xl">Contact Us</h1>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <ContactUs />
                <div className="flex flex-col gap-7 bg-gray-100 p-7 rounded-lg">
                    <h1 className="font-semibold text-lg">Leave a Message</h1>
                    <div className="flex gap-6 max-md:flex-col">
                        <input type="text" className="border-2 rounded-md p-2" placeholder="Your name" />
                        <input type="text" className="border-2 rounded-md p-2" placeholder="Your email"/>
                    </div>
                    <input type="text" className="border-2 rounded-md p-2" placeholder="Subject"/>
                    <input type="text" className="border-2 rounded-md p-2 h-36" placeholder="Write a messege"/>
                    <button className="bg-[#4B6BFB] rounded-md text-white w-fit p-2">Send Message</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact