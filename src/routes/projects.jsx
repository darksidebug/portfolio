/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import Button from "../components/button";
import { NavLink } from "react-router-dom";
import ProjectsList from "../data/projects";
import { useState } from "react";

const Projects = ( props ) => {
    const [isDropdownToggled, setDropdownToggle] = useState(false);
    const handleDropdownToggle = () => {
        setDropdownToggle(!isDropdownToggled);
    }
    return (  
        <>
            <div className={`mt-10 ${ props.isMobile ? 'mb-24' : ''} sm:mt-16`}>
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="lg:flex justify-between lg:justify-center">
                        <div className="w-12/12 lg:w-10/12 xl:w-8/12">
                            <div className="flex justify-between items-center pb-5 px-1 border-b border-gray-200 dark:border-gray-600">
                                <h1 className="w-72 sm:w-full text-xl text-gray-600 dark:text-blue4 font-semibold sm:font-semibold">Projects Developed</h1>
                                <div className="hidden sm:flex justify-end items-center space-x-2">
                                    <Button onClick={ null }>
                                        <span>Gallery</span>
                                    </Button>
                                    <Button onClick={ null }>
                                        <span>Carousel</span>
                                    </Button>
                                    <Button onClick={ null }>
                                        <span>VScroll</span>
                                    </Button>
                                </div>
                                <div className="block relative sm:hidden">
                                    <Button onClick={ handleDropdownToggle }>
                                        <span className="hidden sm:block">Gallery</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={`inline-block ml-0 sm:ml-2 h-4 w-4 ${ isDropdownToggled ? 'rotate-90' : 'rotate-0'}`} 
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                                        strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                                    </Button>
                                    <div className={`absolute top-[3.3rem] right-0 z-30 ${ isDropdownToggled ? 'block' : 'hidden'} px-4 py-4 border border-gray-300 dark:border-gray-500 rounded-lg shadow-xl bg-white dark:bg-gray-600 after:content-[''] after:absolute after:-top-[0.52rem] after:right-3 after:z-40 after:h-4 after:w-4 after:border-t after:border-r after:border-gray-300 dark:after:border-gray-500 after:bg-white dark:after:bg-gray-600 after:-rotate-45`}>
                                        <div className="my-2 mx-3 font-medium text-gray-600 dark:text-gray-100 tracking-[0.03rem]">Gallery</div>
                                        <div className="my-2 mx-3 font-medium text-gray-600 dark:text-gray-100 tracking-[0.03rem]">Carousel</div>
                                        <div className="my-2 mx-3 font-medium text-gray-600 dark:text-gray-100 tracking-[0.03rem]">VScroll</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 mb-12 sm:mt-16 px-6 sm:px-10 md:px-0">
                            {
                                ProjectsList.map(
                                    (project, index) => {
                                        return (
                                            <div className="overflow-hidden border dark:border-2 dark:border-gray-600 rounded-xl" key={ index }>
                                                <div className="relative group">
                                                    <NavLink to={`/project/details/${project.id}`}>
                                                        <div className="overflow-hidden h-36 sm:h-28 border dark:border-b-2 border-gray-200 dark:border-gray-600 bg-gray-100">
                                                            <img width="500" src={ props.isDarkModeToggled ? project.light : project.dark } alt="Project Image" />
                                                        </div>
                                                        <div className="overflow-hidden p-2 bg-gray-50 dark:bg-gray-600">
                                                            <h3 className="font-bold text-gray-600 dark:text-gray-100 truncate">{ project.name }</h3>
                                                        </div>
                                                        <div className='group-hover:bg-gray-800 group-hover:bg-opacity-20 absolute top-0 left-0 h-[100%] w-[100%] z-10 rounded-[0.5rem] flex justify-center items-center'>
                                                            <div className='h-0 w-0 group-hover:h-10 group-hover:w-10 text-white group-hover:bg-blue4 p-2 rounded-full transition ease-in-out'>
                                                                <svg className='m-0.5' 
                                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                                                                strokeLinejoin="round">
                                                                    <path d="M13 17l5-5-5-5M6 17l5-5-5-5"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Projects;