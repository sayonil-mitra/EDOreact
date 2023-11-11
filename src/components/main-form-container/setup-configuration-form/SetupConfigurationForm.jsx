import SearchPalette from "./search-palette/SearchPalette";
import SetupFormCard from "./setup-form-card/SetupFormCard";
import { useState } from "react";

const SetupConfigurationForm = () => {
	const [selectedMethods, setSelectedMethods] = useState([]);
	const removeMethod = (index) => {
		const remainingMethods = selectedMethods.filter(
			(item, idx) => idx !== index
		);
		setSelectedMethods(remainingMethods);
	};
	return (
		<section className="spec-form">
			<div className="form-cards">
				{selectedMethods &&
					selectedMethods.map((item, idx) => (
						<SetupFormCard
							formHeading={item.name}
							removeMethod={() => removeMethod(idx)}
							key={idx}
						/>
					))}
			</div>
			<SearchPalette setSelectedMethods={setSelectedMethods} />
		</section>
	);
};

export default SetupConfigurationForm;
