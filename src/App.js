import React from 'react';
import axios from "axios"

function App() {
  const [quote, setQuote] = React.useState("")
  const [greeting, setGreeting] = React.useState("")
  const [time, setTime] = React.useState("")

  function getQoute() {
    axios.get("https://ron-swanson-quotes.herokuapp.com/V2/QUOTES")
      .then(res => setQuote(res))
  }

  function getGreeting(event){
    fetch("/api/hello")
      .then(res => res.json())
      .then(res => setGreeting(res))
      .catch(err => console.log("ERROR: ", err))
  }

  React.useEffect(()=>{
    fetch("/api/time")
      .then(res => res.json())
      .then(res => console.log("TIME: ", res))
      .catch(err => console.log("ERROR: ", err))
  },[])


  return (
    <div className="App">
      <h1>Ron Swanson Quote Generator</h1>
      <h2>{time}</h2>
      <button onClick={getQoute}>Get Quote</button>
      <p>Quote: {quote.data}</p>
      <button onClick={getGreeting}>Get Greeting</button>
      <p>Say: {greeting}</p>
    </div>
  );
}

export default App;
