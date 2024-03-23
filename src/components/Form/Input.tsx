import { InputProps } from "../../types/Form.type";

function Input({ labelText, value, onChange, placeholder, type }: InputProps) {
  return (
    <label className="flex flex-col">
      <span className="font-semibold">{labelText}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="border-2 p-1 rounded-md"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export default Input;
