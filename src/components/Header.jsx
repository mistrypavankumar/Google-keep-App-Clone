import React from 'react'
import "./../components/Header.css"
import logo from "./../assets/logo.png";

export default function Header() {
    return (
        <>
        <div className="container">
          <div className="header">
              <img src={logo} alt="logo"/>
          </div>  
          </div>
        </>
    )
}
