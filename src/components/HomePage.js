import { useState, useEffect } from "react";

//REST API
//BY DEFAULT FETCH MAKES A GET
const apiUrl = "http://localhost:3004/posts";
function HomePage() {
  // fetch data dynamic need to add state
  // post list use state because its a list of object as an empty array
  // use jsx syntax to map over it for each post we create an  function to return on each post a div and a title of post
  // how to fetch this from an api we need to use the fetch as a function
  const [postList, setPostList] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  // function that make the request over the network
  // second thing we need to do is from our responsw we need to await the repsonse getting the body into a json onject
  //set post list to the data
  async function fetchPostList() {
    const response = await fetch(apiUrl); //GET
    const data = await response.json();
    setPostList(data); // update our state
  }

  // we can also define what can we send as body we usually say we want the JSON object as a string
  async function createArticle(articleData) {
    // create a post/article
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(articleData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // refetch and refresh the UI
    fetchPostList();
  }

  // need this to happen when the user lands on page so use effect

  useEffect(() => {
    fetchPostList(); // will be called when use lands on page
  }, []);
  // it will execute on component willmouunt
  // onclick takes a function will make in an arrow one
  return (
    <div className="App">
      {postList.map((post) => {
        return (
          <div>
            <p>{post.title}</p>
          </div>
        );
      })}
      <input
        value={newPostTitle}
        onChange={(event) => setNewPostTitle(event.target.value)}
      ></input>
      <button
        onClick={() => {
          createArticle({ title: newPostTitle, author: "user" });
          setNewPostTitle(""); // CLEARS THE INPUT SO THE USER CAN START AGAIN
        }}
      >
        Create A post{" "}
      </button>
    </div>
  );
}

export default HomePage;
