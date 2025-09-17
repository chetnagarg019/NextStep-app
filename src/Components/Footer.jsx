import React from 'react'
import { motion } from 'motion/react'

const Footer = () => {
  return (
    <div className="mt-16 border-t border-neutral-500">
      <div className="flex flex-col lg:flex-row justify-between px-8 py-10 gap-8">

        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-neutral-100 mb-2">Resources</h1>
          <p className="text-neutral-400 hover:text-white cursor-pointer">Getting Started</p>
          <p className="text-neutral-400 hover:text-white cursor-pointer">Tutorials</p>
          <p className="text-neutral-400 hover:text-white cursor-pointer">API Reference</p>
          <p className="text-neutral-400 hover:text-white cursor-pointer">Community Forums</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-neutral-100 mb-2">Company</h1>
          <p className="text-neutral-400 hover:text-white cursor-pointer">About Us</p>
          <p className="text-neutral-400 hover:text-white cursor-pointer">Careers</p>
          <p className="text-neutral-400 hover:text-white cursor-pointer">Press</p>
          <p className="text-neutral-400 hover:text-white cursor-pointer">Contact</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-neutral-100 mb-2">Support</h1>
          <p className="text-neutral-400 hover:text-white cursor-pointer">Help Center</p>
          <p className="text-neutral-400 hover:text-white cursor-pointer">FAQs</p>
          <p className="text-neutral-400 hover:text-white cursor-pointer">Privacy Policy</p>
          <p className="text-neutral-400 hover:text-white cursor-pointer">Terms of Service</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className=" text-center py-4">
        <motion.p
        initial = {{opacity:0,y:-130}}
        whileInView={{opacity:1,y:1}}
        transition={{duration:0.9,delay:0.4}}
        viewport={{ once: true }}
         className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.  
        </motion.p>
      </div>
    </div>
  )
}

export default Footer
