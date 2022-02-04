export default function Box({ children, justify, align, direction }) {
  return (
    <div className={`flex flex-${direction} justify-${justify} align-${align}`}>
      {children}
    </div>
  );
}
