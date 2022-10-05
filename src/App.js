import React from 'react';
import axios from "axios"

function App() {
  const [quote, setQuote] = React.useState("")
  const [greeting, setGreeting] = React.useState("")
  const [db, setDb] = React.useState("")

  // function getQoute() {
  //   axios.get("https://ron-swanson-quotes.herokuapp.com/V2/QUOTES")
  //     .then(res => setQuote(res))
  // }
  
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

  function getDB(){
    fetch("/api/mongo")
      .then(res => res.json())
      .then(res => setDb(res))
      .catch(err => console.log("ERROR: ", err))
  }


  return (
    <div className="App">
      <h1>Ron Swanson Quote Generator</h1>

      <button onClick={getQuoteThroughServer}>Get Quote</button>
      <p>Quote: {quote}</p>

      <button onClick={getGreeting}>Get Greeting</button>
      <p>Say: {greeting}</p>

      <button onClick={getDB}>Get DB</button>
      <p>DB: {db}</p>
    </div>
  );
}

export default App;
