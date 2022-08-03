export default function Card({
  children,
  title,
}: {
  children?: React.ReactNode,
  title: string,
}
){
  return (
    <div>
      <div className="py-6 px-6 rounded-xl border border-gray-200 bg-white">
          <h5 className="text-xl text-gray-700">{title}</h5>
          <div className="my-8">
            {children}
          </div>
      </div>
  </div>
  );
}
