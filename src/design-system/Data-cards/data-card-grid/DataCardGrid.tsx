export default function DataCardGrid({
  children,
}: {
  children?: React.ReactNode,
}
){
  return (
    <div className="mt-2 flex flex-row items-center space-x-5">
      {children}
  </div>
  );
}
