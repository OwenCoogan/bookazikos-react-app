type InputTextProps = {
  label: string;
  placeholder: string;
  type: "text" | "number" | "email" | "password";
}

export default function TextInput({
  label,
  type,
  placeholder,
}: InputTextProps) {
  return (
    <div className="py-2">
      <span className="px-1 text-sm text-gray-600">{label}</span>
      <input
        placeholder={placeholder}
        name={label}
        type={type}
        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
    </div>
  );
}
