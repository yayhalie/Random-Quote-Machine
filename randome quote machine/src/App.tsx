import React from 'react';
import { useState } from 'react';
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight, FaTumblr} from 
"react-icons/fa";
import './App.css';

interface Quote {
  quote: string;
  author: string;
}


const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};


function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  const changeQuote = () =>{
    setQuote(getRandomQuote());
  }
  
  return (
  <div className="background">
    <div id="quote-box">
    <div className = "quote-content">
      
      <FaQuoteLeft size ="30" style= {{marginRight:"10px"}}/>
      <h2 id="text">{quote.quote}</h2>
      <FaQuoteRight size ="30" style= {{marginLeft:"10px"}}/>
      <h4 id="author">-{quote.author}</h4>
      <div className="buttons">
        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Few%20things%20can%20help%20an%20individual%20more%20than%20to%20place%20responsibility%20on%20him%2C%20and%20to%20let%20him%20know%20that%20you%20trust%20him.%22%20Booker%20T.%20Washington`}
        id="tweet-quote"
        style={{backgroundColor : "#1DA1F2",
          marginRight:"10px"
        }}
        >
          <FaTwitter color="white"/></a>


        <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Booker%20T.%20Washington&content=Few%20things%20can%20help%20an%20individual%20more%20than%20to%20place%20responsibility%20on%20him%2C%20and%20to%20let%20him%20know%20that%20you%20trust%20him.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
        id="tumblr-quote"
        style={{backgroundColor:"#1DA1F2",
          marginRight:"10px"
        }}
        >
          <FaTumblr color="white"/></a>
        
        <button id ="new-quote" onClick={changeQuote}>New Quote</button>
      </div>
      </div>
    </div>
  </div>);
}

export default App;