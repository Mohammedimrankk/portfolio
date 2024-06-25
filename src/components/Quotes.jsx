import { useState, useEffect } from 'react';

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    let realData = await data.json();
    return realData;
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return [];
  }
}

function Quotes() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotes = await getQuotes();
      setQuotes(quotes);
    }
    fetchQuotes();
  }, [])

  const fnQuotes = () => {
    if (quotes.length > 0) {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    }
  }

  return (
    <div name="quotes" className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f]">
      <div id='quotes' className="text-center">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p className="text-xl">{quote.text}</p>
              <footer className="blockquote-footer text-right mt-2">
                {quote.author || "Unknown"}
              </footer>
            </blockquote>
          </div>
        </div>
        <button className="mt-5 font-bold bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300" onClick={fnQuotes}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Quotes;
