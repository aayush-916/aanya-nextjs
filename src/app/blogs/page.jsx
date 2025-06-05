import { blogs } from '../blogs';
import BlogCard from '../components/BlogCard';
import Nav from '../components/Nav';
import Whatsapp from '../components/Whatsapp';
import Footer from '../components/Footer';
import Head from 'next/head';

const BlogPage = () => {
  // Reverse the blogs array to show the latest blog first
  const sortedBlogs = [...blogs].reverse();

  return (
    <>

<Head>
        <title>Tech Insights & Business Solutions Blog | Aanya Solutions</title>
        <meta
          name="description"
          content="Explore the Aanya Solutions blog for expert insights on back office services, business process optimization, technology trends, and strategies to drive growth and efficiency in your organization."
        />
        <meta
          name="keywords"
          content="back office services, data entry, record maintenance, data audits, data analysis, business support India, Aanya Solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.aanyasolutions.com/blogs" />
      </Head>


      <Nav />

      <div className="blog-list">
        <h1>Our Blogs</h1>
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
