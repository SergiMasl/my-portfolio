import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [isNavVisible, setNav] = useState(false)
    const handleClick = () => setNav(!isNavVisible)

    const navNames = ['Home', 'About', 'Skills', 'Work', 'Contact']
    const socialBtm = [
        {
            color: 'bg-blue-600',
            icon: <FaLinkedin size={30} />,
            btmName: 'LinkedId',
        },
        {
            color: 'bg-[#333333]',
            icon: <FaGithub size={30} />,
            btmName: 'GitHub',
        },
        {
            color: 'bg-[#6fc2b0]',
            icon: <HiOutlineMail size={30} />,
            btmName: 'Email',
        },
        {
            color: 'bg-[#565f69]',
            icon: <BsFillPersonFill size={30} />,
            btmName: 'Resume',
        },
    ]

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <img src={Logo} alt="Logo Image" style={{ width: '50px' }} />
            </div>
            <div className="hidden md:flex">
                <ul className="hidden md:flex">
                    {navNames.map((navName) => (
                        <li key={navName}>
                            <Link to={navName} smooth={true} duration={500}>
                                {navName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div onClick={handleClick} className="md:hidden z-10">
                {!isNavVisible ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile menu */}
            <div>
                <ul
                    className={
                        !isNavVisible
                            ? 'hidden'
                            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                    }
                >
                    {navNames.map((navName) => (
                        <li className="py-6 text-4xl">
                            <Link
                                onClick={handleClick}
                                to={navName}
                                smooth={true}
                                duration={500}
                            >
                                {navName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    {socialBtm.map((btm) => (
                        <li
                            key={btm.btmName}
                            className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${btm.color}`}
                        >
                            <a
                                className="flex justify-between items-center w-full text-gray-300"
                                href="/"
                            >
                                {btm.btmName} {btm.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
