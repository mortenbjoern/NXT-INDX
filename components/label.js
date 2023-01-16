export default function Label({ children }) {
  return (
    <div
      className={`text-label-zero bg-solar text-dark h-2 flex items-center text-center p-0.75 font-semibold`}
    >
      {children}
    </div>
  );
}
