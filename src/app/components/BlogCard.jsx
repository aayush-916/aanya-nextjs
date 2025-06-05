'use client';

import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ blog }) => (
  <div className="card">
    <Image
      src={blog.image}
      alt={blog.title}
      width={320}
      height={180}
      className="w-full h-auto"
    />
    <h2>{blog.title}</h2>
    <p>{blog.description}</p>
    <Link href={`/blog/${blog.id}`}>Read More</Link>
  </div>
);

export default BlogCard;
