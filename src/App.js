import React from 'react';
import './App.css';

function App() {
  
  const style = {
    width: '100vw', 
    maxWidth: '750px',
    minHeight: '1000px',
    padding: '0', 
    overflow: 'hidden',
    border:'none',
    display: 'block', 
    margin: '0 auto',
    outline: 'none',
  }
  return (
    <div className="App">
        <iframe 
        src="https://infallible-kare-f8cd09.netlify.app/" 
        style={style}
        title="Crystal Ball Fundraiser" ></iframe>
    </div>
  );
}

export default App;
