import React, {useEffect, useState} from 'react';
import { motion } from "motion/react"
import {IoNewspaperOutline} from "react-icons/io5";
import JobCard from "./JobCard.jsx";

const Categories = () => {
    const [jobs, setJobs] = useState();
    useEffect(() => {
        fetch("./jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    console.log(jobs)
    return (
        <div className={"text-center"}>
            <h3 className={"text-6xl font-bold"}>Jobs of the day</h3>
            <p className={"text-2xl py-3"}>Search and connect with the right candidates faster.</p>
            <div className={"flex gap-4 overflow-scroll p-2"}>
                <motion.button
                    animate={{y: 0}}
                    whileHover={{y: -2, scale: 1.03}}
                    className={"flex items-center gap-2 border py-6 px-10 rounded-3xl"}><IoNewspaperOutline
                    className={"text-green-600"}></IoNewspaperOutline>Content Writer
                </motion.button>
                <motion.button
                    animate={{y: 0}}
                    whileHover={{y: -2, scale: 1.03}}
                    className={"flex items-center gap-2 border py-6 px-10 rounded-3xl"}><IoNewspaperOutline
                    className={"text-green-600"}></IoNewspaperOutline>Engineering
                </motion.button>
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
                {
                    jobs?.map((job,idx) => <JobCard key={idx} job={job}/>)
                }
            </div>
        </div>
    );
};

export default Categories;