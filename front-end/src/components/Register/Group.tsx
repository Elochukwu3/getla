import useCategory from "@components/Contact/hook/useCategory";

const Group = ()=>{
    const numberOfGroup = Array.from({ length: 15 }, (_, i) => i + 1);
    return (
        <div className="w-full space-y-2">
        <p>Group Size</p>
        <select id="group" className="w-full block  placeholder:text-zinc-600 p-4 bg-inherit border border-zinc-600 rounded-md outline-none">
          <option
            value={""}
            disabled
            selected
            className="bg-move text-white py-4 cursor-pointer"
          >
            Select
          </option>
          {numberOfGroup &&
            numberOfGroup.map((item) => (
              <option value={item} className="bg-move text-white">
                {item}
              </option>
            ))}
        </select>
      </div>
    )
}

export default Group