import "./main-form-header.css";
const MainFormHeader = ({ preForm, setSelectedForm }) => {
	const handleFormChange = (next = null) => {
		if (next) {
			setSelectedForm(next);
		} else {
			if (preForm === "MANAGE_LIFECYCLE") {
				//handle navigation
			} else if (preForm === "PLATFORM_SETUP") {
				preForm = "SETUP_CONFIGURATION";
			} else if (preForm === "SETUP_CONFIGURATION") {
				preForm = "MANAGE_LIFECYCLE";
			}
			setSelectedForm(preForm);
		}
	};
	return (
		<header className="main-form-header">
			<nav>
				<ul>
					<li
						className="list-item"
						onClick={() => handleFormChange("PLATFORM_SETUP")}
					>
						<span
							className={
								preForm === "PLATFORM_SETUP" ? "highlight" : ""
							}
						>
							1
						</span>
						Platform setup
					</li>
					<li
						className="list-item"
						onClick={() => handleFormChange("SETUP_CONFIGURATION")}
					>
						<span
							className={
								preForm === "SETUP_CONFIGURATION"
									? "highlight"
									: ""
							}
						>
							2
						</span>
						Setup configuration
					</li>
					<li
						className="list-item"
						onClick={() => handleFormChange("MANAGE_LIFECYCLE")}
					>
						<span
							className={
								preForm === "MANAGE_LIFECYCLE"
									? "highlight"
									: ""
							}
						>
							3
						</span>
						Manage lifecycle
					</li>
					<li className="list-item">
						<button>Discrad</button>
						<button
							className="next-btn"
							onClick={() => handleFormChange()}
						>
							Next
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainFormHeader;
