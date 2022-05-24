import React from 'react'
import './navbar.css'

export default function Navbar(){
    const linkSets = [
        {
            name: 'home',
            className: 'home',
            link: '/',
        },
        {
            name: 'predict',
            className: 'predict',
            link: '/predict',
        }
    ]
    const navigateLink = (link) =>{
        window.location.href = link
    }

    return(
        <nav>
            <div className='navbar-title'>
                <p>Sleep Disorder Predict</p>
            </div>
            <div className='navbar-links'>
                {linkSets.map((val, id) =>
                    <div className={`${val.className}-link navbar-link`} key = {id} onClick={()=>navigateLink(val.link)}>
                        <p>{val.name}</p>
                    </div>
                )}
            </div>
        </nav>
    )
}