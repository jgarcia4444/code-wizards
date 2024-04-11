import React from 'react'

const Checkbox = ({isChecked, handleClick}) => {

    return (
        <div onClick={handleClick} className="w-8 h-8 border-2 rounded border-black bg-white bg-opacity-20 shadow-white shadow-inner transition-all duration-300 hover:bg-opacity-40 hover:cursor-pointer flex items-center justify-center text-lg font-bold">
            {isChecked === true ? "X" : ""}
        </div>
    )

}

export default Checkbox;