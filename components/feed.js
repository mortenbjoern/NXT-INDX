// id, position, post_date, deadline, link, summary, company, company_website, company_location, company_logo, sector

import { Hexagon } from 'react-feather';
import { OutboundArrow } from './outbound-arrow';

const Position = (props) => (
  <li className="flex flex-col md:flex-row border-t pt-2">
    <div className="">
      <div className="flex items-center justify-between">
        <a href={props.position_link}>
          <p className="font-display text-label-28 md:text-label-48">
            {props.position}
          </p>
        </a>
        <OutboundArrow />
      </div>
      <p className="text-label-16 mt-0.75">{props.company}</p>
      <div className="flex gap-1 text-label-12 font-light mt-2.5 items-center">
        <p>{props.company_location}</p>
        <Hexagon size={3} fill={true} />
        <p>{props.position_posted.start}</p>
        <Hexagon size={3} fill={true} />
        <p>{props.company_sector}</p>
      </div>
    </div>
    <div className="flex flex-col mt-4">
      <p className="text-label-10 uppercase text-dark-tint font-semibold">
        summary
      </p>
      <p className="text-body-14 mt-1">{props.position_summary}</p>
    </div>
  </li>
);

export default function Feed({ posts }) {
  return (
    <main className="flex flex-col w-full mt-15">
      <ol className="flex w-full flex-col gap-y-5">
        {posts.map((post) => (
          <Position
            key={post.id}
            company={post.properties.Company.rich_text[0].plain_text}
            company_location={
              post.properties.Company_Location.rich_text[0].plain_text
            }
            company_sector={post.properties.Company_Sector.select.name}
            position={post.properties.Position.title[0].plain_text}
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
