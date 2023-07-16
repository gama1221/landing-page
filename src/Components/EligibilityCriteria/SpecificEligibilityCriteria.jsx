const SpecificEligibilityCriteria = ({ criteria }) => {
    const result = criteria.map((item, index) => (
        <span key={index} className='py-1 border-b block'>
            <span className='font-bold'> {index + 1}. </span>
            <span className='px-1'> {item} </span>
            {
                item.specific_eligibility_crsiteria
            }
            {index < criteria.length - 1}
        </span>
    ));
    return <div> {result} </div>;
}

export default SpecificEligibilityCriteria;