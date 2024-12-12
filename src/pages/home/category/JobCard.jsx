import React from 'react';
import { motion } from "motion/react"
import {FaLocationDot} from "react-icons/fa6";

const JobCard = ({job}) => {
    const {title, location, jobType, salaryRange, description, company, company_logo,requirements} = job;
    return (
        <motion.div animate={{scale:1}} whileHover={{scale: 1.02}} className="card card-compact bg-base-100 shadow-xl p-2 m-2 border">
            <div className={"flex"}>
                <figure>
                    <img
                        className={"w-12 h-12"}
                        src={company_logo}
                        alt={company}/>
                </figure>
                <div className={"text-start"}>
                    <h3 className={"font-bold text-xl"}>{company}</h3>
                    <p className={"flex items-center font-light text-gray-500"}><FaLocationDot/>{location}</p>
                </div>
            </div>
            <div className="card-body text-start">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className={"flex flex-wrap gap-1 my-6"}>
                    {
                        requirements?.map((item,idx) => <div className={"px-3 py-1 bg-gray-200 rounded-3xl"} key={idx}>{item}</div>)
                    }
                </div>

                <div className="card-actions justify-between items-center ">
                    <div>
                        <span className={"font-semibold"}>Salary :</span> $ {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
                    </div>
                    <button className="btn btn-sm btn-primary">Apply</button>
                </div>
            </div>
        </motion.div>
    );
};

export default JobCard;