import React from "react"

export default function Mongo(){
    const [quote, setQuote] = React.useState("")
    const [greeting, setGreeting] = React.useState("")
    
    function getQuoteThroughServer() {
      fetch("/api/quote")
      .then(res => res.json())
      .then(res => setQuote(res))
      .catch(err => console.log("ERROR: ", err))
    }
  
    function getGreeting(){
      fetch("/api/hello")
        .then(res => res.json())
        .then(res => setGreeting(res))
        .catch(err => console.log("ERROR: ", err))
    }
    React.useEffect(()=>{
      fetch("/api/mongo")
        .then(res => res.json())
        .then(res => console.log("RES: ", res))
    },[])
  
    return (
      <div className='container'>
        <h1>Mongo</h1>
  
        <button onClick={getQuoteThroughServer}>Get Quote</button>
        <p>Quote: {quote}</p>
  
        <button onClick={getGreeting}>Get Greeting</button>
        <p>Say: {greeting}</p>
  
      </div>
    )
}