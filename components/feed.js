import { Hexagon } from 'react-feather';
import { OutboundArrow } from './outbound-arrow';
import { formatDistance, parseISO } from 'date-fns';

const today = new Date();

const Position = (props) => (
  <a href={props.position_link}>
    <li className="flex flex-col md:flex-row border-t pt-2">
      <div className="md:w-3/5 md:pr-10">
        <div className="flex items-start justify-between">
          <p className="font-display text-label-28 md:text-label-48">
            {props.position}
          </p>
          <OutboundArrow />
        </div>
        <p className="text-label-16 mt-0.75">{props.company}</p>
        <div className="flex gap-1 md:gap-1.5 text-label-12 font-light mt-4 items-center">
          <p>{props.company_location}</p>
          <Hexagon size={3} fill={true} />
          <p>
            {`Posted 
            ${formatDistance(parseISO(props.position_posted.start), today, {
              addSuffix: true,
            })}`}
          </p>
          <Hexagon size={3} fill={true} />
          <p>{props.company_sector}</p>
        </div>
      </div>
      <div className="flex flex-col md:w-2/5 md:pr-1 mt-4 md:mt-0.5">
        <p className="text-label-10 uppercase text-dark-tint font-semibold">
          summary
        </p>
        <p className="text-body-14 mt-1.5">{props.position_summary}</p>
      </div>
    </li>
  </a>
);

export default function Feed({ posts }) {
  return (
    <main className="flex flex-col w-full">
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
