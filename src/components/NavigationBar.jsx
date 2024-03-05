import React, { useState } from 'react'
import Logo from '../assets/Logo.png';
import { LayoutDashboard, Clock3, BarChart2, ArrowRightLeft, HelpCircleIcon, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
const navLinks = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Activity",
        icon: Clock3,
    },
    {
        name: "Analitycs",
        icon: BarChart2,
    },
    {
        name: "Transactions",
        icon: ArrowRightLeft,
    },
    {
        name: "Help Center",
        icon: HelpCircleIcon,
    },
]

const variants = {
    expanded: { width: "20%", minWidth: "275px" },
    nonExpanded: { width: "5%", minWidth: "78px" },
    transition: { duration: 2 }
}

function NavigationBar({ isEntered, setIsEntered, isExpanded, setIsExpanded }) {
    const [activeNavIndex, setActiveNavIndex] = useState(0);
    // const [isExpanded, setIsExpanded] = useState(true);
    // const [isEntered, setIsEntered] = useState(false);


    const openSidebar = (newExpandedState) => {
        if (!isEntered) {
            setIsExpanded(false); // Menutup sidebar jika mouse tidak di atasnya
        } else {
            setIsExpanded(newExpandedState); // Meneruskan nilai baru untuk isExpanded
        }
        setIsEntered(false); // Mengatur isEntered menjadi false setelah digunakan
    }
    const toggle = () => {
        if (!isExpanded || isEntered) {
            setIsExpanded(false)
            setIsEntered(true)

        } else if (isEntered) {
            setIsExpanded(true)
        }


    }
    return (
        <motion.div
            onMouseOut={() => setIsEntered(true)}
            // Mengatur isEntered menjadi true saat mouse masuk
            onMouseLeave={() => setIsEntered(false)} // Mengatur isEntered menjadi false saat mouse keluar
            // onClick={() => openSidebar(!isExpanded)} // Menutup atau membuka sidebar tergantung pada isExpanded
            animate={
                isExpanded || isEntered ? "expanded" : "nonExpanded"
            }


            variants={variants}
            className={"py-12 z-10 flex flex-col border-r-1 w-1/5 h-screen relative bg-white border-r-1 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] " + (isExpanded ? "px-10 " : "px-5")}>
            <div className='logo-div flex space-x-3 items-center'>
                <img src={Logo} alt="" />
                <motion.span
                    className={isExpanded || isEntered ? "block" : "hidden"}
                    initial={{ opacity: 1 }}
                    animate={isExpanded || isEntered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ ease: "easeOut" }}
                >
                    Money Tracker
                </motion.span>
            </div>
            {
                isEntered || isExpanded ? (<div
                    onClick={() => { setIsExpanded(!isExpanded); setIsEntered(false) }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 hover:cursor-pointer  bg-[#f8f8f8] border-l-2 border-collapse border-spacing-4 border-b-2 border-t-2 rounded-full absolute -right-[12.5px] top-18 flex justify-center items-center  shadow-[0px_0px_120px_0px_rgba(255,255,255,0.1)]">
                    <div className="w-6 h-6 bg-[#FF8C8C] rounded-full absolute flex text-white justify-center items-center">
                        <ArrowRight className='w-3 font-semibold' />
                    </div>
                </div>) : <div></div>
            }

            <div className="mt-10 flex flex-col space-y-8">
                {navLinks.map((item, index) => (
                    <div key={index}
                        className={'flex space-x-3 p-2 rounded-md cursor-pointer' + (activeNavIndex === index ? " bg-[#FF8C8C] text-white font-semibold" : "")}
                        onClick={() => setActiveNavIndex(index)}
                    >
                        <item.icon />
                        <span className={isExpanded || isEntered ? 'block' : 'hidden'}>{item?.name}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default NavigationBar
