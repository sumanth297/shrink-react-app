import React, { useState } from "react";
import axios from "axios";
function Example() {
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://example.com/api/data", {
        url: "John Doe"
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <button type="submit">Shrink URL</button>
    </form>
  );
}

export default Example;
