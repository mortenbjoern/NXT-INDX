import Footer from '../../components/footer';
import Header from '../../components/header';
import Layout from '../../components/layout';
import Spacer from '../../components/spacer';
import Headline from '../../components/headline';
import Paragraph from '../../components/paragraph';
import Head from 'next/head';
import PageTitle from '../../components/pageTitle';

import { useState } from 'react';
import { X } from 'react-feather';
import Label from '../../components/label';

const FormSection = ({ label, placeholder, setter, value, required }) => (
  <>
    <label className="mt-4 text-label-10 font-semibold uppercase text-dark-tint">
      {label}
    </label>
    <input
      className="mt-2 py-1 bg-light placeholder-grey border-b text-label-16 text-dark focus:outline-none focus:border-accent transition-colors duration-200 rounded-none"
      placeholder={placeholder}
      required={required}
      onChange={(e) => setter(e.target.value)}
      value={value}
    ></input>
  </>
);

const SubmitButton = ({ success }) => {
  return (
    <input
      type="submit"
      value={success ? 'Submitted ✓' : 'Submit'}
      className={`mt-7 w-1/2 ${
        success ? 'bg-dark-tint' : 'bg-accent'
      } text-light py-1.5 text-label-16`}
      disabled={success}
    />
  );
};

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Submit({ toggle, visible }) {
  const [url, setURL] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [success, setSuccess] = useState(false);

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/submit-entry', {
      method: 'POST',
      body: JSON.stringify({ url, title, company, location }),
    });
    if (res.status === 201) {
      console.log('great success');
      setURL('');
      setTitle('');
      setCompany('');
      setLocation('');
      setSuccess(true);
    } else {
      console.log(res);
    }
  };

  return (
    <>
      <Layout visible={visible}>
        <Head>
          <title>Submit — NXT INDX</title>
        </Head>
        <Header toggle={toggle} />
        <Spacer height={'h-15'} />
        <div className="flex md:flex-row gap-1">
          <PageTitle>Submit position</PageTitle>
          <Label>Beta</Label>
        </div>
        <Spacer height={'h-4'} />
        <div className="md:max-w-2xl">
          <Headline>
            Do you know a great position with a lot of impact that people should
            know about? Or are you a business owner with an open position you'd
            like to fill with driven, passionate talent?
          </Headline>
          <Spacer height={'h-2'} />
          <Headline>Drop us a link for an open position below.</Headline>
        </div>
        <Spacer height={'h-10'} />
        <section className="flex flex-col w-full md:flex-row gap-x-5 justify-start items-start">
          <div className="h-full flex flex-col w-full py-2.5">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full md:w-60"
            >
              <FormSection
                label="link"
                placeholder="What is the link for the position?"
                setter={setURL}
                value={url}
                required={true}
              />
              <FormSection
                label="title"
                placeholder="What is the position called?"
                setter={setTitle}
                value={title}
                required={false}
              />
              <FormSection
                label="company"
                placeholder="What is the company or organisation called?"
                setter={setCompany}
                value={company}
                required={false}
              />
              <FormSection
                label="location"
                placeholder="Where is the position located?"
                setter={setLocation}
                value={location}
                required={false}
              />
              <SubmitButton success={success} />
            </form>
          </div>
        </section>
        <Spacer height={'h-25 md:h-40'} />
        <Footer toggle={toggle} />
      </Layout>
    </>
  );
}
