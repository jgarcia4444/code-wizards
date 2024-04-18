import React from 'react';

import Layout from '../../Layout';
import PageHeader from '../../Shared/Headers/PageHeader';
import FilterProjects from '../../Components/Portfolio/FilterProjects';
import Projects from '../../Components/Portfolio/Projects';

import Project from '../../Objects/Portfolio/Project';

const Portfolio = () => {

    let diningWithZach = new Project("Dining with Zach Bainter", "Catering", "https://www.zachbainter.com/ ", "");
    let songaaGrants = new Project("Songa Grants", "Federally Funded Tribal Grants", "https://songaagrants.com/", "");
    let solleLife = new Project("Solle Life", "Natural Supplements", "https://solle-life.vercel.app/", "");
    let strongAfFitness = new Project("Strong AF Fitness", "Let's Get Strong AF Together", "https://strong-af-fitness.vercel.app/", "");
    let dreamBelieveAchieve = new Project("Dream Believe Achieve", "Inspirational Quotes", "https://apps.apple.com/us/app/dream-believe-achieve/id1531356264", "");
    let bloodPressureNumbers = new Project("Blood Pressure Numbers", "Track your blood pressure", "https://apps.apple.com/us/app/blood-pressure-numbers/id1534661419?platform=iphone", "")
    const portfolioInfo = {
        web: [diningWithZach, songaaGrants, solleLife, strongAfFitness],
        mobile: [dreamBelieveAchieve, bloodPressureNumbers]
    }

    return (
        <Layout>
            <div className="w-full flex flex-col pt-28 px-4">
                <PageHeader headerText={"Portfolio"} />
                <FilterProjects />
                <Projects portfolioInfo={portfolioInfo}/>
            </div>
        </Layout>
    )
}

export default Portfolio;