import { PickButton} from "../components/styleComponent"
import Heads from '../public/img/HEAD.png'
import Tails from '../public/img/TAIL.png'
import { useEffect, useRef, useState } from "react"
import Image from 'next/image'
import STARLOGO from '../public/img/star_logo.png'
const css = "bg-[#eab52e] text-[#29192c]"
const defaultcss = "text-[#eab52e]"
const Coinflip = () =>{
    const coinRef = useRef<HTMLDivElement>(null);
    const [isFlipping , setIsFlipping] = useState(false);
    const [flippingDeg,setFlippingDeg] = useState(0);
    const [gambled_with , setGambledTokenAmount] = useState(100);
    const [isHeadTail , setIsHeadTail] = useState(2);
    const [gamebledBtnState,setGamebledButtonState] = useState(1);
    const [expectation,setExpectation] = useState(1);
    useEffect(()=>{ 
        const timerid = setTimeout(() => {
           setIsFlipping(false);
         }, 6000);
         if(!coinRef.current) return;
         if(!isFlipping){
            coinRef.current.style.transition = 'none';
            if((flippingDeg/180) %2 === 0)
                coinRef.current.style.transform = `rotateY(0deg)`;
            else coinRef.current.style.transform = `rotateY(180deg)`;
         } 
         else coinRef.current.style.transform = `rotateY(${flippingDeg}deg)`;
         return () => clearInterval(timerid);
    },[isFlipping,flippingDeg])
    
    const flipcoin = () => {
        setIsFlipping(true);
        if(!coinRef.current) return;
        coinRef.current.style.transition = 'transform ease-in-out 6s'
        setFlippingDeg(360*6+180*Math.floor(Math.random()*2));
        if(!isFlipping){
            if((flippingDeg/180)%2 === isHeadTail) {}
            else {}
        }
    }
    const handleButton = (index:number,no:number) => {
        setGambledTokenAmount(index);
        setGamebledButtonState(no);
    }

    const handleIsHeadTail = (index:number,no:number) => {
        setIsHeadTail(index);
        setExpectation(no);
    }
    return (
        <div className="flex flex-col items-center justify-between w-full h-full bg-[#FFF1CC] gap-11 md:flex-row md:justify-between rounded-[20px] p-[30px]">
            <div className="flex flex-col order-2 w-full gap-6">
                <div className="flex flex-wrap items-center justify-between rounded-lg w-full max-w-md bg-[#29192C] md:mx-0" role="tablist" aria-orientation="horizontal">
                    <PickButton onClick={() => {handleButton(100,1)}} className={`${gamebledBtnState==1? css:defaultcss}`}>
                        <span className="flex items-center py-2 px-3 w-full uppercase  font-bold rounded-md ">
                            100
                            <Image src={STARLOGO} width={'20px'} height={'20px'} alt="STAR_LOGO"/>
                        </span>
                    </PickButton>
                    <PickButton onClick={() => handleButton(150,2)} className={`${gamebledBtnState==2? css:defaultcss}`}>
                        <span className="flex items-center py-2 px-3 w-full uppercase  font-bold rounded-md">
                            150
                            <Image src={STARLOGO} width={'20px'} height={'20px'} alt="STAR_LOGO"/>
                        </span>
                    </PickButton>
                    <PickButton onClick={() => handleButton(200,3)} className={`${gamebledBtnState==3? css:defaultcss}`}>
                        <span className="flex items-center py-2 px-3 w-full uppercase  font-bold rounded-md">
                            200
                            <Image src={STARLOGO} width={'20px'} height={'20px'} alt="STAR_LOGO"/>
                        </span>
                    </PickButton>
                    <PickButton onClick={() => handleButton(250,4)} className={`${gamebledBtnState==4? css:defaultcss}`}>
                        <span className="flex items-center py-2 px-3 w-full uppercase  font-bold rounded-md">
                            250
                            <Image src={STARLOGO} width={'20px'} height={'20px'} alt="STAR_LOGO"/>
                        </span>
                    </PickButton>
                    <PickButton onClick={() => handleButton(300,5)} className={`${gamebledBtnState==5? css:defaultcss}`}>
                        <span className="flex items-center py-2 px-3 w-full uppercase  font-bold rounded-md">
                            300
                            <Image src={STARLOGO} width={'20px'} height={'20px'} alt="STAR_LOGO"/>
                        </span>
                    </PickButton>
                    <PickButton onClick={() => handleButton(350,6)} className={`${gamebledBtnState==6? css:defaultcss}`}>
                        <span className="flex items-center py-2 px-3 w-full uppercase  font-bold rounded-md">
                            350
                            <Image src={STARLOGO} width={'20px'} height={'20px'} alt="STAR_LOGO"/>
                        </span>
                    </PickButton>
                </div>
                <div className="flex flex-col items-center gap-6 md:items-start lg:flex-row">
                    <div className="flex gap-2 p-1 mx-auto rounded-lg w-fit h-[40px] bg-[#29192C] md:mx-0" role="tablist" aria-orientation="horizontal">
                        <PickButton onClick={()=> handleIsHeadTail(0,1)} className={`${expectation==1? css:defaultcss}`}>
                            <span className="pb-[8px] pt-[7px] px-5 w-full uppercase text-brand-beige font-bold rounded-md ">HEAD</span>
                        </PickButton>
                        <PickButton onClick={()=> handleIsHeadTail(1,2)} className={`${expectation==2? css:defaultcss}`}>
                            <span className="pb-[8px] pt-[7px] px-5 w-full uppercase text-brand-beige font-bold rounded-md ">TAIL</span>
                        </PickButton>
                    </div>
                </div>
                <div className="flex flex-col w-full h-full max-w-md mx-auto mt-10 lg:mx-0">
                    <div className="w-full flex justify-center items-center p-4 rounded-t-[10px]  bg-[#eab52e]">
                        <h4 className="text-lg font-bold text-white self-center uppercase">Recent Plays</h4>
                    </div>
                    <div className="w-full rounded-b-[10px] p-3 bg-[#29192C] backdrop:blur-lg shadow-sm shadow-black/40">
                        <p>Loading...</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-10 md:order-2">
                <div className="p-[20px] coin-shadow bg-center rounded-full">
                    <div ref={coinRef} className="text-md coin md:text-[2rem]" style={{zIndex: '1',transform: 'rotateY(0deg) translateZ(0px)'}}>
                        <div className="coin-front">
                            <div className="depth-front">
                                <Image src={Heads} alt="HEADS"/>
                            </div>
                        </div>
                        <div className="coin-middle"></div>
                        <div className="coin-back">
                            <div className="depth-back">
                                <Image src={Tails} alt="TAILS"/>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="px-5 py-3 mt-auto text-xl text-highlight font-bold rounded-[10px] uppercase transition ease-in-out bg-[#eab52e] 
                    hover:brightness-90 disabled:cursor-not-allowed"
                    onClick={flipcoin}>
                    FLIP COIN
                </button>
            </div>
        </div>
    )
}

export default Coinflip;