import Trending from "./Trending"


const TrendingAll = () => {
    return (
        <div className="flex flex-col gap-5 my-16 max-md:mx-12 max-sm:mx-5 max-sm:my-6 justify-center">
            <h1 className="font-semibold text-2xl max-md:ml-24 max-sm:ml-5">Trending</h1>
            <Trending />
        </div>
    )
}

export default TrendingAll