import React from 'react';

import Layout from '../../Layout';
import PageHeader from '../../Shared/Headers/PageHeader';
import FilterProjects from '../../Components/Portfolio/FilterProjects';
import Projects from '../../Components/Portfolio/Projects';

import zachBainter from '../../Media/Portfolio/Desktop/dining-with-zach-desktop.png';
import songaImg from '../../Media/Portfolio/Desktop/songa-grants-desktop.png';
import solleLifeImg from '../../Media/Portfolio/Desktop/solle-life-desktop.png';
import strongAfImg from '../../Media/Portfolio/Desktop/strong-af-fitness-desktop.png';

import bpn from '../../Media/Portfolio/MobileApp/bpn.png';
import dba from '../../Media/Portfolio/MobileApp/dba.png';


const Portfolio = () => {

    let diningWithZach = {title: "Dining with Zach Bainter", subTitle: "Catering", websiteUrl: "https://www.zachbainter.com/ ", img: zachBainter};
    let songaaGrants = {title: "Songa Grants", subTitle: "Federally Funded Tribal Grants", websiteUrl: "https://songaagrants.com/", img: songaImg};
    let solleLife = {title: "Solle Life", subTitle: "Natural Supplements", websiteUrl: "https://solle-life.vercel.app/", img: solleLifeImg};
    let strongAfFitness = {title: "Strong AF Fitness", subTitle: "Let's Get Strong AF Together", websiteUrl: "https://strong-af-fitness.vercel.app/", img: strongAfImg};
    let dreamBelieveAchieve = {title: "Dream Believe Achieve", subTitle: "Inspirational Quotes", websiteUrl: "https://apps.apple.com/us/app/dream-believe-achieve/id1531356264", img: dba};
    let bloodPressureNumbers = {title: "Blood Pressure Numbers", subTitle: "Track your blood pressure", websiteUrl: "https://apps.apple.com/us/app/blood-pressure-numbers/id1534661419?platform=iphone", img: bpn}
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