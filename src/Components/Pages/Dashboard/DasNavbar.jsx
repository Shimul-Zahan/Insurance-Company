import React, { useContext, useState } from 'react'
import logo from '../../../assets/3f296642258e2f8fb7b0484eb32b92a9.png'
import { NavbarContext } from '../../../Others/context/NavbarContext';
import icon1 from '../../../assets/dashboard/account_circle.png'
import icon2 from '../../../assets/dashboard/notifications_unread.png'
import icon3 from '../../../assets/dashboard/contact_support.png'
import { Link } from 'react-router-dom';

const DasNavbar = () => {

    const [click, setClick] = useState('');
    const [clicked, setClicked] = useState(false);

    return (
        <nav className="flex h-[80px] px-10 items-center justify-between bg-[#E8E8E8] py-2 textblackwhite">
            <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-black transition-all duration-200 hover:scale-110">
                <img src={logo} className='h-10 w-full' alt="" />
            </div>
            <ul className="flex items-center justify-between gap-6 text-slate-900">
                <li onClick={()=> setClicked(!clicked)} className="cursor-pointer rounded-full text-[#1D6FFF] px-6 py-2">
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <div className='relative'>
                    <ul className='flex justify-center items-center gap-10'>
                        <div onClick={() => {
                            setClick('bank-service')
                            setClicked(!clicked)
                        }} className='flex justify-center items-center gap-1 relative cursor-pointer hover:text-blue-400'>
                            <li className='text-[#1D6FFF]'>Bank Services</li>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" stroke='#1D6FFF' viewBox="0 0 20 20" >
                                <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </ul>
                    {click === 'bank-service' && clicked && <div></div>}
                </div>

                <div className='relative'>
                    <ul className='flex justify-center items-center gap-10'>
                        <div onClick={() => {
                            setClick('erp-intrigartion')
                            setClicked(!clicked)
                        }} className='flex justify-center items-center gap-1 relative cursor-pointer hover:text-blue-400'>
                            <li className='text-[#1D6FFF]'>ERP Integration</li>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" stroke='#1D6FFF' viewBox="0 0 20 20" >
                                <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </ul>
                    {click === 'erp-intrigartion' && clicked && <div className='absolute top-[60px] left-0 space-y-2  py-3 px-5 w-[250px] shadow-2xl z-50 font-semibold bg-white text-black'>
                        <div className='flex flex-col justify-center items-start gap-3'>
                            <Link to='/dashboard/erp-registration' className='cursor-pointer text-[#1D6FFF]'>ERP Registration</Link>
                            <Link to='/dashboard/erp-connection' className='cursor-pointer text-[#1D6FFF]'>Manage ERP Connections</Link>
                            <Link to='/dashboard/erp-help' className='cursor-pointer text-[#1D6FFF]'>Help</Link>
                        </div>
                    </div>}
                </div>

                <div className='relative'>
                    <ul className='flex justify-center items-center gap-10'>
                        <div onClick={() => {
                            setClick('transactions')
                            setClicked(!clicked)
                        }} className='flex justify-center items-center gap-1 relative cursor-pointer hover:text-blue-400'>
                            <li className='text-[#1D6FFF]'>Transactions</li>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" stroke='#1D6FFF' viewBox="0 0 20 20" >
                                <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </ul>
                    {click === 'transactions' && clicked && <div></div>}
                </div>

                <div className='relative'>
                    <ul className='flex justify-center items-center gap-10'>
                        <div onClick={() => {
                            setClick('administration')
                            setClicked(!clicked)
                        }} className='flex justify-center items-center gap-1 relative cursor-pointer hover:text-blue-400'>
                            <li className='text-[#1D6FFF]'>Administration</li>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" stroke='#1D6FFF' viewBox="0 0 20 20" >
                                <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </ul>
                    {click === 'administration' && clicked && <div></div>}
                </div>

            </ul>
            <div>
                <ul className='flex justify-center items-center gap-4'>
                    <li>
                        <img src={icon3} alt="" className='h-6 w-6' />
                    </li>
                    <li>
                        <img src={icon2} alt="" className='h-6 w-6' />
                    </li>
                    <li>
                        <img src={icon1} alt="" className='h-6 w-6' />
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default DasNavbar