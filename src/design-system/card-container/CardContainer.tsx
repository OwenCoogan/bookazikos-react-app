export default function CardContainer({
  children,
}: {
  children?: React.ReactNode,
}
){
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="md:col-span-2 lg:col-span-1" >
        {children}
      </div>
  </div>
  );
}
