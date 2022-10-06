import React from 'react';

function App() {
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
    fetch("/api/esmmongo")
      .then(res => res.json())
      .then(res => console.log("RES: ", res))
  },[])

  return (
    <div className="App">
      <h1>Ron Swanson Quote Generator</h1>

      <button onClick={getQuoteThroughServer}>Get Quote</button>
      <p>Quote: {quote}</p>

      <button onClick={getGreeting}>Get Greeting</button>
      <p>Say: {greeting}</p>

    </div>
  );
}

export default App;
