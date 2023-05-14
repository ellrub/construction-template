import React from "react"
import { BsFillTelephoneFill, BsFillEnvelopeOpenFill } from "react-icons/bs";

import "./Footer.scss"

function Footer() {
    return (
        <footer id="kontakt oss">
            <h2>Kontakt Oss</h2>
            <h3>Bergen & Omegn Entreprenør AS</h3>
            <div className="footer__contacts--container">
                <div className="footer__contacts--card">
                    <p>Vidar Tveit ( Daglig leder )</p>
                    <a href="tel: +47 464 42 491"><BsFillTelephoneFill /> +47 464 42 491</a><br />
                    <a href="mailto:vidar@boent.no"><BsFillEnvelopeOpenFill /> vidar@boent.no</a>
                </div>
                <div className="footer__contacts--card">
                    <p>Øystein Tveit</p>
                    <a href="tel: +47 464 42 492"><BsFillTelephoneFill /> +47 464 42 492</a><br />
                    <a href="mailto:oystein@boent.no"><BsFillEnvelopeOpenFill /> oystein@boent.no</a>
                </div>
            </div>
                <a className="contacts--card-company" href="mailto:boent@boent.no"><BsFillEnvelopeOpenFill /> boent@boent.no</a>
        </footer>
    )
}

export default Footer;