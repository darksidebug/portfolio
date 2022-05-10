const Button = ( props ) => {
    return (  
        <button
        onClick={ props.onClick }
        className="py-2 px-2.5 sm:px-5 border border-gray-300 hover:border-blue4 dark:border-0 rounded-md text-gray-500 dark:text-white 
                hover:text-white dark:hover:md:text-blue4 text-sm font-medium tracking-[0.03rem] bg-white dark:bg-gray-600 hover:bg-blue4">
            { props.children } 
        </button>
    );
}
 
export default Button;