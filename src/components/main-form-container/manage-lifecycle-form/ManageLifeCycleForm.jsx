import { useState } from "react";
import "./manage-life-cycle.css";
import plusIcon from "../setup-configuration-form/setup-form-card/plus-icon.svg";

const ManageLifeCycleForm = () => {
	const [workflows, setWorkflows] = useState([
		{
			name: "",
			id: "",
		},
	]);

	const handleWorkflowAddition = () => {
		setWorkflows([
			...workflows,
			{
				name: "",
				id: "",
			},
		]);
	};

	const handleWorklfowDeletion = (index) => {
		const remainingWfs = workflows.filter((wf, idx) => idx !== index);
		setWorkflows(remainingWfs);
	};
	return (
		<>
			<div className="manage-form-container">
				{workflows.map((param, idx) => (
					<div className="form-group " key={idx}>
						<div className="input-container">
							<label>Api {idx + 1}</label>
							<label htmlFor={"workflow_" + idx}>workflow</label>
							<select
								name="workflow"
								id={"workflow_" + idx}
								className="form-control"
							>
								<option value="">Select a workflow</option>
								<option value="workflow1">workflow-1</option>
								<option value="workflow2">workflow-2</option>
								<option value="workflow3">workflow-2</option>
								<option value="workflow4">workflow-3</option>
							</select>
						</div>
						<button
							className="delete-btn"
							onClick={() => handleWorklfowDeletion(idx)}
						>
							X
						</button>
					</div>
				))}
				<button className="param-btn" onClick={handleWorkflowAddition}>
					<img src={plusIcon} alt="" />
					Add Workflow
				</button>
			</div>
		</>
	);
};

export default ManageLifeCycleForm;
