import React from 'react'
import LogoWide from './../Images/LogoWide.png'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const onClickImg = (e) =>{
        navigate("/")
    }
    
    const onClickDemo = (e) =>{
        navigate("/demo")
    }

    const onClickFeatures = (e) =>{
        navigate("/");
        document.getElementById('feature').scrollIntoView();
    }

    return (
        <div className='flex page'>
            <div className = "nav left">
                <img className = "tenpercent" src={LogoWide} alt="AISign Logo" onClick={onClickImg}></img>
                <div className = "link" href="#feature"  onClick={onClickFeatures} role="button">Features</div>
            </div>
            <div className = "nav">
                <div className = "butto newbtni" onClick={onClickDemo}>Try it out</div>
            </div>
        </div>
    )
}