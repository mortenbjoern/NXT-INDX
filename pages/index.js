import Head from 'next/head';
import { getDatabase } from '../lib/notion';

import Feed from '../components/feed';
import Footer from '../components/footer';
import Header from '../components/header';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-4 space-y-24">
      <Head>
        <title>MAKE.IMPACT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed posts={posts} />
      <Footer />
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
