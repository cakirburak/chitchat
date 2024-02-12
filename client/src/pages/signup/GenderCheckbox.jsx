const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className="flex justify-center gap-2 my-2">
			<div className="form-control">
				<label className="label gap-2 cursor-pointer">
					<span className="label-text">Male</span>
					<input
						onChange={() => onCheckboxChange("male")}
						checked={selectedGender === "male"}
						type="checkbox"
						className="checkbox border-slate-900"
					/>
				</label>
			</div>
			<div className="form-control">
				<label className="label gap-2 cursor-pointer">
					<span className="label-text">Female</span>
					<input
						onChange={() => onCheckboxChange("female")}
						checked={selectedGender === "female"}
						type="checkbox"
						className="checkbox border-slate-900"
					/>
				</label>
			</div>
		</div>
	)
}

export default GenderCheckbox