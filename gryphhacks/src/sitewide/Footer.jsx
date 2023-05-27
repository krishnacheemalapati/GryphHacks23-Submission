import React from 'react'
import LogoWide from './../Images/LogoWide.png'
import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate;

    const onClickImg = (e) =>{
        navigate("/")
    }

    const onClickPrivacy = (e) =>{
        navigate("/privacy")
    }

    return (
        <div className='nav foot page'>
            <img src={LogoWide} className = "fifteenpercent" alt="AI Sign Logo"  onClick={onClickImg}></img>
            <div className="footer-text">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            © AISign, Inc. 2022. All rights reserved. Use of
            this site constitutes acceptance of our User Agreement and <a href="/privacy" onClick={onClickPrivacy}>Privacy Policy and Cookie Statement</a>.<br></br> 
            The AISign Team may earn a portion of sales from
            products that are purchased through our site as part of our
            Affiliate Partnerships with retailers.<br></br> 
            The material on this site
            may not be reproduced, distributed, transmitted, cached or
            otherwise used, except with the prior written permission of The
            AISign.
            </div>
        </div>
    )
}