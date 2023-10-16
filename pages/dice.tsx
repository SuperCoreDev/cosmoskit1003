import { useEffect, useRef, useState } from "react";
import { NavButton, PickButton } from "../components/styleComponent";
import Image from 'next/image'
import STARLOGO from '../public/img/star_logo.png'
const css = "bg-[#eab52e] text-[#29192c]"
const defaultcss = "text-[#eab52e]"
const Dice = () => {
    const cube = useRef<HTMLDivElement>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [degX, setDegX] = useState(0);
    const [degY, setDegY] = useState(0);
    const [gambled_with , setGambledTokenAmount] = useState(100);
    const [isOddEven , setIsOddEven] = useState(2);
    const [gamebledBtnState,setGamebledButtonState] = useState(1);
    const [expectation,setExpectation] = useState(1);
    const rotate = [[180, 180], [180, 90], [180, 360], [180, -90], [90, 360], [-90, 360]];
    const rolldice = () => {
        const rotateDeg = rotate[Math.floor(Math.random() * 6)];
        console.log(rotateDeg)
        setDegX(rotateDeg[0] * 31);
        setDegY(rotateDeg[1] * 31);
        setIsTransitioning(true);
    }
    const handleButton = (index:number,no:number) => {
        setGambledTokenAmount(index);
        setGamebledButtonState(no);
    }

    const handleIsHeadTail = (index:number,no:number) => {
        setIsOddEven(index);
        setExpectation(no);
    }
    useEffect(() => {
        if (!cube.current) return;
        if (isTransitioning) {
            cube.current.style.transition = "transform 10s ease-in-out 0s";
            cube.current.style.transform = "rotateX(" + degX + "deg)" + " rotateY(" + degY + "deg)";
        }
    }, [isTransitioning, degX, degY])
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
                            <span className="pb-[8px] pt-[7px] px-5 w-full uppercase text-brand-beige font-bold rounded-md ">ODD</span>
                        </PickButton>
                        <PickButton onClick={()=> handleIsHeadTail(1,2)} className={`${expectation==2? css:defaultcss}`}>
                            <span className="pb-[8px] pt-[7px] px-5 w-full uppercase text-brand-beige font-bold rounded-md ">EVEN</span>
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
            <div className="flex flex-col items-center justify-center h-full gap-10 md:order-2 ">
                <div className="md:p-16 p-0">
                    <div className="bg-[#33003D]/30 p-8 rounded-lg">
                        <div className="scene dim mt2 mb4 ">
                            <div ref={cube} className="cube">
                                <div className="bg-[#eab52e] cube__face cube__face--front front">
                                    <span className="dot dot1"></span>
                                </div>
                                <div className="bg-[#eab52e] cube__face cube__face--back back">
                                    <span className="dot dot1"></span>
                                    <span className="dot dot2"></span>
                                </div>
                                <div className=" bg-[#eab52e] cube__face cube__face--right right">
                                    <span className="dot dot1"></span>
                                    <span className="dot dot2"></span>
                                    <span className="dot dot3"></span>
                                </div>
                                <div className=" bg-[#eab52e] cube__face cube__face--left left">
                                    <span className="dot dot1"></span>
                                    <span className="dot dot2"></span>
                                    <span className="dot dot3"></span>
                                    <span className="dot dot4"></span>
                                </div>
                                <div className="bg-[#eab52e] cube__face cube__face--top top">
                                    <span className="dot dot1"></span>
                                    <span className="dot dot2"></span>
                                    <span className="dot dot3"></span>
                                    <span className="dot dot4"></span>
                                    <span className="dot dot5"></span>
                                </div>
                                <div className=" bg-[#eab52e] cube__face cube__face--bottom bottom">
                                    <span className="dot dot1"></span>
                                    <span className="dot dot2"></span>
                                    <span className="dot dot3"></span>
                                    <span className="dot dot4"></span>
                                    <span className="dot dot5"></span>
                                    <span className="dot dot6"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="px-5 py-[10px] mt-auto text-2xl font-bold font-source-sans-3 text-brand-beige bg-[#eab52e] rounded-[10px]
                 uppercase transition ease-in-out hover:brightness-90 disabled:cursor-not-allowed"
                    onClick={rolldice}>
                    ROLL DICE
                </button>
            </div>
        </div>
    )
}

export default Dice;