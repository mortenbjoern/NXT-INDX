import Footer from '../../components/footer';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Spacer from '../../components/spacer';
import Headline from '../../components/headline';
import Paragraph from '../../components/paragraph';
import { Star, Scale, Circular } from '../../components/illustrations';
import Head from 'next/head';

export default function About({ toggle, visible }) {
  return (
    <>
      <Layout visible={visible}>
        <Head>
          <title>About — NXT INDX</title>
        </Head>
        <Header toggle={toggle} />
        <Spacer height={'h-15'} />
        <section className="flex w-full flex-col-reverse md:flex-row justify-center items-center h-auto">
          <div className="w-full md:w-3/5">
            <Headline>
              Open impact positions in Denmark,<br></br> curated and updated
              weekly
            </Headline>
            <Spacer height={'h-2'} />
            <Paragraph>
              NXT INDX is a curated job platform for meaningful work, that put
              people in a position to have positive impact on communities,
              society and the planet. You’ll come across jobs within any sector
              that will have one thing in common: the work you’ll do will either
              have a major positive influence on a few or a minor positive
              impact for millions. And anything in between.
            </Paragraph>
          </div>
          <div className="w-full md:w-2/5 h-25 flex justify-end items-center">
            <Star height="176" width="169" />
          </div>
        </section>
        <Spacer height={'h-12.5'} />
        <section className="flex w-full flex-col-reverse md:flex-row justify-center items-center h-auto">
          <div className="w-full md:w-3/5">
            <Headline>
              Built in the open,<br></br> still under construction
            </Headline>
            <Spacer height={'h-2'} />
            <Paragraph>
              The time for a new job index focusing on connecting talent to
              opportunities to do meaningful, good work is now. That’s why we
              decided to launch the platform in a raw and minimally viable
              version. We believe in involving the community in the process, so{' '}
              <a
                className="underline"
                href="https://mortenbjoern.notion.site/62bb81aeb7264169a62491b4cdc88e01?v=901a98d063e64e59a2c52b5e67f50674"
              >
                our roadmap
              </a>{' '}
              is open for anyone to follow. Feature requests, bug reports and
              feedback is greatly appreciated - for now, slide those messages in
              to our DM’s via good old fashioned email.
            </Paragraph>
          </div>
          <div className="w-full md:w-2/5 h-25 flex justify-end items-center">
            <Scale height="164" width="164" />
          </div>
        </section>
        <Spacer height={'h-12.5'} />
        <section className="flex w-full flex-col-reverse md:flex-row justify-center items-center h-auto">
          <div className="w-full md:w-3/5">
            <Headline>
              Action speaks louder than words,<br></br> so we decided to do
              something
            </Headline>
            <Spacer height={'h-2'} />
            <Paragraph>
              NXT INDX is born out of the realisation that we need way more
              people finding their way to impactful jobs that challenge status
              quo and start healing our biosphere and communities. We try our
              best to follow the same example, and build a platform based on
              regenerative design thinking, sustainable interaction design
              principles and inclusive design decisions.
            </Paragraph>
          </div>
          <div className="w-full md:w-2/5 h-25 flex justify-end items-center">
            <Circular height="164" width="164" />
          </div>
        </section>
        <Spacer height={'h-25'} />
        <Footer toggle={toggle} />
      </Layout>
    </>
  );
}
