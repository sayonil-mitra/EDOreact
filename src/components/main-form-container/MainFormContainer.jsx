import MainFormHeader from "./main-from-header/MainFormHeader";
import PlatformSetupForm from "./platform-setup-form/PlatformSetupForm";
import "./main-form-container.css";
import SetupConfigurationForm from "./setup-configuration-form/SetupConfigurationForm";
import ManageLifeCycleForm from "./manage-lifecycle-form/ManageLifeCycleForm";
import { useState } from "react";
import SidePanel from "../SidePanel";

const MainFormContainer = () => {
	const [selectedForm, setSelectedForm] = useState("PLATFORM_SETUP");
	return (
		<main className="main-container">
			<SidePanel />
			<section className="main-form-container">
				<MainFormHeader
					preForm={selectedForm}
					setSelectedForm={setSelectedForm}
				/>
				<section className="forms-container">
					{selectedForm === "PLATFORM_SETUP" ? (
						<PlatformSetupForm />
					) : selectedForm === "SETUP_CONFIGURATION" ? (
						<SetupConfigurationForm />
					) : (
						<ManageLifeCycleForm />
					)}
				</section>
			</section>
		</main>
	);
};

export default MainFormContainer;
