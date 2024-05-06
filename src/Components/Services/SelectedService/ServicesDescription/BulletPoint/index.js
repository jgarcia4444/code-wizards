import React, {useState, useEffect} from 'react';
import { CiCircleChevDown } from "react-icons/ci";

const BulletPoint = ({info}) => {

    const [showDetails, setShowDetails] = useState(false);

    const {bulletPoint, details} = info;

    return (
        <div className={`mb-2 bg-black bg-opacity-60 shadow-inner shadow-black transition-all duration-300 rounded px-2 flex flex-row flex-wrap items-center ${showDetails === true ? "h-24" : "h-12"}`}>
            <div className="w-1/2 flex flex-row items-center">
                <p className=" font-bold text-white text-xs md:text-sm">{bulletPoint}</p>
            </div>
            <div className="w-1/2 flex flex-row items-center justify-end">
                <CiCircleChevDown onClick={() => setShowDetails(!showDetails)} className={`transition-all duration-300 hover:cursor-pointer hover:scale-105 ${showDetails === true ? "rotate-180" : "rotate-0"}`} color={"#fff"} size={24} />
            </div>
            {showDetails === true &&
            (
                <div className="w-full bg-white bg-opacity-20 p-1 rounded">
                    <p className="text-white text-xs md:text-sm  ">{details}</p>
                </div>
            )
            }
        </div>
    )
}

export default BulletPoint;