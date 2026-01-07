import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import Cards from './Cards'

const Featured = () => {
  const cards = [useAnimation(), useAnimation()]

  const HandleHover = (index) => {
    cards[index].start({ y: "0" })
  }

  const HandleHoverEnd = (index) => {
    cards[index].start({ y: "100%" })
  }

  return (
    <div className='w-full py-10  '>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 '>
        <h1 className='text-8xl  py-15 tracking-tight'>Featured projects</h1>
      </div>


      <div className="px-20">

        <div className="cards w-full mt-20 flex gap-10 ">

          <motion.div
            onHoverStart={() => HandleHover(0)}
            onHoverEnd={() => HandleHoverEnd(0)}
            className="cardcontainer w-1/2 h-[70vh] relative">
            <h1 className='absolute uppercase text-[#CDEA68] z-[9] text-7xl leading-none tracking-tight left-full -translate-x-1/2 -translate-y-1/2 top-1/2 w-full text-center font-semibold overflow-hidden'>
              {"salience labs".split("").map((item, index) => (
                <motion.span
                  initial={{ y: '100%' }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                  className='inline-block'>
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl overflow-hidden">
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="" />
            </div>
          </motion.div>


          <motion.div
            onHoverStart={() => HandleHover(1)}
            onHoverEnd={() => HandleHoverEnd(1)}
            className="cardcontainer w-1/2 h-[70vh] ">            
            <div className="card w-full h-full  rounded-xl  relative">
              <h1 className='absolute uppercase text-[#CDEA68] z-[9] text-7xl leading-none tracking-tight right-full translate-x-1/2 translate-y-1/2 bottom-1/2 w-full text-center font-semibold  overflow-hidden'>
                {"soma".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={cards[1]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                    className='inline-block'>
                    {item}
                  </motion.span>))}
              </h1>
              <img className='w-full h-full bg-cover rounded-xl' src="https://ochi.design/wp-content/uploads/2025/08/Soma_Website_0-1.png" alt="" />
            </div>
          </motion.div>

        </div>



      </div>
    </div>
  )
}

export default Featured