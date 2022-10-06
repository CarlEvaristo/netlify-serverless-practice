import React from 'react'
import "./Item.css"
import { Link } from "react-router-dom"

export default function Item({props}) {
    const [currLoc, setCurrLoc] = React.useState([])

    function deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
    }

    React.useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let long = position.coords.longitude
            lat && long && setCurrLoc([lat, long])
        })
    },[])

    const itemLoc = props.address.location.coordinates
    const distance = getDistanceFromLatLonInKm(currLoc[0], currLoc[1], itemLoc[1], itemLoc[0])

    return (
        <div className='item'>
        <Link to={`/rooms/${props._id}`} target="_blank">
            <div className='itemCaroussel'>
                <img src={props.images.picture_url} alt={props.name} />
            </div>
            <div className='itemData'>
                <p className='bold'>{props.address.market}, {props.address.country}</p>
                <p>{props.name.length > 25 ? (props.name).slice(0,25)+"..." : props.name}</p>
                <p>Distance: {distance.toFixed(2)} km</p>
                <p><span className='bold'>$ {props.price.$numberDecimal}</span> night</p>
                {props.review_scores.review_scores_rating && <span className='itemRating'><i className="fa-sharp fa-solid fa-star"></i>  {props.review_scores.review_scores_rating/20}</span>}
            </div>
        </Link>
        </div>
    )
}
