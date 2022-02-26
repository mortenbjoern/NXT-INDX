export default function Layout({ children, visible }) {
  return (
    <div
      className={`${
        visible ? 'overflow-hidden h-screen' : undefined
      } container py-5 px-2.5 sm:px-4 md:px-6 mx-auto`}
    >
      {children}
    </div>
  );
}
