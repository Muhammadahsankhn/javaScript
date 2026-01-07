import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen bg-zinc-900 flex gap-10 px-20 items-center'>

            <div className="cardcontainer h-[50vh] w-1/2 ">
                <div className="card rounded-xl relative flex items-center justify-center w-full h-full bg-[#004D43]">
                    <img className='absolute w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-[#CDEA68]'>&copy;2025</button>
                </div>
            </div>

            <div className="cardcontainer h-[50vh] w-1/2 flex gap-10">
                <div className="card rounded-xl w-1/2 h-full bg-[#192826] relative flex items-center justify-center">
                    <img className='absolute w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-5 bottom-5 uppercase'>rating 5.0 on clutch</button>
                </div>

                <div className="card rounded-xl w-1/2 h-full bg-[#192826] relative flex items-center justify-center">
                    <img className='absolute w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute px-2 py-1 rounded-full border-2 left-5 bottom-5  uppercase'>business bootcamp alumni</button>
                </div>
            </div>

        </div>
    )
}

export default Cards