import { useState } from "react";
import "./search-palette.css";

const SearchPalette = ({ setSelectedMethods }) => {
	const [apis, setApis] = useState([
		{
			name: "GetBucketAcl",
			value: false,
		},
		{
			name: "GetBucketTagging",
			value: false,
		},
		{
			name: "ListBuckets",
			value: false,
		},
		{
			name: "ListBucketInventoryConfigurations",
			value: false,
		},
		{
			name: "ListObjectsV2",
			value: false,
		},
		{
			name: "ListParts",
			value: false,
		},
		{
			name: "GetBucketLogging",
			value: false,
		},
		{
			name: "GetBucketLifecycle",
			value: false,
		},
		{
			name: "GetObject",
			value: false,
		},
		{
			name: "GetObjectTagging",
			value: false,
		},
		{
			name: "GetBucket",
			value: false,
		},
	]);

	const handleApiSelect = (index) => {
		const changedApis = [...apis];
		changedApis[index].value = !changedApis[index].value;
		setApis(changedApis);
		const selectedApis = changedApis.filter((item) => item.value);
		setSelectedMethods(selectedApis);
	};
	return (
		<section className="search-palette">
			<div className="input-container">
				<input
					name="search"
					id="search"
					type="text"
					className="form-control"
					placeholder="Search for APIs"
				/>
			</div>
			<ul className="api-palette">
				{apis.map((api, idx) => (
					<li className="list-item" key={idx}>
						<label htmlFor={api.name}>
							<input
								id={api.name}
								type="checkbox"
								className="checkbox"
								placeholder="Search for APIs"
								checked={api.value}
								onChange={() => handleApiSelect(idx)}
							/>
							{api.name}
						</label>
					</li>
				))}
			</ul>
		</section>
	);
};

export default SearchPalette;
