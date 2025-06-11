import { blogs } from "../blogs";
import BlogCard from "./BlogCard";

const BlogThree = () => {
  // Reverse and get only the latest three blogs
  const latestThreeBlogs = [...blogs].reverse().slice(0, 3);

  return (
    <div className="blog-list">
      <h2>Our latest blog</h2>
      <div className="grid">
        {latestThreeBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogThree;
