import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from "next/router";
import Link from 'next/link';

const api = "https://dev.to/api/articles"

const Blog = () => {
    const [ data, setData ] = useState([]);
    const [ add, setAdd ] = useState(9);
    const router = useRouter()
    const initData = useRef([])
    const getData = async () => {
        let res = await axios.get(api);
        initData.current = res.data;
        setData(res.data)
        setData((prev) => [...prev, ...res.data]);
    }
    const handler = () => {    
        setAdd((add) => add + 3) 
    }
    useEffect(() => {
        getData(api);
        }, [])
        const reset = () => {
            setData(initData.current)
        };
        const view = () => {
            router.push('/blog')
        };
        const filter = (tag) => {
            setData(() =>
                initData.current.filter((el) => el.tag_list.some((c) => c.includes(tag)))
            )
            console.log(tag);
        }
    return (
        <div className='flex flex-col gap-10'>
            <div className="flex justify-between font-semibold max-md:hidden">
                <ul className='flex gap-5'>
                    <button className='hover:text-[#D4A373]' onClick={reset}><li>All</li></button>
                    <button className='hover:text-[#D4A373]' onClick={() => filter('webdev')}><li>Webdev</li></button>
                    <button className='hover:text-[#D4A373]' onClick={() => filter('programming')}><li>Programming</li></button>
                    <button className='hover:text-[#D4A373]' onClick={() => filter('typescript')}><li>Typescript</li></button>
                    <button className='hover:text-[#D4A373]' onClick={() => filter('discuss')}><li>Discuss</li></button>
                </ul>
                <button onClick={view}>View All</button>
            </div>
            <div className="flex flex-wrap justify-between gap-5 h-fit max-md:justify-center">
                {
                    data.slice(0, add).map((props) => {
                        let key = uuidv4()
                        return (
                            <Link href={`/blog/${props.id}`}>
                                <div className="flex flex-col gap-7 w-[410px] h-[500px] rounded-xl p-4 border-2 max-sm:w-[300px] max-md:w-[500px]" key={key}>
                                    <img className="bg-cover rounded-md h-full" src={props.social_image} alt="" />
                                    <div className='flex gap-3 flex-wrap'>
                                        {props.tag_list.map((el) => (
                                                <button className="w-fit p-1 px-2 rounded-lg bg-indigo-100 text-indigo-500">{el}</button>
                                        ))}
                                    </div>
                                    <h1 className="text-xl font-semibold">{props.description}</h1>
                                    <div className='flex items-center gap-4'>
                                        <img className="rounded-[50%] h-11" src={props.user.profile_image} alt="" />  
                                        <p className="text-gray-400">{props.published_timestamp}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <button className="p-3 border-2 px-4 rounded-lg flex mx-auto mt-[40px] text-gray-500" onClick={handler}>Load More</button>
        </div>
    )
}

export default Blog