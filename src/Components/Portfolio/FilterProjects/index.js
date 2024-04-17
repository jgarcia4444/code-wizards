import React from 'react';

import Filter from './Filter';

const FilterProjects = () => {

    const filters = ["Web", "Mobile"];

    const renderFilters = () => {
        return filters.map(filterInfo => <Filter text={filterInfo} />)
    }

    return (
        <div className="w-full flex flex-row items-center justify-start gap-4 mt-2">
            {renderFilters()}
        </div>
    )
}

export default FilterProjects;