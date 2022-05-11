/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import profile from "../img/benj_profile.jpg"; 
import Button from "../components/button";
import Education from "./education";
import Experience from "./experience";
import Expertise from "./expertise";
import { NavLink } from "react-router-dom";


const Profile = ( props ) => {
	const [isEducation, setEducation] = useState(true)
	const [isExpertise, setExpertise] = useState(false)
	const [isExperience, setExperience] = useState(false)

	const handleEducation = () => {
		if(!isEducation){
			setEducation(!isEducation)
			setExpertise(false)
			setExperience(false)
		}
	}

	const handleExpertise = () => {
		if(!isExpertise){
			setExpertise(!isExpertise)
			setEducation(false)
			setExperience(false)
		}
	}

	const handleExperience = () => {
		if(!isExperience){
			setExperience(!isExperience)
			setEducation(false)
			setExpertise(false)
		}
	}

	return (  
		<div className={`container mx-auto ${ !props.isMobile ? 'mt-18' : 'mt-0 mb-10'} px-4 md:px-2 lg:px-8`}>
			<div className={`block md:flex md:justify-between ${ !props.isMobile ? 'mt-8' : 'mt-0'}`}>
				<div className="py-4 w-12/12 md:w-4/12">
					{
						! props.isMobile ? 
						<div className="flex justify-center items-center">
							<div className="p-1.5 border-4 border-blue4 rounded-full dark:bg-gray-700">
								<div className="overflow-hidden h-40 w-40 rounded-full">
									<img className="w-full" src={ profile } alt="Profile-Image" />
								</div>
							</div>
						</div>
						:
						null
					}
					
					<div className={`flex justify-center items-center ${ !props.isMobile ? 'mt-10' : 'mt-4'}`}>
						<h2 className="uppercase md:normal-case text-gray-600 dark:text-white text-xl font-black dark:md:font-semibold tracking-[0.03rem]">Benigno E. Ambus Jr.</h2>
					</div>
					<div className="flex justify-center items-center mt-4">
						<h2 className="text-gray-600 dark:text-gray-300 text-md md:text-sm font-medium tracking-[0.03rem]">Software Developer</h2>
					</div>
					<div className="flex justify-center items-center mt-1">
						<h2 className="text-gray-600 dark:text-gray-300 text-md md:text-sm font-medium tracking-[0.03rem]">UI/UX Designer</h2>
					</div>
					<div className="flex justify-center items-center mt-5 space-x-2">
						<div className="py-2 px-2.5 dark:px-3 h-10 w-10 border border-gray-300 dark:border-0 rounded-md text-gray-600 
									hover:text-blue4 dark:text-gray-300 dark:hover:text-white bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-600 cursor-pointer">
							<i className="fa-solid fa-envelope"></i>
						</div>
						<div className="py-2 px-3.5 h-10 w-10 border border-gray-300 dark:border-0 rounded-md text-gray-600 
									hover:text-blue4 dark:text-gray-300 dark:hover:text-white bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-600 cursor-pointer">
							<i className="fa-brands fa-linkedin-in"></i>
						</div>
						<div className="py-2 px-3.5 h-10 w-10 border border-gray-300 dark:border-0 rounded-md text-gray-600 
									hover:text-blue4 dark:text-gray-300 dark:hover:text-white bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-600 cursor-pointer">
							<i className="fa-brands fa-facebook-f"></i>
						</div>
						<div className="py-2 px-3 h-10 w-10 border border-gray-300 dark:border-0 rounded-md text-gray-600 
									hover:text-blue4 dark:text-gray-300 dark:hover:text-white bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-600 cursor-pointer">
							<i className="fa-brands fa-github"></i>
						</div>
					</div>
					<div className="flex justify-center items-center mt-12">
						<NavLink to="#" download="" className="flex justify-start items-center py-3 px-12 space-x-2 rounded-md text-white font-semibold bg-blue4">
							<span>Download CV</span>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
								strokeLinecap="round" strokeLinejoin="round"><path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/></svg>
						</NavLink>
					</div>
				</div>
				<div className="py-4 w-12/12 md:w-8/12">
					<div className="hidden md:block md:px-6">
						<div className="flex justify-start items-center space-x-2">
							<Button onClick={ handleEducation }>
								<span className="hidden lg:block">Educational Background</span> 
								<span className="block lg:hidden">Education</span>
							</Button>
							<Button onClick={ handleExpertise }>Expertise</Button>
							<Button onClick={ handleExperience }>
								<span className="hidden lg:block">Work Experience</span> 
								<span className="block lg:hidden">Experience</span>
							</Button>
						</div>
						{
							isEducation ?
								<Education />
							:
							isExpertise ?
								<Expertise />
							:
								<Experience />
						}
					</div>
				</div>
			</div>
		</div>
    );
}
 
export default Profile;