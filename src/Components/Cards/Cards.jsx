import { FaSearch, FaChevronDown } from 'react-icons/fa';
const Cards = () => {
    return (
        <div className='w-full mt-[-2em] px-4 bg-white'>
            {/* Searching, filtering */}
            <div className="flex w-full mt-5 justify-between">
                
                <header className="relative">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaSearch className="text-purple-600 h-4 w-4 fill-current" />
                        </div>
                        <input type="text" className="block pl-10 pr-4 py-2 mt-2 text-purple-700 bg-white border border-gray-300 rounded-md focus:border-purple-500 focus:outline-none focus:ring ring-purple-100 " placeholder="Search..." />
                        <span className="sr-only">Search products here</span>
                    </div>
                </header>

                <div className="relative">
                    <select className="block w-full px-4 py-2 pr-8 mt-2 leading-tight text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-purple-500">
                        <option value=""> Filter using product line </option>
                        <option> Credit Facility </option>
                        <option> Loan Term </option>
                        <option> Restructure of Loan </option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <FaChevronDown className="text-purple-600 h-4 w-4 fill-current" />
                    </div>
                </div>

            </div>

            <div className="mx-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ease-in-out">

                <div className="w-full border-2 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <h2 className="text-2xl font-bold text-center py-6">
                        Fresh
                    </h2>
                    <p className="text-center text-2xl font-bold"> Credit Facility</p>
                    <p className="text-center text-2xl font-bold"> Overdraft Facility </p>
                    <p className="px-8 text-xl">Specific eligibility criteria</p>
                    <div>
                        <p className="py-2 border-b mx-8">1. Best loan ever I got lo </p>
                        <p className="py-2 border-b mx-8">2. Best loan ever I got </p>
                        <p className="py-2 border-b mx-8">3. Best loan ever I got </p>
                        <p className="py-2 border-b mx-8">4. Best loan ever I got </p>
                        <p className="py-2 border-b mx-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Minus ratione praesentium itaque placeat laborum, iure voluptate magnam nihil,
                            nisi odit impedit aut ex earum autem modi quis libero perspiciatis neque.</p>
                        <a href="#" className="text-[purple] w-[200px] rounded-md font-medium mx-8 text-center">Readmore...</a>
                    </div>

                    <div className='self-end'>
                        <a href="#" className="text-[purple] w-[200px] rounded-md font-medium mx-8">General eligibility criteria </a> 
                    </div>
                    
                    <button className="block bg-[purple] w-[200px] rounded-md font-medium my-6 text-white mx-auto py-3 text-center">Apply</button>
                </div>

                <div className="w-full border-2 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <h2 className="text-2xl font-bold text-center py-6">
                        Fresh
                    </h2>
                    <p className="text-center text-2xl font-bold"> Credit Facility</p>
                    <p className="text-center text-2xl font-bold"> Overdraft Facility </p>
                    <p className="px-8 text-xl">Specific eligibility criteria</p>
                    <div>
                        <p className="py-2 border-b mx-8">1. Best loan ever I got lo </p>
                        <p className="py-2 border-b mx-8">2. Best loan ever I got </p>
                        <p className="py-2 border-b mx-8">3. Best loan ever I got </p>
                        <p className="py-2 border-b mx-8">4. Best loan ever I got </p>
                        <p className="py-2 border-b mx-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Minus ratione praesentium itaque placeat laborum, iure voluptate magnam nihil,
                            nisi odit impedit aut ex earum autem modi quis libero perspiciatis neque.</p>
                        <a href="#" className=" text-[purple] w-[200px] rounded-md font-medium mx-8 text-center">Readmore...</a>
                    </div>
                    
                    <div className='self-end'>
                        <a href="#" className="text-[purple] w-[200px] rounded-md font-medium mx-8">General eligibility criteria </a> 
                    </div>

                    <button className="block bg-[purple] w-[200px] rounded-md font-medium my-6 text-white mx-auto py-3 text-center">Apply</button>
                </div>



                <div className="w-full border-2 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <h2 className="text-2xl font-bold text-center py-6">
                        Fresh
                    </h2>
                    <p className="text-center text-2xl font-bold"> Credit Facility</p>
                    <p className="text-center text-2xl font-bold"> Overdraft Facility </p>
                    <p className="px-8 text-xl">Specific eligibility criteria</p>
                    <div>
                        <p className="py-2 border-b mx-8">1. Best loan ever I got lo </p>
                        <p className="py-2 border-b mx-8">2. Best loan ever I got </p>
                        <p className="py-2 border-b mx-8">3. Best loan ever I got </p>
                        <p className="py-2 border-b mx-8">4. Best loan ever I got </p>
                        <p className="py-2 border-b mx-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Minus ratione praesentium itaque placeat laborum, iure voluptate magnam nihil,
                            nisi odit impedit aut ex earum autem modi quis libero perspiciatis neque.</p>
                        <a href="#" className="text-[purple] w-[200px] rounded-md font-medium mx-8 text-center">Readmore...</a>
                    </div>
                    
                    <div className='self-end'>
                        <a href="#" className="text-[purple] w-[200px] rounded-md font-medium mx-8">General eligibility criteria </a> 
                    </div>

                    <button className="block bg-[purple] w-[200px] rounded-md font-medium my-6 text-white mx-auto py-3 text-center">Apply</button>
                </div>

                <div className="w-full border-2 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <h2 className="text-2xl font-bold text-center py-6">
                        Fresh
                    </h2>
                    <p className="text-center text-2xl font-bold"> Credit Facility</p>
                    <p className="text-center text-2xl font-bold"> Overdraft Facility </p>
                    <p className="px-8 text-xl">Specific eligibility criteria</p>
                    <div>
                        <p className="py-2 border-b mx-8">1. Best loan ever I got lo </p>
                        <p className="py-2 border-b mx-8">2. Best loan ever I got </p>
                        <p className="py-2 border-b mx-8">3. Best loan ever I got </p>
                        <p className="py-2 border-b mx-8">4. Best loan ever I got </p>
                        <p className="py-2 border-b mx-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Minus ratione praesentium itaque placeat laborum, iure voluptate magnam nihil,
                            nisi odit impedit aut ex earum autem modi quis libero perspiciatis neque.</p>
                        <a href="#" className="text-[purple] w-[200px] rounded-md font-medium mx-8 text-center">Readmore...</a>
                    </div>
                    
                    <div className='self-end'>
                        <a href="#" className="text-[purple] w-[200px] rounded-md font-medium mx-8">General eligibility criteria </a> 
                    </div>

                    <button className="block bg-[purple] w-[200px] rounded-md font-medium my-6 text-white mx-auto py-3 text-center">Apply</button>
                </div>



            </div>

        </div>
    );
}

export default Cards;