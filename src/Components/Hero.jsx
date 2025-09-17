import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import { motion } from 'motion/react'
import { tr } from 'motion/react-client'



const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6  lg:mt-20'>
        <motion.h1  
        initial = {{opacity:0,y:40}}
        whileInView = {{opacity:1,y:0}}
        transition={{duration:0.6,delay:0.8}}
        viewport={{once:true}}
         className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
          VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>for <br /> devlopers</span>
        </motion.h1>

        <motion.p 
        initial = {{opacity:0,y:30}}
        whileInView = {{opacity:1,y:0}}
        transition={{duration:0.5,delay:1}}
        viewport={{once:true}}
        className='text-lg text-neutral-500 font-semibold text-center max-w-4xl mt-10'>
            Lorem ipsum dolor sit amet consectetur  consectetur adipisicing elit. Ipsum, distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, delectus.
        </motion.p>

        <div className="flex space-x-6 mt-6 justify-center">
              <motion.a href="#"  
               initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3, delay: 1.2 }}
    viewport={{ once: true }}
              className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" onClick={() => setSideBar(false)}>
                Start for free
              </motion.a>
              <motion.a href="#"
               initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3, delay: 1.2 }}
    viewport={{ once: true }}
               className="py-2 px-3 border rounded-md" onClick={() => setSideBar(false)}>Documentation</motion.a>
            </div>


            <div className='flex  mt-10 justify-center'>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                <source src={video1} type='video/mp4' />
                Your browser does not support video tag
                </video>

                 <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                <source src={video2} type='video/mp4' />
                Your browser does not support video tag
                </video>


                

            </div>
      
    </div>
  )
}

export default Hero
