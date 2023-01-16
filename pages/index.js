import { getDatabase } from '../lib/notion';

import AlternateFeed2 from '../components/alt-feed-2';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Spacer from '../components/spacer';
import { Splash } from '../components/splash';
import Head from 'next/head';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts, toggle, visible }) {
  return (
    <>
      <Layout>
        <Head>
          <title>NXT INDX — Find work that matters.</title>
        </Head>
        <Header />
        <Spacer height="h-15" />
        <Splash />
        <Spacer height="h-10" />
        <AlternateFeed2 posts={posts} />
        <Spacer height="h-25" />
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
    revalidate: 20, // In seconds
  };
};
