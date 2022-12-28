import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post/Post";

function App() {
  const posts = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      author: "Lorem ipsum",
      about: "Lorem ipsum dolor sit",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      author: "Lorem ipsum",
      about: "Lorem ipsum dolor sit",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      author: "Lorem ipsum",
      about: "Lorem ipsum dolor sit",
    },
  ];

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        {posts.map((post) => (
          <Post {...post} />
        ))}
      </main>
    </div>
  );
}

export default App;
