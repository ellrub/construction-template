import React from "react"
import { motion } from "framer-motion";

import "./Header.scss"

function Header() {
    return (
        <header id="hjem">
            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 1.5, ease: "easeOut"}}
                >
                <h3>17 års erfaring</h3>
                <h2>Graving, sprenging eller transport? vi tar jobben</h2>
                <p>
                    En erfaren entreprenør som utfører tjenester i Bergen og omeng. Kontakt oss i dag for et uforpliktende tilbud.
                </p>
            </motion.div>
            <motion.div 
                className="header__buttons"
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 1.5, ease: "easeOut"}}>
                <a className="about" href="#om oss">Om Oss</a>
                <a className="service" href="#tjenester">Tjenester</a>
            </motion.div>
            <motion.div
            className="header__buttons"
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 1.5, ease: "easeOut"}}
            >
                <a className="contact" href="#kontakt">Kontakt Oss</a>
            </motion.div>
            <div id="om oss"></div>
        </header>
    )
}

export default Header;