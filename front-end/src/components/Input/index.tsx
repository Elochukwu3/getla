import { prop } from "./type";
function Input({ label, id, placeholder, bool, type }: prop) {
  return (
    <div className="space-y-4 text-montserrat w-full bg-transparent">
      <label className={bool ? "hidden" : "block"}>{label}</label>
      <input
      required
        type={type ? type : "text"}
        id={id}
        className="w-full block  placeholder:text-zinc-600 p-4 bg-inherit border border-zinc-600 rounded-md outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
