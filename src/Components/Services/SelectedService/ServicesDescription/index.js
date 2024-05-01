import React from 'react';

import BulletPoint from './BulletPoint';

const ServicesDescription = ({descriptionInfo}) => {

    const renderServiceDescription = () => {
        return descriptionInfo.map((detail, i) => <BulletPoint info={detail} key={`${i}-${detail.bulletPoint}`}/>)
    }

    return (
        <div className="h-64 w-full overflow-y-auto bg-white bg-opacity-10 border-2 border-black shadow-inner shadow-black rounded px-1 py-2">
            {renderServiceDescription()}
        </div>
    )
}

export default ServicesDescription;