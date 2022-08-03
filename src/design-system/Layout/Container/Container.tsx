export default function Container(
  {
    children,
    flex,
  }: {
    children?: React.ReactNode,
    flex?: boolean,
  }
) {
  return (
    <div
      className={
        `rounded-lg border border-gray-200/80 bg-white p-6 mt-4 ${flex && 'flex flex-row'}`
      }
    >
      {children}
    </div>
  );
}
