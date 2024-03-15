import { useState } from "react"

const CreatePost = () => {
    const [ data, setData ] = useState({ published: true})
    const handler = (event, objectKey) => {
        let mock = {}
        mock[objectKey]
        setData({...data, title: event.target.value})
    }
    return (
        <div className="flex flex-col gap-5">
            <input className="border-2 rounded-md p-2 w-64" placeholder="title" type="text" onChange={(event) => console.log(event.target.value)}/>
            <input className="border-2 rounded-md p-2 w-64" placeholder="description" type="text" onChange={(event) => console.log(event.target.value)}/>
            <input className="border-2 rounded-md p-2 w-64" placeholder="tags" type="text" onChange={(event) => console.log(event.target.value)}/>
            <input className="border-2 rounded-md p-2 w-64" placeholder="series" type="text" onChange={(event) => console.log(event.target.value)}/>
            <button>create post</button>
        </div>
    )
}


export default CreatePost