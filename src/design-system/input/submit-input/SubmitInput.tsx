type SubmitTextProps = {
  label: string;
}

export default function SubmitInput({
  label,
}: SubmitTextProps) {
  return (
    <input
      type="submit"
      className='mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black'
      value={label}
    />
  );
}
