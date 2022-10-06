import React from 'react'
import Item from '../components/Item.js'
import "./Listing.css"

export default function Listing() {
  const [list, setList] = React.useState([])
  
  React.useEffect(()=>{
    fetch("/api/mongo")
      .then(res => res.json())
      .then(res => setList(res))
  },[])

  const listElements = list.map(item => <Item props={item} key={item._id}/> )

  return (
    <div className='container mainContainer'>
      <h1>Listing</h1>
      <div className='listing'>
        {listElements}
      </div>
    </div>
  )
}
