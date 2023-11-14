import { useState } from "react";
import "./platform-setup-form.css";
import AnalyticStyle from "./analyticsStyle";
import AnalyticQueries from "./analyticQueries";
import AnalyticParameters from "./analyticsParameters";

const PlatformSetupForm = () => {
	const [platforms, setPlatforms] = useState([
		"AWS",
		"Azure",
		"Big Query",
		"kafka",
		"Mongo",
	]);
	const [credType, setCredType] = useState("USERNAME_PASSWORD");
	const [formData, setFormData] = useState({});
	return (
		<form className="platform-setup-form">
			<div className="input-container">
				<label htmlFor="integration-name" className="input-lable">
					Integration Name
				</label>
				<input
					name="integrationName"
					id="integration-name"
					type="text"
					className="form-control"
					placeholder="Integration Name"
				/>
			</div>
			<div className="input-container">
				<label htmlFor="integration-desc" className="input-lable">
					Integration Description
				</label>
				<input
					name="integrationDescription"
					id="integration-desc"
					type="text"
					className="form-control"
					placeholder="Short description about the integration"
				/>
			</div>
			<div className="input-container">
				<label htmlFor="platform-name" className="input-lable">
					Platform Name
				</label>
				<select
					name="platformName"
					id="platform-name"
					className="form-control"
				>
					{platforms.map((name, idx) => (
						<option value={name} key={idx}>
							{name}
						</option>
					))}
				</select>
			</div>
			<div className="input-container">
				<label htmlFor="api-reference" className="input-lable">
					API reference
				</label>
				<input
					name="apiReference"
					id="api-reference"
					type="text"
					className="form-control"
					placeholder="API reference"
				/>
			</div>
			<div className="input-container">
				<label htmlFor="api-docs" className="input-lable">
					Documentation
				</label>
				<input
					name="apiDocumentation"
					id="api-docs"
					type="text"
					className="form-control"
					placeholder="Documentation"
				/>
			</div>
			<div className="input-container">
				<label htmlFor="operational-endpoint" className="input-lable">
					Operational Endpoint
				</label>
				<input
					name="operationalEndpoint"
					id="operational-endpoint"
					type="text"
					className="form-control"
					placeholder="Operational Endpoint Name"
				/>
			</div>
			<div className="input-container">
				<label className="input-lable">Credetials</label>
				<div className="radio-btns">
					<label htmlFor="username-password" className="input-label">
						<input
							name="credentials"
							id="username-password"
							type="radio"
							className="form-control"
							checked={credType === "USERNAME_PASSWORD"}
							onChange={() => setCredType("USERNAME_PASSWORD")}
						/>
						Username/password
					</label>
					<label htmlFor="api-key" className="input-label">
						<input
							name="credentials"
							id="api-key"
							type="radio"
							className="form-control"
							checked={credType === "API_KEY"}
							onChange={() => setCredType("API_KEY")}
						/>
						APi/key
					</label>
				</div>
			</div>
			{credType === "USERNAME_PASSWORD" ? (
				<>
					<div className="input-container">
						<label htmlFor="username" className="input-lable">
							Username
						</label>
						<input
							name="username"
							id="username"
							type="text"
							className="form-control"
							placeholder="Username"
						/>
					</div>
					<div className="input-container">
						<label htmlFor="password" className="input-lable">
							Password
						</label>
						<input
							name="password"
							id="password"
							type="text"
							className="form-control"
							placeholder="Password"
						/>
					</div>
				</>
			) : (
				<>
					<div className="input-container">
						<label htmlFor="api-key" className="input-lable">
							Api key
						</label>
						<input
							name="apiKey"
							id="api-key"
							type="text"
							className="form-control"
							placeholder="api-key"
						/>
					</div>
				</>
			)}
		</form>
	);
// 	return (<>
// 			<div style={{ width: '100%',display: 'flex'}}>
// 				<div style={{width: '32%', borderRight:'1px solid #EAEAEA',height:'90vh'}}>
// 					<AnalyticStyle />
// 				</div>
// 				<div style={{ width: '34%',borderRight:'1px solid #EAEAEA',height:'90vh'}}>
// 					<AnalyticQueries />
// 				</div>
// 				<div style={{ width: '34%' }}>
// 					<AnalyticParameters />
// 				</div>
// 			</div>
// 			{/* {credType === "USERNAME_PASSWORD" ? (
// 				<>
// 					<div className="input-container">
// 						<label htmlFor="username" className="input-lable">
// 							Username
// 						</label>
// 						<input
// 							name="username"
// 							id="username"
// 							type="text"
// 							className="form-control"
// 							placeholder="Username"
// 						/>
// 					</div>
// 					<div className="input-container">
// 						<label htmlFor="password" className="input-lable">
// 							Password
// 						</label>
// 						<input
// 							name="password"
// 							id="password"
// 							type="text"
// 							className="form-control"
// 							placeholder="Password"
// 						/>
// 					</div>
// 				</>
// 			) : (
// 				<>
// 					<div className="input-container">
// 						<label htmlFor="api-key" className="input-lable">
// 							Api key
// 						</label>
// 						<input
// 							name="apiKey"
// 							id="api-key"
// 							type="text"
// 							className="form-control"
// 							placeholder="api-key"
// 						/>
// 					</div>
// 				</>
// 			)} */}
// </>
// 	);
};

export default PlatformSetupForm;
