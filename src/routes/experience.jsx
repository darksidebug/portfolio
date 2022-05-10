import experience from "../data/experience";

const Experience = ( props ) => {
    return (  
        <div className={ props.isMobile ? 'pl-3.5' : ''}>
            <h1 className="block mt-10 ml-6 sm:ml-0 text-[1.5rem] sm:text-xl font-bold md:font-semibold text-blue4">Work Experience</h1>
            <div className={`md:overflow-y-auto mt-6 ${ props.isMobile ? 'mb-24' : 'mb-12'} md:max-h-[66vh] scrollbar`}>
            {
                experience.map(
                    (experience, index) => {
                        return (
                            <div className="relative first:mt-6 px-10 pb-6 last:pb-0 after:content-[''] after:absolute after:top-2 after:left-[1.8rem] sm:after:left-[1.08rem] after:-z-1 
                                after:h-full after:w-0.5 after:bg-gray-200 dark:after:md:bg-gray-500" key={ index }>
                                <div className="space-y-1">
                                    <h1 className="relative z-10 pl-4 sm:pl-0 text-[1.2rem] sm:text-lg font-semibold dark:font-medium text-gray-600 dark:text-white after:content-[''] after:absolute after:block after:top-2 
                                        after:-left-4 sm:after:-left-7 after:z-2 after:h-3 after:w-3 after:border-2 after:border-blue4 dark:after:border-white after:rounded-full after:bg-blue4 tracking-[0.03rem]">
                                            { experience.position }
                                    </h1>
                                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">{ experience.company }</h3>
                                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">{ experience.address }</h3>
                                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">{ experience.year }</h3>
                                    <h3 className="pl-4 sm:pl-0 text-[0.9rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Job Description:</h3>
                                    <div className="md:w-[20rem] lg:w-[28rem] pl-10 sm:pl-6">
                                        <p className="text-[0.9rem] sm:text-sm text-justify font-medium text-gray-400 tracking-[0.03rem]">
                                            { experience.description } 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )
            }
            </div>
        </div>
    );
}
 
export default Experience;