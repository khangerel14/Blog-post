const api = "https://dev.to/api/articles?username=gereltuyamz"

const All = () => {
    return (
    <div className="flex flex-col gap-7 my-[50px] max-w-screen-xl mx-auto">
        <h1 className="font-semibold text-2xl">All Blog Post</h1>
        {
            api.map((props) => {
                let key = uuidv4()
                return (
                    <div className="flex flex-col gap-7 w-[410px] h-[500px] rounded-xl p-4 border-2" key={key}>
                        <img className="bg-cover rounded-md h-full" src={props.social_image} alt="" />
                        <button className="w-fit p-1 px-2 rounded-lg bg-indigo-100 text-indigo-500">{props.tags}</button>
                        <h1 className="text-xl font-semibold">{props.description}</h1>
                        <p className="text-gray-400">{props.published_timestamp}</p>
                    </div>
                )
            })
        }
    </div>
    )
}

export default All