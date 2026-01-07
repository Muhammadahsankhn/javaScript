import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black '>
            <h1 className='text-[3vw] leading-[3.5vw] tracking-tight'>We craft category-defining presentations, brand 
                identities, and digital experiences that drive funding,
                 sales, and market leadership.
            </h1>
            <div className='w-full flex gap-5 border-t-[1px] border-[#9daf5b] mt-20 pt-10'>
                <div className='w-1/2'>
                    <h1 className='text-7xl'>How we can help:</h1>
                    <button className='flex gap-10 items-center px-10 py-6 bg-zinc-900 uppercase text-white rounded-full mt-6'>Read More
                        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                    </button>
                </div>

                <div className='w-1/2 h-[40vw] rounded-3xl'>
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" className='w-full h-full object-cover rounded-3xl' />
                </div>
            </div>
    </div>
  )
}

export default About