import React from 'react';
import axios from "axios"

function App() {
  const [quote, setQuote] = React.useState("")
  const URL = "https://ron-swanson-quotes.herokuapp.com/V2/QUOTES"

  function getQoute() {
    axios.get(URL)
      .then(res => setQuote(res))
  }

  function getHello(event){
    fetch(".netlify/functions/hello")
      .then(res => res.json())
      .then(res => setQuote(res))
      .catch(err => console.log("ERROR: ", err))
  }

  return (
    <div className="App">
      <h1>Ron Swanson Quote Generator</h1>
      <button onClick={getQoute}>Get Quote</button>
      <p>Quote: {quote.data}</p>
      <button onClick={getHello}>Say Hello</button>
      <p>Say: {quote}</p>
    </div>
  );
}

export default App;
