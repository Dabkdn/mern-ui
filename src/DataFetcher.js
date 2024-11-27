// src/DataFetcher.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    axios
      .get(`${process.env.REACT_APP_API_URL}/data-endpoint`)
      .then((response) => setData(response.data))
      .catch((error) =>
        console.error("There was an error fetching the data!", error)
      );
  }, []);

  return (
    <div>
      <h1>Data from Backend</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default DataFetcher;
