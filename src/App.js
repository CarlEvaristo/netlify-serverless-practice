import React from 'react';
import axios from "axios"

function App() {
  // const [quote, setQuote] = React.useState("")
  // const URL = "https://ron-swanson-quotes.herokuapp.com/V2/QUOTES"

  // function getQoute() {
  //   axios.get(URL)
  //     .then(res => console.log(res))
  // }

  return (
    <div className="App">
      <h1>Ron Swanson Quote Generator</h1>
      {/* <button onClick={getQoute}>Get Quote</button>
      <p>Quote: {quote.data[0]}</p> */}
    </div>
  );
}

export default App;
