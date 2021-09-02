const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The React Practice blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          //   style={{
          //     color: "white",
          //     backgroundColor: "#f1356d",
          //     borderRadius: "8px",
          //   }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

//Using the React snippets extension,
//the base template for this can be created with sfc then the tab key
//Sfc stands for standard functional component

//To use inline styling in React, we need to start with 2 sets of {}
//The first is to tell React that we are passing in a value,
//the second is to signify that we are using an Object in order to set those values
