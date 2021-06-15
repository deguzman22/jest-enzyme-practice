import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [names, setNames] = useState([]);

  async function fetchData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const names = await response.data;

    setNames(names);
  }

  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  function renderNames() {

    console.log(names)
    return (
      <ul>
        {names.map(({ name }) => (
          <li key={name} className="names">
            {name}
          </li>
        ))}
      </ul>
    );
  }

  return <div className="App">{renderNames()}</div>;
}

export default App;