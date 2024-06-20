import { summary, excerpt } from '../lib/copy';

export const Splash = () => {
  return (
    <div className="text-center">
      <h1
        className={`text-label-40 md:text-label-48 font-semibold font-display`}
      >
        {excerpt}
      </h1>
      <h2
        className={`mt-2 text-body-16 md:text-body-20 md:w-60 m-auto font-normal`}
      >
        {summary}
      </h2>
    </div>
  );
};
