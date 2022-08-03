export default function Text(
  {
    children,
    className,
  }: {
    children?: React.ReactNode,
    className?: string,
  }
) {
  return (
    <p
      className={
        `text-xs text-gray-400/80 hover:text-gray-400 mb-2 ${className}`
      }
    >
      {children}
    </p>
  );
}
