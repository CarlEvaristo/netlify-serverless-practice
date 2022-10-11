import React from 'react'
import "./Popup.css"

export default function Popup({handlePopupClick, showPopup}) {

    return (
        <div className={showPopup ? 'overlay' : 'overlayClosed'} >
            <div className='container'>
                <div className='modalHeader'>
                    <button className='modalClose' onClick={handlePopupClick}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
