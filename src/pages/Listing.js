import React from 'react'
import Item from '../components/Item.js'
import "./Listing.css"
import Header from '../components/Header.js'

export default function Listing() {
  const [list, setList] = React.useState([])
  
  React.useEffect(()=>{
    fetch("/api/mongo")
      .then(res => res.json())
      .then(res => setList(res))
  },[])

  const listElements = list.map(item => <Item props={item} key={item._id}/> )

  return (
      <section className='topSection'>
        <div className='listing'>
          {listElements}
        </div>
      </section>
  )
}
