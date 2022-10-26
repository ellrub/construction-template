import React from "react"
import { BsFillTelephoneFill, BsFillEnvelopeOpenFill } from "react-icons/bs";

import "./Footer.scss"

function Footer() {
    return (
        <footer>
            <h2>Kontakt Oss</h2>
            <h3>Bergen & Omeng Entreprenør AS</h3>
            <a href="tel: +47 987 65 432"><BsFillTelephoneFill /> +47 987 65 432</a><br/>
            <a href="mailto:din@epost.no"><BsFillEnvelopeOpenFill /> din@epost.no</a>
        </footer>
    )
}

export default Footer;