import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__flex nav__menu">
            <div className="app__flex navbar__bar-container">
                <h2><a href="#hjem">Bergen & Omegn Entreprenør AS</a></h2>
                <ul className="app__flex app__capitalize app__hide nav__menu-d">
                    {["hjem", "om oss", "tjenester", "kontakt oss"].map((item) => (
                        <li key={`link-${item}`} className="app__flex">
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="nav__menu-m">
                <HiMenu onClick={() => setToggle(true)} className="app__menu-icon" />
                
                {toggle && (
                    <motion.div
                    whileInView={{y: [-383, 0]}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul className="app__capitalize">
                            {["hjem", "om oss", "tjenester", "kontakt oss"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;