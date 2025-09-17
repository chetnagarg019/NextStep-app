import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from 'motion/react';

const Pricing = () => {
  const data = [
    {
      title: "Free",
      Rup: "$0",
      features: [
        { icon: <CheckCircle2 />, text: "Private Board Sharing" },
        { icon: <CheckCircle2 />, text: "5 Gb Storage" },
        { icon: <CheckCircle2 />, text: "Web Analytics" },
        { icon: <CheckCircle2 />, text: "Private Mode" },
      ],
      btn: "Subscribe",
    },
    {
      title: "Standard",
      Rup: "$9",
      features: [
        { icon: <CheckCircle2 />, text: "Team Collaboration" },
        { icon: <CheckCircle2 />, text: "50 Gb Storage" },
        { icon: <CheckCircle2 />, text: "Advanced Analytics" },
        { icon: <CheckCircle2 />, text: "Priority Support" },
      ],
      btn: "Subscribe",
    },
    {
      title: "Premium",
      Rup: "$19",
      features: [
        { icon: <CheckCircle2 />, text: "Unlimited Board Sharing" },
        { icon: <CheckCircle2 />, text: "200 Gb Storage" },
        { icon: <CheckCircle2 />, text: "AI-Powered Insights" },
        { icon: <CheckCircle2 />, text: "24/7 Premium Support" },
      ],
      btn: "Subscribe",
    },
  ];

  return (
    <div className="mt-12">
      <motion.h1
       initial = {{opacity:0,y:40}}
        whileInView = {{opacity:1,y:0}}
        transition={{duration:0.6,delay:0.8}}
        viewport={{once:true}}
       className="text-3xl sm:text-4xl lg:text-6xl text-center my-8 tracking-wider mb-20">
        Pricing
      </motion.h1>

      {/* cards */}
      <motion.div
       className="flex flex-wrap justify-center ">
        {data.map((plan, index) => (
          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: index === 1 ? 1.02 : 1 }} // middle card bigger
  transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 120 }}
  viewport={{ once: true }}
  
           key={index} className={`w-full sm:w-1/2 lg:w-1/3 p-4 transition-transform duration-300 s  ${
                  index === 1
                    ? "scale-110 bg-neutral-800 rounded-xl"
                    : " "
                }`} >
            <div className="p-8 border border-neutral-700 rounded-xl hover:shadow-lg transition">
              {/* Title */}
              <p className="text-4xl font-semibold  mb-8">
                {plan.title}
              </p>

              {/* Price */}
              <p className=" mb-4">
                <span className="text-4xl font-bold mr-2">{plan.Rup}</span>
                <span className="text-neutral-500 text-md">/Month</span>
              </p>

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="">{f.icon}</span>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="mt-6 ">
                <button className="  px-5 py-2 w-full rounded-lg  border border-orange-700 shadow-orange-400 text-white">
                  {plan.btn}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
