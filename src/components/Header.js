import React from 'react'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
import  '../components/Header.css'


function Header() {
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={punkLogo} className="punkLogo" alt="" />
            </div>

            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} alt="" />
                </div>
                    <input  placeholder="Collection Items ......" className="searchInput" />
            </div>

            <div className="headerItems">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>

            <div className="headreActions">
                <div className="themeSwitchContainer">
                    <img src={themeSwitchIcon} alt="" />
                </div>
            </div>
            <div className="loginButton">
                GET IN
            </div>
        </div>
    )
}

export default Header
