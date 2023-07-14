import {AiFillCloseCircle,AiOutlineClose,AiOutlineMenu} from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = ()=>{
        setNav(!nav);
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1536px] mx-auto px-2 text-purple-950 bg-[#fafafa]'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
                CBE Loan
            </h1>
            <ul className="hidden md:flex">
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resource</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            {/* mobile menu */}
            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20} />: <AiOutlineMenu size={20} />}                
            </div>
            <nav>
            <div className={!nav? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-purple-900 bg-purple-950 ease-in-out duration-500': 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bol m-4 text-white'>
                    CBE Loan
                </h1>
                <ul className="p-4 uppercase text-white">
                <li className='p-4 border-b border-white-100'>Home</li>
                <li className='p-4 border-b border-white-300'>Company</li>
                <li className='p-4 border-b border-white-300'>Resource</li>
                <li className='p-4 border-b border-white-300'>About</li>
                <li className='p-4'>Contact</li>
                </ul>
            </div>
            </nav>
            
        </div>
    )
}

export default Navbar;