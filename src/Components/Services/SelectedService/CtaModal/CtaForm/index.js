import React from 'react'

const CtaForm = ({}) => {

    const textInput = (val, changeFunc) => {
        return (
            <input value={val} onChange={changeFunc} type="text" className="w-full bg-black rounded text-white" />
        )
    }

    return (
        <div className="w-1/2 h-1/2 bg-white rounded bg-opacity-60 flex flex-col items-center justify-center gap-2 p-2">
            <div className="w-full flex flex-col">
                <div className="w-full">
                    <h4 className="">Name</h4>
                </div>
                <div className="w-full flex flex-row gap-4 items-center justify-center">
                    <div className="w-1/2">
                        {textInput()}
                    </div>
                    <div className="w-1/2">
                        <input type="text" className="w-full bg-black rounded text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaForm;