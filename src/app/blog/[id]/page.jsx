import { blogs } from '../../blogs';
import Whatsapp from '../../components/Whatsapp';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

// ✅ Ensure static generation
export const dynamic = 'force-static';

// ✅ generateStaticParams
export function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

// ✅ Clean generateMetadata with awaited params
export async function generateMetadata({ params }) {
  const { id } = await Promise.resolve(params); // ✅ suppress warning
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return {};

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.description,
    keywords: blog.metaKeywords,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.description,
      images: [blog.image],
      type: 'article',
    },
    alternates: {
      canonical: `https://www.aanyasolutions.com/blog/${id}`,
    },
    metadataBase: new URL('https://www.aanyasolutions.com'),
  };
}

// ✅ Blog Page Component
const SingleBlogPage = async ({ params }) => {
  const { id } = await Promise.resolve(params); // ✅ suppress warning
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <>
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
