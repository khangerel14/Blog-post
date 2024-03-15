import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Blogpost from "@/components/Blogpost"

const Blog = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col gap-12">
            <Navbar />
            <h1 className="font-semibold text-2xl max-md:ml-12 max-sm:ml-5">All Blog Post</h1>
            <Blogpost />
            <Footer />
        </div>
    )
}

export default Blog