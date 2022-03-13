import { getDatabase } from '../lib/notion';

import Feed from '../components/feed';
// import AlternateFeed from '../components/alt-feed';
// import AlternateFeed2 from '../components/alt-fe ed-2';
// import AlternateFeed3 from '../components/alt-feed-3';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Spacer from '../components/spacer';
import Head from 'next/head';

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts, toggle, visible }) {
  return (
    <>
      <Layout visible={visible}>
        <Head>
          <title>NXT INDX — Find work that matter</title>
        </Head>
        <Header toggle={toggle} />
        <Spacer height={'h-15'} />
        <Feed posts={posts} />
        <Spacer height={'h-25'} />
        <Footer toggle={toggle} />
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
