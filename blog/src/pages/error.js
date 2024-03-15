import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const Error = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col gap-40">
            <Navbar />
            <div className="flex mx-auto justify-center gap-24 items-center">
                <div className="flex gap-10 border-r-2 px-20 py-9"> 
                    <h1 className="text-9xl font-normal">404</h1>
                </div>
                <div className="flex flex-col text-2xl w-96 gap-4">
                    <h1 className="font-semibold tex">Page Not Found</h1>
                    <p className="text-gray-500">We're sorry, This page is unknown or does not exist the page you are looking for.</p>
                    <button className="p-1 px-4 text-white bg-[#647ff3] w-fit rounded-lg">Back To Home</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Error