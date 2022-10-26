import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__flex nav__menu">
            <h2>Bergen & Omegn Entreprenør AS</h2>
            <ul className="app__flex app__capitalize app__hide">
                {["hjem", "om oss", "tjenester", "kontakt oss"].map((item) => (
                    <li key={`link-${item}`}>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
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