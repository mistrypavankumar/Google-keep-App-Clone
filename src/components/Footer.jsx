import React from 'react'

export default function Footer() {

    const year =  new Date().getFullYear();

    const footer = {
        
        "padding" : "3vh",
        "width": "100%",
       
    }
    return (
        <>
            <footer style = {footer}>
                <p style = {{textAlign: "center", fontSize: "18px",}}>copyright © {year}</p>
            </footer>
        </>
    )
}
