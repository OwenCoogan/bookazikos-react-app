export default function CardContainer({
  children,
}: {
  children?: React.ReactNode,
}
){
  return (
    <div className="grid grid-cols-4 gap-4">
      {children}
  </div>
  );
}
