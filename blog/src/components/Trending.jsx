import axios from 'axios';
import { useState, useEffect } from 'react';

const api = "https://dev.to/api/articles?username=gereltuyamz"

const Trending = () => {
    const [ data, setData ] = useState([]);
    const getData = async () => {
        let res = await axios.get(api);
        setData(res.data)
    } 
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="flex justify-between flex-wrap gap-5 max-md:justify-center">
            {
                data.slice(0, 4).map((props) => {
                    return (
                        <div className="w-[300px] h-80 p-4 rounded-xl text-white flex items-end bg-cover" style={{ backgroundImage: `url(${props.social_image})`}}>
                            <div className="flex flex-col gap-4">
                                <button className="w-fit p-1 px-2 rounded-lg text-sm bg-[#4B6BFB]">{props.tags}</button>
                                <h1 className="text-xl">{props.title}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Trending