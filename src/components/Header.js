import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className='container headerContainer'>
            <div className='headerLogo'>
                <i className="fa-brands fa-airbnb"></i><p>airbnb</p>
            </div>
            <div className='headerDatePicker'>
            </div>
            <div className='headerSignIn'>
                <Link to="/">Listing</Link>
                <Link to="/mongo">Mongo</Link>
            </div>

        </div>
    </div>
  )
}
