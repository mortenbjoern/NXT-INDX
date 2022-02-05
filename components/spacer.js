export default function Spacer({ mH, lH }) {
  return (
    <div className={`block w-full h-${mH} ${lH ? `md:h-${lH}` : ''}`}></div>
  );
}
