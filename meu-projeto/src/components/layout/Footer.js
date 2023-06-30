import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import React from "react"
import styles from './Footer.module.css'



function Footer() {
    return(
        <footer>
            <ul className="social_list">
                <li>
                <FaFacebook/>
                </li>
                <li>
                <FaInstagram/>
                </li>
                <li>
                <FaLinkedin/>
                </li>
            </ul>    
            <p> Nosso rodapé</p>
        </footer>
    )
}

export default Footer