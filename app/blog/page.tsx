import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Blog() {

  const session = await getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
  }

  const posts = await fetch('http://localhost:3000/api/content').then((res) =>
    res.json()
  );

  return (
    <div>
      <h1>Welcome to our Blog</h1>
      <ul>
        {posts.map((post: any) => (
            <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
        ))}
      </ul>
    </div>

  );
}