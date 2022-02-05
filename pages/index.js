import Head from 'next/head';
import { getDatabase } from '../lib/notion';

import Feed from '../components/feed';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Spacer from '../components/spacer';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>NXT INDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacer mH="5" />
      <Header />
      <Spacer mH="15" />
      <Feed posts={posts} />
      <Footer />
    </Layout>
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
    revalidate: 300, // In seconds
  };
};
