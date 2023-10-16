import React, { useEffect, useState} from 'react';
import { NavButton,NavMobileButton } from './styleComponent';
import { WalletSection } from './wallet';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LOGO from '../public/img/logo.png';
export const Navbar = () => {
    const [isMobileNavOpen, setisMobileNavOpen] = useState(false); // For toggling the mobile nav
    const handleClick = () => {
        //if (isMobileNavOpen) {
          setisMobileNavOpen(!isMobileNavOpen);
    };
    const router = useRouter();
    useEffect(()=>{
        router.push('/coinflip');
    },[])
    
    return(
        <>
            
            <nav className='w-full flex justify-betwwen'>
                <div className="w-full flex flex-row justify-between items-center mx-auto p-4">
                    <div className='lg:ml-4 ml-12 flex flex-row justify-center items-center space-x-3'>
                        <Image src={LOGO} width={'100px'} height={'100px'}  alt='logo'/>
                    </div>
                    
                    <div data-collapse-toggle="navbar-default" className="relative p-2 text-sm rounded-xl lg:hidden  focus:outline-none  bg-transparent" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" onClick={handleClick} aria-hidden="true" fill="rgba(234,181,46)" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <div className={isMobileNavOpen ? "lg:hidden w-full flex flex-col justify-between":"hidden"}>
                            <ul className="bg-black/40 gap-3 p-3 rounded-[10px] backdrop-blur-[10px] w-[230px] z-[1000] absolute right-8  top-3 font-medium flex flex-col lg:p-0 justify-center  border-gray-100  mt-0 border-0  ">
                                <li>
                                    <NavMobileButton onClick={()=> {router.push('/coinflip')}}>
                                        Coinflip
                                    </NavMobileButton>
                                </li>
                                <li>
                                    <NavMobileButton onClick={()=> {router.push('/dice')}}>
                                        Dice
                                    </NavMobileButton>
                                </li>
                                <li>
                                    <WalletSection />
                                </li>
                                {/* <li>
                                    <Link to='/dice'><NavMobileButton>DICE</NavMobileButton></Link>
                                </li>
                                <li>
                                    <Link to='/rps'><NavMobileButton>RPS</NavMobileButton></Link>
                                </li>
                                <li>
                                    <Link to='/roulette'><NavMobileButton>ROULETTE</NavMobileButton></Link>
                                </li>
                                <li>
                                    <NavMobileButton>Connect</NavMobileButton>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="hidden items-center lg:ml-4 w-full lg:flex lg:flex-row lg:w-auto " id="navbar-default">
                        <ul className="flex flex-col p-4 w-full items-center lg:p-0 mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent">
                            <li className='w-1/4'>
                                <NavMobileButton onClick={()=> {router.push('/coinflip')}}>    
                                    COINFLIP
                                </NavMobileButton>
                            </li>
                            <li className='w-1/4'>
                                <NavMobileButton onClick={()=> {router.push('/dice')}}>
                                    Dice
                                </NavMobileButton>
                            </li>
                            <li className='w-1/2'>
                                <WalletSection />
                            </li>
                            {/* <li>
                                <Link to='/dice'><NavMobileButton>DICE</NavMobileButton></Link>
                            </li>
                            <li>
                                <Link to='/rps'><NavMobileButton>RPS</NavMobileButton></Link>
                            </li>
                            <li>
                                <Link to='/roulette'><NavMobileButton>ROULETTE</NavMobileButton></Link>
                            </li>
                            <li>
                                <NavMobileButton>Connect</NavMobileButton>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <div className='drop-shadow-[0_4px_4px_rgba(0,0,0,1)] w-full' style={{background:'linear-gradient(180deg, #CC6832 0%, rgba(204, 104, 50, 0.15) 100%)',height:'1px'}}></div> */}
           
        </>
    )
}