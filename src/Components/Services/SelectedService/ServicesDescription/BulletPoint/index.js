import React, {useState, useEffect} from 'react';
import { CiCircleChevDown } from "react-icons/ci";

const BulletPoint = ({info}) => {

    const [showDetails, setShowDetails] = useState(false);

    const {bulletPoint, details} = info;

    return (
        <div className=" mb-2 bg-white bg-opacity-50  transition-all duration-300 rounded p-2 flex flex-row flex-wrap border-2 border-white shadow-inner shadow-white">
            <div className="w-1/2">
                <p className=" font-bold text-black">{bulletPoint}</p>
            </div>
            <div className="w-1/2 flex flex-row items-center justify-end">
                <CiCircleChevDown onClick={() => setShowDetails(!showDetails)} className={`transition-all duration-300 hover:cursor-pointer hover:scale-105 ${showDetails === true ? "rotate-180" : "rotate-0"}`} color={"#000"} size={24} />
            </div>
            {showDetails === true &&
            (
                <div className="w-full">
                    <p className="">{details}</p>
                </div>
            )
            }
        </div>
    )
}

export default BulletPoint;