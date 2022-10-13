import React from 'react';
import {AiFillInstagram, AiOutlineTwitter, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer-container">
            <p>2022 Milos @codedancingstudio</p>
            <p className="icons">
                <AiFillInstagram />
                <AiOutlineTwitter />
                <AiFillLinkedin />
                <AiFillFacebook />
            </p>
        </div>
    )
}

export default Footer
