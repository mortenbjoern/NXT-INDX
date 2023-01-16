import { Box, Calendar, MapPin, Target } from 'react-feather';
import { OutboundArrow } from './outboundArrow';
import { formatDistance, parseISO } from 'date-fns';

const today = new Date();

const Pill = ({ children }) => <div className="flex gap-0.75">{children}</div>;

const Position = (props) => (
  <a
    className="border-dark font-sans border-b border-r"
    href={props.Position_Link?.url}
  >
    <div className="flex flex-col border-dark h-full p-3 md:p-4 hover:bg-solar-tint transition-colors duration-300">
      <div className="md:pr-10 text-dark">
        <div className="flex items-start justify-between">
          <p className="text-label-20 md:text-label-16 font-normal">
            {props.Position.title[0]?.plain_text}
          </p>
          {/* <OutboundArrow /> */}
        </div>
        <p className="text-label-14 mt-1 text-dark-grey md:mt-1.25">
          {props.Company.rich_text[0]?.plain_text}
        </p>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex text-dark flex-wrap gap-x-2 gap-y-1.5 md:gap-y-2 text-label-12 font-light items-center">
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
              <Box size={12} />
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
    </div>
  </a>
);

export default function AlternateFeed2({ posts }) {
  return (
    <main className="flex flex-col w-full">
      <div className="flex w-full flex-col md:grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-dark">
        {posts.map((post) => (
          <Position key={post.id} {...post.properties} />
        ))}
      </div>
    </main>
  );
}
