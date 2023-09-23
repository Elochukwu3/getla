import useCategory from "@components/Contact/hook/useCategory";

const Category = ()=>{
    const { categories,  error } = useCategory();
    return (
        <div className="w-full space-y-2" >
        <p>Category</p>
        <select required id="category" className="w-full block  placeholder:text-zinc-600 p-4 bg-inherit border border-zinc-600 rounded-md outline-none">
          <option
            value={""}
            disabled
            selected
            className="bg-move text-white py-4 cursor-pointer"
          >
            Select your category
          </option>
          {categories ?
            categories.map((item: { id: number; name: string }) => (
              <option
              key={item.id}
                value={item.id}
                className="bg-move text-white py-4 block cursor-pointer"
              >
                {item.name}
              </option>
            )): <option
            value={""}
            className="bg-move text-white py-4 block cursor-pointer"
          >
            {error && error.message }
          </option>}
        </select>
      </div>
    )
}

export default Category