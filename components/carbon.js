import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Carbon() {
  const router = useRouter();
  const path = encodeURIComponent(`nxtindx.com${router.asPath}`);
  const { data, error } = useSWR(
    `https://api.websitecarbon.com/b?url=${path}`,
    fetcher
  );

  if (error)
    return (
      <p className="text-accent p-1 bg-solar">
        Could not fetch CO<sub>2</sub>
      </p>
    );
  if (!data) return <p className="text-dark p-1 bg-solar">Loading...</p>;

  return (
    <p className="text-dark p-1 bg-solar">
      {data.c}g of CO<sub>2</sub>/view
    </p>
  );
}
