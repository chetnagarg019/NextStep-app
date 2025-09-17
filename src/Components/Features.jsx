import React from 'react'
import { MousePointer, MonitorSmartphone, LayoutTemplate, Eye, Users, BarChart3 } from "lucide-react";
import { motion } from 'motion/react';

const Features = () => {


const data = [
  {
    icon: <MousePointer className="w-8 h-8 text-orange-500" />,
    title: "Drag and Drop Interface",
    description: "Easily design layouts with an intuitive drag-and-drop system. No coding required, just drag elements and arrange them the way you like."
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-orange-500" />,
    title: "Multi-Platform Compatibility",
    description: "Seamlessly works across desktop, tablet, and mobile devices. Your designs stay responsive and adaptive on every screen size."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-orange-500" />,
    title: "Built-in Templates",
    description: "Choose from a wide range of pre-designed templates. Save time by starting with ready-made layouts tailored to different use cases."
  },
  {
    icon: <Eye className="w-8 h-8 text-orange-500" />,
    title: "Real-Time Preview",
    description: "Instantly preview changes as you make them. See exactly how your project will look before you publish or share it."
  },
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: "Collaboration Tools",
    description: "Work together with your team in real-time. Share feedback, edit simultaneously, and keep everyone on the same page effortlessly."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
    title: "Analytics Dashboard",
    description: "Track performance and insights with powerful analytics. Get detailed reports to make smarter, data-driven decisions."
  }
];


  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]]'>
        <div className="text-center">
            {/* <span className=' text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>
            FEATURE
            </span> */}

             <motion.h1
               initial = {{opacity:0,y:40}}
        whileInView = {{opacity:1,y:0}}
        transition={{duration:0.6,delay:0.8}}
        viewport={{once:true}}
              className='text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide mt-16 '>
          Easily build your<span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> code</span>
        </motion.h1>

           
        </div>

        {/* cards here  */}
        <div className='flex flex-wrap mt-10 lg:mt-20 '>
            {data.map((feature,index) => (
                <motion.div
                initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
                 key={index} className='w-full sm:w-1/2 lg:w-1/3  '>
                    <div className="flex">

                        <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full'>
                            {feature.icon}

                        </div>

                        <div>
                            <h5 className='mt-1 mb-4 text-xl'>{feature.title}</h5>
                            <p className='text-md p-2 mb-20 text-neutral-500 '>{feature.description}</p>
                            
                        </div>

                    </div>

                </motion.div>

            ))}

        </div>

      
    </div>
  )
}

export default Features
