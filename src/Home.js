import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  // { title: "My new website", body: "lorem ipsum...", author: "Bryan", id: 1 },
  // { title: "Welcome party!", body: "lorem ipsum...", author: "Igor", id: 2 },
  // { title: "Web dev tips", body: "lorem ipsum...", author: "Bryan", id: 3 },

  //const [name, setName] = useState("Mario");

  // useEffect(() => {
  //   fetch("http://localhost:8000/blogs")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw Error("Could not fetch the data.");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       //console.log(data);
  //       setBlogs(data);
  //       setIsPending(false);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setIsPending(false);
  //       setError(err.message);
  //     });
  //   //console.log("Use effect ran.");
  //   //console.log(name);//Passing in name to the [] will rerender based on name
  // }, []); //useEffect runs every time the page rerenders
  //Be careful of using the useState inside useEffect.
  //You may end up in an endless loop of rerenders.
  //The array at the end is the dependency array. If left empty, useEffect
  //only runs on the first time the page renders
  //If there is a value in it, it will rerun any time that element changes

  //We have to use .then here. async/await won't work.
  //You would have to create an external function, pass it in here
  //and then it would be fine.

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
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <button onClick={() => setName("Luigi")}>Change name</button>
      <p>{name}</p> */}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Bryan")}
        title="Bryan's Blogs!"
      /> */}
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

//blogs={blogs} is how you set up a prop. It still needs to be set up
//in the file you are importing the BlogList component from

//The second BlogList was used to demonstrate how to select only certain pieces
//of information that you want to display

//The handleDelete function is created here because this is where the data is.
//We want to interact with the data directly.
//We can pass the function over as a prop

//&& evaluates the left side first. So, if the blogs is null,
//it won't even bother to check the right side. So, the thing on the left
//won't ever be rendered if the thing on the right is null
