import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  // const title = "Welcome to my practice React blog";
  // const likes = 50;
  //Strings and Numbers are fine to output.
  //Booleans and Objects can NOT be output in this fashion.
  //const person = { name: "Bryan", age: 39 }; This won't work.
  // const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p> */}
        <Home />
      </div>
      {/* <p>{10}</p>
      <p>{"Hello, everyone!"}</p>
      <p>{[1, 2, 3, 4, 5]}</p>
      <p>{Math.random() * 10}</p>

      <a href={link}>Google Site</a>  */}
    </div>
  );
}

export default App;

//This is a component.
//A component is basically a function that must be returned.

//Attributes can be set with variables the way we did here with the link variable
