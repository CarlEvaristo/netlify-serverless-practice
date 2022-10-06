import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail(props) {
    const id = useParams().id

    React.useEffect(()=>{
        fetch("/api/detail",
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({id:id})
        })
            .then(response => response.json())
            .then(res => console.log(res))
    })
        
    return (
        <div>Detail</div>
    )
}
