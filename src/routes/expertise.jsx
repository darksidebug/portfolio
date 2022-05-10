import ExpertiseList from "../data/expertise"

const Expertise = ( props ) => {
    return (  
        <div className={ props.isMobile ? 'pl-3.5' : ''}>
            <h1 className="block mt-10 ml-6 sm:ml-0 text-[1.5rem] sm:text-xl font-bold md:font-semibold text-blue4">{ props.isMobile ? 'Knowledge and Expertise' : 'Field of Expertise'}</h1>
            <div className={`md:overflow-y-auto mt-6 ${ props.isMobile ? 'mb-24' : 'mb-12'} md:h-[66vh] scrollbar`}>
                {
                    ExpertiseList.map((expertise, index) => {
                        return(
                            <div className="relative first:mt-6 px-10 pb-6 last:pb-0 after:content-[''] after:absolute after:top-2 after:left-[1.8rem] sm:after:left-[1.08rem] after:-z-1 
                                after:h-full after:w-0.5 after:bg-gray-200 dark:after:md:bg-gray-500" key={ index }>
                                <div className="space-y-1">
                                    <h1 className="relative z-10 pl-4 sm:pl-0 text-[1.2rem] sm:text-lg font-semibold dark:font-medium text-gray-600 dark:text-white after:content-[''] after:absolute after:block after:top-2 
                                        after:-left-4 sm:after:-left-7 after:z-2 after:h-3 after:w-3 after:border-2 after:border-blue4 dark:after:border-white after:rounded-full after:bg-blue4 tracking-[0.03rem]">
                                            { expertise.name }
                                    </h1>
                                    <div className="pl-4">
                                        {
                                            expertise.tech.map(
                                                (tech, i) => {
                                                    return(
                                                        <div key={ i }>
                                                            <h3 className="relative z-10 pl-7 pt-2 text-[0.9rem] sm:text-sm font-medium text-gray-400
                                                            after:content-[''] after:absolute after:block after:top-[0.85rem] 
                                                            after:left-0 after:z-2 after:h-2 after:w-2 after:rounded-full after:bg-gray-400 dark:after:bg-white tracking-[0.03rem]">{ tech.name }</h3>
                                                            <div className="pl-7">
                                                                <h3 className="text-[0.8rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Level of Expertise: { tech.level }</h3>
                                                                <h3 className="text-[0.8rem] sm:text-sm font-medium text-gray-400 tracking-[0.03rem]">Year of Experience: { tech.years }</h3>
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
 
export default Expertise;