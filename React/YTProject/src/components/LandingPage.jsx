import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const LandingPage = () => {
    return (
        <div data-scroll data-scroll-speed='-.3' className='w-full h-screen bg-zinc-900 pt-1'>
            <div className="TextStructure mt-52 px-20">
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return <div className='masker '>
                        <div className='w-fit flex items-center'>
                            {index === 1 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '14vw' }}
                                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                    className='w-[14vh] h-[10vh] bg-red-500 '></motion.div>
                            )}
                            <h1 className='uppercase text-[7.5vw] leading-[6vw] font-bold font-["Founders_Grotesk_X-Condensed"]'>
                                {item}
                            </h1>
                        </div>
                    </div>
                })}
            </div>
            <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between px-20 items-center py-5 gap-5'>
                {["Presentation and storytelling agency", "For innovation teams and global brands"].map((item, index) => (
                    <p className='text-md font-bold tracking-tight leading-none'>{item}</p>
                ))}
                <div className='start flex items-center gap-5 text-md'>
                    <div className='px-5 py-2 flex items-center rounded-2xl uppercase border-[1px] border-zinc-400 font-light'>Start the project</div>
                    <div className='w-10 h-10 flex justify-center items-center border-[1px] border-zinc-400 rounded-full'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LandingPage