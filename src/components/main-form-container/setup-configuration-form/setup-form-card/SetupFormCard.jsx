import { useState } from "react";
import plusIcon from "./plus-icon.svg";
import crossIcon from "./cross-icon.svg";
import "./setup-form-card.css";

const SetupFormCard = ({ formHeading, removeMethod }) => {
	const [Inputparameters, setInputParameters] = useState([
		{ key: "", value: "" },
	]);
	const [Outputparameters, setOutputParameters] = useState([
		{ parameter: "", tag: "", property: "" },
	]);

	const handleInputParameterAddition = () => {
		setInputParameters([...Inputparameters, { key: "", value: "" }]);
	};
	const handleOutputParameterAddition = () => {
		setOutputParameters([
			...Outputparameters,
			{ parameter: "", tag: "", property: "" },
		]);
	};

	const handleInputParameterDeletion = (index) => {
		const finalParam = Inputparameters.filter((item, idx) => idx !== index);
		setInputParameters(finalParam);
	};
	const handleOutputParameterDeletion = (index) => {
		const finalParam = Outputparameters.filter(
			(item, idx) => idx !== index
		);
		setOutputParameters(finalParam);
	};
	return (
		<div className="setup-form-card">
			<button className="main-delete-btn" onClick={removeMethod}>
				<img src={crossIcon} alt="" />
			</button>
			<h2 className="form-heading">{formHeading}</h2>
			<div className="parameters-container">
				<p>Input parameter</p>
				<div className="form-group">
					<label>Key</label>
					<label>Value</label>
				</div>
				{Inputparameters.map((param, idx) => (
					<div className="form-group" key={idx}>
						<div className="input-container">
							<input
								name="key"
								type="text"
								className="form-control"
								placeholder="Key"
							/>
						</div>
						<div className="input-container">
							<input
								name="vlaue"
								type="text"
								className="form-control"
								placeholder="Value"
							/>
						</div>
						<button
							className="delete-btn"
							onClick={() => handleInputParameterDeletion(idx)}
						>
							X
						</button>
					</div>
				))}
				<button
					className="param-btn"
					onClick={handleInputParameterAddition}
				>
					<img src={plusIcon} alt="" />
					Add key
				</button>
			</div>
			<div className="parameters-container">
				<p>Output parameter</p>
				<div className="form-group">
					<div className="container-header">
						<label>Parameter</label>
						<label>Tag</label>
						<label>Key Properties</label>
					</div>
				</div>
				{Outputparameters.map((param, idx) => (
					<div className="form-group" key={idx}>
						<div className="input-container">
							<select name="parameter" className="form-control">
								<option value="">Select a paramater</option>
								<option value="parameter1">parameter1</option>
								<option value="parameter2">parameter2</option>
								<option value="parameter3">parameter3</option>
								<option value="parameter4">parameter4</option>
							</select>
						</div>
						<div className="input-container">
							<select name="tag" className="form-control">
								<option value="">Select a tag</option>
								<option value="tag1">tag1</option>
								<option value="tag2">tag2</option>
								<option value="tag3">tag3</option>
								<option value="tag4">tag4</option>
							</select>
						</div>
						<div className="input-container">
							<select name="tag" className="form-control">
								<option value="">Select a property</option>
								<option value="property1">property1</option>
								<option value="property2">property2</option>
								<option value="property3">property3</option>
								<option value="property4">property4</option>
							</select>
						</div>
						<button
							className="delete-btn"
							onClick={() => handleOutputParameterDeletion(idx)}
						>
							X
						</button>
					</div>
				))}
				<button
					className="param-btn"
					onClick={handleOutputParameterAddition}
				>
					<img src={plusIcon} alt="" />
					Add Parameter
				</button>
			</div>
		</div>
	);
};

export default SetupFormCard;
