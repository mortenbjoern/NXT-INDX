// id, position, post_date, deadline, link, summary, company, company_website, company_location, company_logo, sector

import Image from 'next/image';

const Position = (props) => (
  <li
    key={props.id}
    className="rounded text-sm flex-none w-full border-t pt-2 border-gray-200"
  >
    {/* <a href={props.position_link}> */}
    <div className="rounded-xl bg-white flex justify-between gap-x-6">
      <div className="h-24 w-24 relative flex-shrink-0">
        <Image
          layout="fill"
          className="object-cover"
          src={props.company_logo}
          alt={`${props.company}'s logo'`}
        />
      </div>
      <div className="py-2 flex-grow">
        <p className="text-base font-medium mb-1">{props.position}</p>
        <p className="text-black hover:px-2">
          <a
            className="text-green-900 font-medium"
            href={props.company_website}
          >
            {props.company}
          </a>
        </p>
        <p className="mb-6 text-gray-500">{props.company_location}</p>
        <p className="">{props.position_summary}</p>
      </div>
      <div className="w-1/5"></div>
      <div className="text-xs py-2 w-1/5 flex-shrink-0 ">
        <h4 className="font-bold uppercase text-gray-500 mb-2">Details</h4>
        <ol className="space-y-1">
          {props.position_engagement ? (
            <li className="">{props.position_engagement}</li>
          ) : null}
          {props.position_deadline ? (
            <li className="">Deadline: {props.position_deadline.start}</li>
          ) : (
            <li className="">Deadline: None</li>
          )}
          {props.position_posted ? (
            <li className="">Posted: {props.position_posted.start}</li>
          ) : null}
        </ol>
      </div>
    </div>
    {/* </a> */}
  </li>
);

export default function Feed({ posts }) {
  return (
    <main className="flex flex-col w-full">
      {/* <h2 className="text-2xl mb-4">Open opportunites</h2> */}
      <ol className="flex w-full flex-col gap-y-4">
        {posts.map((post) => (
          <Position
            key={post.id}
            id={post.id}
            company={post.properties.Company.rich_text[0].plain_text}
            company_location={
              post.properties.Company_Location.rich_text[0].plain_text
            }
            company_logo={post.properties.Company_Logo.files[0].file.url}
            company_sector={post.properties.Company_Sector.select.name}
            company_size={post.properties.Company_Size.select.name}
            company_type={post.properties.Company_Type.select.name}
            company_website={post.properties.Company_Website.url}
            position={post.properties.Position.title[0].plain_text}
            position_area={post.properties.Position_Area.multi_select}
            position_deadline={post.properties.Position_Deadline.date}
            position_engagement={
              post.properties.Position_Engagement.select.name
            }
            position_link={post.properties.Position_Link.url}
            position_posted={post.properties.Position_Posted.date}
            position_summary={
              post.properties.Position_Summary.rich_text[0].plain_text
            }
          />
        ))}
      </ol>
    </main>
  );
}
