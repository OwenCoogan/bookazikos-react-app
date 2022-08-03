type DataCardType = {
  count: number;
  label: string;
}

export default function DataCard({
  count,
  label,
}: DataCardType) {
  return (
    <a href="#"
      className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
      <div className="flex flex-row items-center justify-center">

        <span className="font-bold text-gray-600"> {count}</span>
      </div>

      <div className="mt-2 text-sm text-gray-400">{label}</div>
    </a>
  )
}
