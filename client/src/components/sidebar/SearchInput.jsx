import { IoSearchSharp } from "react-icons/io5";

const SearchInput = ({ searchInput, setSearchInput }) => {

	return (
		<div className="input input-bordered rounded-full flex items-center">
			<input
				onChange={(e) => setSearchInput(e.target.value)}
				value={searchInput}
				type="text"
				placeholder="Search..."
				className="w-full bg-[#1d242a]"
			/>
			<IoSearchSharp className="w-6 h-6 outline-none" />
		</div>
	)
}

export default SearchInput