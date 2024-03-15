import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BlogDetail = () => {
  const [detail, setDetail] = useState();
  const router = useRouter();

  const fetchDetail = async () => {
    const BASE_URL = 'https://dev.to/api/articles';
    const res = await axios.get(BASE_URL + '/' + router.query.id);
    setDetail(res.data);
    console.log(res);
  };
  useEffect(() => {
    if (router.isReady) {
      fetchDetail();
    }
  }, [router.isReady]);
      return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar />
            {detail && (
              <div className="flex flex-col justify-between max-w-[900px] my-24 mx-auto text-[#3B3C4A] text-xl gap-8 max-md:mx-5">
                  <h1 className="text-4xl font-bold text-black">{detail.description}</h1>
                  <div className="flex gap-3 items-center">
                      <div className="flex gap-3 items-center">
                          <img className="rounded-[50%] h-11" src={detail.user.profile_image} alt="" />
                          <p>{detail.user.name}</p>
                      </div>
                      <div>
                          <p>{detail.readable_publish_date}</p>
                      </div>
                  </div>
                  <img className="rounded-xl" src={detail.social_image} alt="" />
                  <p>Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.</p>
                  <p>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
                  <h1 className="text-black text-2xl">Research Your Destination</h1>
                  <p>Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.</p>
                  <h1 className="text-black text-2xl">Plan Your Itinerary</h1>
                  <p>While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.</p>
                  <p>Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>
              </div>
            )}
            <Footer />
        </div>
    )
};

export default BlogDetail;