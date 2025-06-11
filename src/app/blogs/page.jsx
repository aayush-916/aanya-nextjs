import { blogs } from '../blogs';
import BlogCard from '../components/BlogCard';
import Nav from '../components/Nav';
import Whatsapp from '../components/Whatsapp';
import Footer from '../components/Footer';


export const metadata = {
  title: 'Tech Insights & Business Solutions Blog | Aanya Solutions',
  description: 'Explore the Aanya Solutions blog for expert insights on back office services, business process optimization, technology trends, and strategies to drive growth and efficiency in your organization.',
  keywords: 'back office services, data entry, record maintenance, data audits, data analysis, business support India, Aanya Solutions',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.aanyasolutions.com/blogs',
  },
};

const BlogPage = () => {
  // Reverse the blogs array to show the latest blog first
  const sortedBlogs = [...blogs].reverse();

  return (
    <>


      <Nav />

      <div className="blog-list">
        <h2>Our Blogs</h2>
        <div className="grid">
          {sortedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>

      <Whatsapp />
      <Footer />
    </>
  );
};

export default BlogPage;
