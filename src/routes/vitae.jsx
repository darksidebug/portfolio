import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const Vitae = ( props ) => {
    return (  
        <div className={`container mx-auto ${ props.isMobile ? 'mb-20' : ''} py-10 px-4 md:px-2 lg:px-8`}>
            <Document className="flex justify-center items-center text-white" file="/Updated_CV_new.pdf" loading="Loading CV/Resume…">
                <Page pageNumber={ 1 } />
            </Document>
        </div>
    );
}
 
export default Vitae;