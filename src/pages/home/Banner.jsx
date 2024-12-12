import React from 'react';
import { motion } from "motion/react"
import happy from "../../assets/banner/happy.jpg"
import codingGroup from "../../assets/banner/codingGroup.jpg"
import BannerSearch from "../../components/BannerSearch.jsx";

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className={"flex-1"}>
                    <motion.img
                        animate={{y: [50, 20, 50]}}
                        transition={{duration: 10, repeat: Infinity, ease:"easeInOut"}}
                        src={happy}
                        className="w-64 rounded-r-[40px] rounded-tl-[40px] border-l-4 border-b-4 border-green-600 shadow-2xl"/>
                    <motion.img
                        animate={{x: [220, 250, 220]}}
                        transition={{duration: 10, repeat: Infinity, ease:"easeInOut"}}
                        src={codingGroup}
                        className="w-64 rounded-r-[40px] rounded-tl-[40px] border-l-4 border-b-4 border-green-600  shadow-2xl"/>
                </div>
                <div className={"flex-1"}>
                    <motion.h1
                        animate={{
                            y: [50, 0],
                            transition: {duration: 1.5, ease: "easeIn"},

                        }}
                        whileHover={{scale:[1,0.95,1]}}
                        transition={{duration: 0.5}}
                        className="text-5xl font-bold">
                        The

                        <motion.span
                            animate={{
                                color: ['#81990b', '#0b991b','#0b1e99','#81990b'],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        > Easiest Way </motion.span> to Get Your New Job</motion.h1>
                    <motion.p animate={{
                        y:[30, 0],
                        transition: {duration: 1}
                    }} className="py-6">
                        Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day
                    </motion.p>
                    <BannerSearch/>
                </div>


            </div>
        </div>
    );
};

export default Banner;