import Head from 'next/head';
import { getDatabase } from '../lib/notion';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>KlimaKarriere</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex align-center justify-center w-full h-full">
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.properties.Company.rich_text[0].plain_text}</p>
          </li>
        ))}
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
