import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-blue-100 flex items-center'>
            <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
                {/* left side */}
                <div className='md:w-1/2 space-y-8 h-full '> 
                    <h2 className='text-5xl font-bold leading-snug text-black'>E-Book Site for <br /><span className='text-blue-700'> College Notes.</span> </h2>
                    <p className='md:w-4/5'>Our e-book site for college notes is designed to provide students with convenient access to a wide range of academic resources. Whether you're studying engineering, sciences, humanities, or other disciplines, our platform aims to simplify the process of finding and accessing essential study materials.</p>
                    <div>
                        <input type="search" name="search" id="search" placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none' />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black translate-all ease-in duration-200'>Search</button>
                    </div>
                </div>

                {/* right side */}
                <div>
                    <BannerCard/>
                </div>
            </div>
        </div>
    )
}

export default Banner