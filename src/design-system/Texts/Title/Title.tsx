export default function Title(
  {
    children,
    className,
  }: {
    children?: React.ReactNode,
    className?: string,
  }
) {
  return (
    <h2
      className={
        `text-2xl text-black-400/80 hover:text-gray-400 mb-4 ${className}`
      }
    >
      {children}
    </h2>
  );
}
