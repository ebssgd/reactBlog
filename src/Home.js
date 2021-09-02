import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Bryan", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "Igor", id: 2 },
    { title: "Web dev tips", body: "lorem ipsum...", author: "Bryan", id: 3 },
  ]);
  //let name = "Mario"; //This variable isn't reactive.
  //const [name, setName] = useState("Mario"); //This sets the original value
  //of the variable 'name' as Mario, but it is now reactive, and the setName
  //function is used to change/update it.
  //Typically, setVariableName is used, so since we called the variable 'name'
  //setName is what we use to change it.
  //In 'useState', the datatype is not important, we can use whatever we wish
  //const [age, setAge] = useState(25);
  //const handleClick = () => {
  // name = "Luigi"; //When it is changed here, the value remains the same
  // because React doesn't know to look for it to change and rerender when it does
  // console.log(name);
  //setName("Luigi"); //This uses the function we created above to update the
  //name variable
  //setAge(30);

  //   const handleClickAgain = (name) => {
  //     console.log("Hello, " + name);
  //   };

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </div>
      ))}
      {/* <h2>Homepage</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain("Luigi")}>Click me again</button> */}
    </div>
  );
};

export default Home;

//The onClick function will run when the button is pressed.
//You do not want to invoke the function right away ()
//or it will run when the page refreshes

//The onClickAgain function demonstrates how to pass in a value without
//invoking the expression right away. You need to wrap it in another function
//So, the {() => {function to be invoked goes here}} syntax is used.
//Note the internal set of {} are not needed if you put everything on one line

//The key property is how React keeps track of each time we go through a list.
//It must be added if we are doing some kind of loop and returning a different
//value for each iteration.
