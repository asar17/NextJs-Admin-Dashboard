import { MdSearch } from "react-icons/md";
const Search = ({placeholder}) =>{
    return(
        <div className="flex gap-2 items-center px-2 bg-gray-700 w-54 h-10 rounded-lg max-sm:h-6">
                <MdSearch/>
                <input type="text" className="w-full bg-transparent h-auto rounded-lg focus:outline-none text-sm max-sm:size-14 max-sm:text-[.4rem]" placeholder={placeholder}/>
        </div>
    )
}
export default Search;