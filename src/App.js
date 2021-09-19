import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // fetch data dynamic need to add state
  // post list use state because its a list of object as an empty array
  // use jsx syntax to map over it for each post we create an  function to return on each post a div and a title of post
  // how to fetch this from an api we need to use the fetch as a function
  const [postList, setPostList] = useState([{ title: "test" }]);

  // function that make the request over the network
  // second thing we need to do is from our responsw we need to await the repsonse getting the body into a json onject
  //set post list to the data
  async function fetchPostList() {
    const response = await fetch("http://localhost:3004/posts");
    const data = await response.json();
    setPostList(data);
  }
  return (
    <div className="App">
      {postList.map((post) => {
        return (
          <div>
            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
