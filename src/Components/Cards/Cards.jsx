import { FaSearch, FaChevronDown } from 'react-icons/fa';
import LoanData from "../Data/LoanData.json";
import { useState, useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import EligibilityCriteria from "../EligibilityCriteria/SpecificEligibilityCriteria";
import LoanModal from '../Modal/LoanModal';

const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 500,
        color: 'white',
        fontSize: "13px",
        backgroundColor: '#ff00ff',
        fontType: "bold",
    },
});

const Cards = () => {

    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");
    const [paginate, setpaginate] = useState(3);

    // modal start

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    // modal end

    useEffect(() => {
        fetch(LoanData)
            .catch(error => {
                setLoaded(true);
                setError(error);
            })
            .then(result => {
                if (result.ok) {
                    setLoaded(true);
                    setItems(LoanData);
                }
            }
            );

    }, []);

    const data = Object.values(items);

    const search_parameters = Object.keys(Object.assign({}, ...data));
    const filter_items = [...new Set(data.map((item) => item.product_line))];
    function search(items) {
        return items.filter(
            (item) =>
                item.product_line.includes(filter) &&
                search_parameters.some((parameter) =>
                    item[parameter].toString().toLowerCase().includes(query)
                )
        );
    }
    const load_more = (event) => {
        setpaginate((prevValue) => prevValue + 3);
    };

    if (error) {
        return <>{error.message}</>;
    } else if (!loaded) {
        return <>loading...</>;
    } else {
        return (
            <div className='w-full mt-[-2em] px-4 bg-white'>
                {/* Searching, filtering */}
                <div className="flex w-full mt-5 justify-between">
                    <header className="relative">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FaSearch className="text-purple-600 h-4 w-3 fill-current" />
                            </div>
                            <input type="text" className="block pl-10 pr-4 py-2 mt-2 text-purple-700 bg-white border border-gray-300 rounded-md focus:border-purple-500 focus:outline-none focus:ring ring-purple-100 "
                                placeholder="Search..." onChange={(e) => setQuery(e.target.value.toLowerCase())} />
                            <span className="sr-only">Search products here</span>
                        </div>
                    </header>

                    <div className="relative">
                        <select className="block w-full px-4 py-2.5 pr-8 mt-2 leading-tight text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-purple-500"
                            onChange={(e) => setFilter(e.target.value)}
                            aria-label="Filter Product By Product Line"
                        >
                            <option value=""> Filter using product line </option>
                            {
                                filter_items.map((item => (
                                    <option value={item} className='hover:outline-none hover:bg-green-900'> Filter by {item}</option>
                                )))
                            }
                        </select>
                        <span className="focus"></span>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <FaChevronDown className="text-purple-600 h-4 w-4 fill-current" />
                        </div>
                    </div>

                </div>

                {/* modal */}

                <>

                    <button onClick={handleOpenModal}>Open Modal</button>
                    <LoanModal
                        isOpen={isOpen}
                        onClose={handleCloseModal}
                        title="My Modal"
                    >
                        <p>This is the content of my modal.</p>
                        <button onClick={handleCloseModal}>Close</button>
                    </LoanModal>
                  
                </>


                {/* product cards */}
                <div className="mx-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ease-in-out">
                    {search(data)
                        .slice(0, paginate)
                        .map((item) => (
                            <div className="w-full border-2 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                                <p key={item.id} />

                                <h2 className="text-2xl font-bold text-center py-1">
                                    <CustomWidthTooltip title={`${item.product_full_name} Product`}>
                                        {item.product}
                                    </CustomWidthTooltip>
                                </h2>

                                <p className="text-center text-xl font-bold">
                                    <CustomWidthTooltip title={`${item.product_line} Product Line`}>
                                        {item.product_line}
                                    </CustomWidthTooltip>
                                </p>
                                <p className="text-center text-xl font-bold">
                                    <CustomWidthTooltip title={`${item.group} Product Group`}>
                                        {item.group}
                                    </CustomWidthTooltip>
                                </p>
                                <p className="px-8 text-xl">Specific eligibility criteria</p>

                                <div className='border rounded-md p-1'>
                                    <EligibilityCriteria criteria={item.specific_eligibility_criteria.slice(0, 3)} />
                                    <button href="#" className="text-[purple] w-[200px] rounded-md font-medium mx-8 text-center">Readmore...</button>
                                </div>

                                <div className='self-end flex'>
                                    <a href="#" className="text-[purple] w-[200px] rounded-md font-medium mx-8 scrollto d-inline-flex"><span className='flex'> General eligibility criteria <AiOutlineArrowRight /> </span>    </a>
                                </div>
                                <button className="block bg-[purple] w-[150px] rounded-md font-medium my-6 text-white mx-auto py-2 text-center">Apply</button>
                            </div>
                        ))}

                </div>
                {/* load more products */}
                <div className='self-end'>
                    <button className="bg-[purple] w-[130px] rounded-md font-medium my-6 text-white mx-auto py-2" onClick={load_more}>Load More...</button>
                </div>
                {/* search not found  */}


            </div>
        );
    }
}

export default Cards;