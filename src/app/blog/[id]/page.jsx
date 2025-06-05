import { blogs } from '../../blogs';
import Whatsapp from '../../components/Whatsapp';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import Head from 'next/head'; // ✅ Import Head

// Static generation helper
export function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

// Main page component
const SingleBlogPage = ({ params }) => {
  const { id } = params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <>
      <Head>
        <title>{blog.metaTitle || blog.title}</title>
        <meta name="description" content={blog.metaDescription || blog.description} />
        {blog.metaKeywords && <meta name="keywords" content={blog.metaKeywords} />}
        <meta property="og:title" content={blog.metaTitle || blog.title} />
        <meta property="og:description" content={blog.metaDescription || blog.description} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://www.aanyasolutions.com/blog/${blog.id}`} />
    </Head>

      <Nav />
      <div className="single-blog">
        <h1>{blog.title}</h1>
        <img src={blog.image} alt={blog.title} />
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
      <Whatsapp />
      <Footer />
    </>
  );
};

export default SingleBlogPage;
