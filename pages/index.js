import Head from 'next/head';
import { getDatabase } from '../lib/notion';

import Feed from '../components/feed';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Spacer from '../components/spacer';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts, toggle, visible }) {
  return (
    <>
      <Layout visible={visible}>
        <Head>
          <title>NXT INDX</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header toggle={toggle} />
        <Spacer height={'h-15'} />
        <Feed posts={posts} />
        <Spacer height={'h-25'} />
        <Footer />
      </Layout>
    </>
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
    revalidate: 60, // In seconds
  };
};
