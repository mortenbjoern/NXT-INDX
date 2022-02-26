import { useState } from 'react';
import PageTitle from './pagetitle';
import Spacer from './spacer';
import { X } from 'react-feather';

const FormSection = ({ label, placeholder, setter, value, required }) => (
  <>
    <label className="mt-4 text-label-10 font-semibold uppercase text-dark-tint">
      {label}
    </label>
    <input
      className="mt-2 py-1 bg-light placeholder-grey border-b text-label-16 text-dark"
      placeholder={placeholder}
      required={require}
      onChange={(e) => setter(e.target.value)}
      value={value}
    ></input>
  </>
);

const SubmitButton = () => {
  return (
    <input
      type="submit"
      value="Submit"
      className="mt-7 w-1/2 bg-accent text-light py-1.5 text-label-16"
    />
  );
};

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function SubmitOverlay({ toggle }) {
  // states
  const [url, setURL] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');

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
    } else {
      console.log(res);
    }
  };

  return (
    <div className="container py-5 max-w-lg">
      <div className="flex justify-between items-center">
        <PageTitle>Submit a position</PageTitle>
        <X size={32} onClick={toggle} />
      </div>

      <Spacer height={'h-8 md:h-7'} />
      <form onSubmit={handleSubmit} className="flex flex-col">
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
        <SubmitButton />
      </form>
    </div>
  );
}
