import BlogAll from '@/components/BlogAll'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TrendingAll from "@/components/TrendingAll"
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className='max-w-screen-xl mx-auto'>
      <Navbar />
      <Carousel />
      <TrendingAll />
      <BlogAll />
      <Footer />
    </section>
  )
}

