import React from 'react';

import Layout from '../../Layout';
import PageHeader from '../../Shared/Headers/PageHeader';
import FilterProjects from '../../Components/Portfolio/FilterProjects';

const Portfolio = () => {

    return (
        <Layout>
            <div className="w-full flex flex-col pt-28 px-4">
                <PageHeader headerText={"Portfolio"} />
                <FilterProjects />
            </div>
        </Layout>
    )
}

export default Portfolio;