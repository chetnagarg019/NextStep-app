import React from "react";
import profile1 from "../assets/profile-pictures/user1.jpg";
import profile2 from "../assets/profile-pictures/user2.jpg";
import profile3 from "../assets/profile-pictures/user3.jpg";
import profile4 from "../assets/profile-pictures/user4.jpg";
import profile5 from "../assets/profile-pictures/user5.jpg";
import profile6 from "../assets/profile-pictures/user6.jpg";
import { motion } from 'motion/react';

const Testimonials = () => {
  const data = [
    {
      img: "https://cdn.pixabay.com/photo/2023/12/04/17/16/woman-8429860_1280.jpg",
      Name: "John Doe",
      profession: "SteNar Solutions",
      description:
        "The team exceeded my expectations. Their professionalism, dedication, and innovative approach made the entire process smooth and successful. I highly recommend their services to anyone.",
    },
    {
      img: profile2,
      Name: "Sarah Johnson",
      profession: "TechSoft Pvt Ltd",
      description:
        "I had an amazing experience. The project was delivered on time with outstanding quality. The communication was clear throughout and they truly understood our business needs.",
    },
    {
      img: profile3,
      Name: "Michael Lee",
      profession: "InnovateX",
      description:
        "The support we received was exceptional. Their expertise helped us scale quickly and efficiently. We were impressed with their ability to solve complex challenges with ease.",
    },
    {
      img: profile4,
      Name: "Emily Davis",
      profession: "BrightWave",
      description:
        "Working with the team was a pleasure. They are highly skilled, very responsive, and focused on delivering results that matter. We look forward to more collaborations.",
    },
    {
      img: profile5,
      Name: "David Wilson",
      profession: "NextGen Systems",
      description:
        "They understood our requirements perfectly and executed them with precision. The attention to detail and proactive approach made a huge difference in the project’s success.",
    },
    {
      img: profile6,
      Name: "Sophia Brown",
      profession: "VisionTech",
      description:
        "I’m extremely satisfied with the outcome. The entire process was smooth, transparent, and efficient. Their work ethic and technical knowledge are truly commendable.",
    },
  ];

  return (
    <div className="mt-12 ">
      <motion.h1 
      initial = {{opacity:0,y:40}}
        whileInView = {{opacity:1,y:0}}
        transition={{duration:0.6,delay:0.8}}
        viewport={{once:true}}
      className="text-3xl sm:text-4xl lg:text-6xl text-center tracking-wide mb-12">
        What People are{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Saying
        </span>
      </motion.h1>

      {/* cardds here  */}
      <div className="flex flex-wrap  justify-center  shadow-2xl ">
        {data.map((info, index) => (
          <motion.div
           initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4 "
          >
            <div className="p-8  rounded-xl hover:shadow-lg transition bg-[#000000]">
              {/* description  */}
              <p className="text-sm text-neutral-400 ">{info.description}</p>

              {/* profile and name  */}

                <div className="flex mt-6  items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 ">
                <img
                  src={info.img}
                  alt={info.Name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col ml-4 ">
                <h5 className=" text-md text-neutral-300">{info.Name}</h5>
                <p className=" text-neutral-600 text-sm ">
                  {info.profession}
                </p>
              </div>
              </div>


            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
