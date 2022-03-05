import { Calendar, MapPin, Target, Truck } from 'react-feather';
import { OutboundArrow } from './outboundArrow';
import { formatDistance, parseISO } from 'date-fns';

const today = new Date();

const Pill = ({ children }) => <div className="flex gap-0.75">{children}</div>;

const Position = (props) => (
  <a href={props.Position_Link?.url}>
    <li className="flex flex-col md:flex-row border-t pt-2">
      <div className="md:w-3/5 md:pr-10">
        <div className="flex items-start justify-between">
          <p className="font-display text-label-28 md:text-label-40">
            {props.Position.title[0]?.plain_text}
          </p>
          <OutboundArrow />
        </div>
        <p className="text-label-16 mt-0.75">
          {props.Company.rich_text[0]?.plain_text}
        </p>
        <div className="flex text-dark flex-wrap gap-x-3 gap-y-2 text-label-12 font-light mt-4 items-center">
          {props.Company_Location.rich_text[0]?.plain_text && (
            <Pill>
              <MapPin size={12} />
              {props.Company_Location.rich_text[0]?.plain_text}
            </Pill>
          )}
          {props.Position_Posted.date?.start && (
            <Pill>
              <Calendar size={12} />
              Posted{' '}
              {formatDistance(
                parseISO(props.Position_Posted.date?.start),
                today,
                {
                  addSuffix: true,
                }
              )}
            </Pill>
          )}
          {props?.Company_Sector?.multi_select?.length > 0 ? (
            <Pill>
              <Truck size={12} />
              {props.Company_Sector.multi_select
                .map((sector) => sector?.name)
                .join(', ')}
            </Pill>
          ) : null}
          {props.Position_Engagement.select?.name && (
            <Pill>
              <Target size={12} />
              {props.Position_Engagement.select?.name}
            </Pill>
          )}
        </div>
      </div>
      <div className="flex flex-col md:w-2/5 md:pr-1 mt-4 md:mt-0.5">
        <p className="text-label-10 uppercase text-dark-tint font-semibold">
          summary
        </p>
        <p className="text-body-14 mt-1.5">
          {props.Position_Summary.rich_text[0]?.plain_text}
        </p>
      </div>
    </li>
  </a>
);

export default function Feed({ posts }) {
  return (
    <main className="flex flex-col w-full">
      <ol className="flex w-full flex-col gap-y-5">
        {posts.map((post) => (
          <Position key={post.id} {...post.properties} />
        ))}
      </ol>
    </main>
  );
}
