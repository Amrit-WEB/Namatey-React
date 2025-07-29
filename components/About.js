// function About() {
//   return (
//     <div>
//       <h1>About Us</h1>
//     </div>
//   );
// }

// export default About;

import { useState, useEffect } from "react";

function About() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://api.quotable.io/random"
      );
      // const response = await fetch("https://zenquotes.io/api/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      setQuote("Problem with fetching quote");
      console.log(error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        padding: "20px",
      }}
    >
      <h1>{quote}</h1>
      <h2 style={{ color: "red", fontSize: "15px" }}>{author}</h2>
      <button onClick={fetchData}>Another</button>
    </div>
  );
}

export default About;
