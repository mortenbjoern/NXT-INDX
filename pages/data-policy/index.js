import Footer from '../../components/footer';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Spacer from '../../components/spacer';
import PageTitle from '../../components/pageTitle';
import Headline from '../../components/headline';
import Paragraph from '../../components/paragraph';
import Head from 'next/head';

export default function DataPolicy({ toggle, visible }) {
  return (
    <>
      <Layout visible={visible}>
        <Head>
          <title>Data Policy — NXT INDX</title>
        </Head>
        <Header toggle={toggle} />
        <Spacer height={'h-15'} />
        <PageTitle>Data policy</PageTitle>
        <Spacer height={'h-10'} />
        <section className="flex flex-col md:flex-row w-full gap-x-5 justify-start items-start">
          <div className="md:mt-0.75">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="3.5"
                stroke="#062B23"
              />
              <path
                d="M17.2955 11.3636V23H15.8864V12.8409H15.8182L12.9773 14.7273V13.2955L15.8864 11.3636H17.2955Z"
                fill="#062B23"
              />
            </svg>
          </div>
          <div className="mt-2 md:mt-0 w-full md:w-3/5">
            <Headline>
              We do not collect personally identifiable information. Ever.
            </Headline>
            <Spacer height={'h-2'} />
            <Paragraph>
              NXT INDX uses{' '}
              <a className="underline" href="withcabin.com">
                Cabin
              </a>{' '}
              for web analytics. It is a non-invasive, privacy-first and carbon
              conscious product that is compliant with all privacy laws out of
              the box. That means no annoying banners and no way anyone can
              identify you personally based on your activity on this site.
            </Paragraph>
          </div>
        </section>
        <Spacer height={'h-8'} />
        <section className="flex flex-col md:flex-row w-full gap-x-5 justify-start items-start">
          <div className="md:mt-0.75">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="3.5"
                stroke="#062B23"
              />
              <path
                d="M12.2045 22V20.9773L16.0455 16.7727C16.4962 16.2803 16.8674 15.8523 17.1591 15.4886C17.4508 15.1212 17.6667 14.7765 17.8068 14.4545C17.9508 14.1288 18.0227 13.7879 18.0227 13.4318C18.0227 13.0227 17.9242 12.6686 17.7273 12.3693C17.5341 12.0701 17.2689 11.839 16.9318 11.6761C16.5947 11.5133 16.2159 11.4318 15.7955 11.4318C15.3485 11.4318 14.9583 11.5246 14.625 11.7102C14.2955 11.892 14.0398 12.1477 13.858 12.4773C13.6799 12.8068 13.5909 13.1932 13.5909 13.6364H12.25C12.25 12.9545 12.4072 12.3561 12.7216 11.8409C13.036 11.3258 13.464 10.9242 14.0057 10.6364C14.5511 10.3485 15.1629 10.2045 15.8409 10.2045C16.5227 10.2045 17.1269 10.3485 17.6534 10.6364C18.1799 10.9242 18.5928 11.3125 18.892 11.8011C19.1913 12.2898 19.3409 12.8333 19.3409 13.4318C19.3409 13.8598 19.2633 14.2784 19.108 14.6875C18.9564 15.0928 18.6913 15.5455 18.3125 16.0455C17.9375 16.5417 17.4167 17.1477 16.75 17.8636L14.1364 20.6591V20.75H19.5455V22H12.2045Z"
                fill="#062B23"
              />
            </svg>
          </div>
          <div className="mt-2 md:mt-0 w-full md:w-3/5">
            <Headline>
              Position and submission data management through Notion.
            </Headline>
            <Spacer height={'h-2'} />
            <Paragraph>
              Curated jobs and submissions are managed with a{' '}
              <a className="underline" href="https://notions.so">
                Notion
              </a>{' '}
              database through the{' '}
              <a className="underline" href="https://developers.notion.com/">
                Notion API
              </a>
              . When you submit a position through the form on this site, you
              create a new entry in the Notion database with the information you
              provided through the form. Nothing personally identifiable about
              yourself is automatically recorded through the submission process.
              We highly recommend you never submit anything personally
              identifiable and only provide already publically available
              information about a specific open position. You can always ask us
              to delete a submission; simply provide the details about{' '}
              <a className="underline" href="mailto:morten@nxtindx.com">
                via email
              </a>{' '}
              and we will delete the entry immediately. Any submission will be
              deleted after 6 months, regardless of whether the position is
              still open.
            </Paragraph>
          </div>
        </section>
        <Spacer height={'h-25'} />
        <Footer toggle={toggle} />
      </Layout>
    </>
  );
}
