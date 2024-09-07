import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const dataRes = await response.json();
    console.log(dataRes);
    setData(dataRes);
  };

  const postPutAdd = () => {
    const userTest = {
      id: "1234",
      name: "Priyam Patra",
      email: "pp@gmail.com",
    };
    const url = data.id
      ? "https://jsonplaceholder.typicode.com/comments" + data.id
      : "https://jsonplaceholder.typicode.com/comments";
    const postPutData = fetch(url, {
      method: data.id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(userTest),
    });
    if (postPutData.state === 200) {
      alert("Upload Successful");
    }
  };

  return (
    <div className="App">
      <button onClick={postPutAdd}>Submit</button>

      {data.map((item) => {
        return <div>{item.email}</div>;
      })}
    </div>
  );
}

export default App;
