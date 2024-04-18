import React from 'react';

import Layout from '../../Layout';
import PageHeader from '../../Shared/Headers/PageHeader';
import FilterProjects from '../../Components/Portfolio/FilterProjects';
import Projects from '../../Components/Portfolio/Projects';

import Project from '../../Objects/Portfolio/Project';

const Portfolio = () => {

    let diningWithZach = {title: "Dining with Zach Bainter", subTitle: "Catering", websiteUrl: "https://www.zachbainter.com/ ", img: ""};
    let songaaGrants = {title: "Songa Grants", subTitle: "Federally Funded Tribal Grants", websiteUrl: "https://songaagrants.com/", img: ""};
    let solleLife = {title: "Solle Life", subTitle: "Natural Supplements", websiteUrl: "https://solle-life.vercel.app/", img: ""};
    let strongAfFitness = {title: "Strong AF Fitness", subTitle: "Let's Get Strong AF Together", websiteUrl: "https://strong-af-fitness.vercel.app/", img: ""};
    let dreamBelieveAchieve = {title: "Dream Believe Achieve", subTitle: "Inspirational Quotes", websiteUrl: "https://apps.apple.com/us/app/dream-believe-achieve/id1531356264", img: ""};
    let bloodPressureNumbers = {title: "Blood Pressure Numbers", subTitle: "Track your blood pressure", websiteUrl: "https://apps.apple.com/us/app/blood-pressure-numbers/id1534661419?platform=iphone", img: ""}
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