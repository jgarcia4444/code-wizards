import React from 'react';

import BulletPoint from './BulletPoint';

const ServicesDescription = ({descriptionInfo}) => {

    const renderServiceDescription = () => {
        return descriptionInfo.map((detail, i) => <BulletPoint info={detail} key={`${i}-${detail.bulletPoint}`}/>)
    }

    return (
        <div className="h-64 w-full overflow-y-auto bg-black bg-opacity-70 border-2 border-black shadow-inner shadow-black rounded px-1">
            {renderServiceDescription()}
        </div>
    )
}

export default ServicesDescription;