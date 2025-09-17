import React from "react";
import code from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";
//import logo from "../assets/logo.png";
import { motion } from 'motion/react';



const Coding = () => {
  const data = [
    {
      title: "Drag and Drop Interface",
      description:
        "Easily design layouts with an intuitive drag-and-drop system. No coding required.",
    },
    {
      title: "Multi-Platform Compatibility",
      description:
        "Seamlessly works across desktop, tablet, and mobile  with an intuitive drag-and-drop .",
    },
    {
      title: "Built-in Templates",
      description:
        "Choose from a wide range of pre-designed templates. Save time by starting  cases.",
    },
    {
      title: "Real-Time Preview",
      description:
        "Instantly preview changes as you make them. See exactly how your project will  it.",
    },
  ];

  return (
    <div className="mt-12 ">
      <motion.h1
       initial = {{opacity:0,y:40}}
        whileInView = {{opacity:1,y:0}}
        transition={{duration:0.6,delay:0.8}}
        viewport={{once:true}}
       className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide ">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          coding workflow
        </span>
      </motion.h1>

      <motion.div
      
       className="flex flex-wrap justify-center mt-4 ">
        <div className="p-2 w-full lg:w-1/2 ">
          <motion.img
           initial = {{opacity:0,x:-140}}
        whileInView = {{opacity:1,x:0}}
        transition={{duration:0.6,delay:0.8}}
        viewport={{once:true}}
           src={code} alt="" className="" />
        </div>

        <motion.div 
         initial = {{opacity:0,x:140}}
        whileInView = {{opacity:1,x:0}}
        transition={{duration:0.6,delay:0.8}}
        viewport={{once:true}}
        className="pt-12 w-full lg:w-1/2  ">
          {data.map((feature, index) => (
            <div key={index} className="flex mb-12  ">
              <div className="text-green-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full  ">
                <CheckCircle2 />
              </div>

              <div>
                <h5 className="mt-1 mb-2 text-xl">{feature.title}</h5>
                <p className=" text-neutral-500 text-md ">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Coding;
