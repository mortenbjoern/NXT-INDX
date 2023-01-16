export default function PageTitle({ children, alignment }) {
  return (
    <h1
      className={`text-label-40 md:text-label-56 font-semibold font-display ${alignment}`}
    >
      {children}
    </h1>
  );
}
