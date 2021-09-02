const BlogList = ({ blogs, title, handleDelete }) => {
  //const blogs = props.blogs; //By passing the props Object into the function,
  //we are then able to use it here in order to have it be passed into the function
  //that we are returning
  //We don't need to set the variable this way either. We can use destructuring
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
