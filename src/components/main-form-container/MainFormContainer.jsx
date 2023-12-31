import MainFormHeader from "./main-from-header/MainFormHeader";
import MainFormHeader2 from "./main-from-header/MainFormHeader2";
import PlatformSetupForm from "./platform-setup-form/PlatformSetupForm";
import "./main-form-container.css";
import SetupConfigurationForm from "./setup-configuration-form/SetupConfigurationForm";
import ManageLifeCycleForm from "./manage-lifecycle-form/ManageLifeCycleForm";
import { useEffect, useState } from "react";
import SidePanel from "../SidePanel";
import GithubRightPanel from "./github-right-panel/githubRightPanel";
import PlatformSetUp from "./platform-set-up/PlatformSetUp";

const MainFormContainer = () => {
	const [selectedForm, setSelectedForm] = useState("PLATFORM_SETUP");
	const [gitUrl, setGitUrl] = useState("");
  const [gitToken, setGitToken] = useState("");
  const [displayIntegration,setdisplayIntegration] = useState(false)

	return (
		<main className="main-container">
			<SidePanel setdisplayIntegration={setdisplayIntegration}/>
			{!displayIntegration && <section className="main-form-container">
				<MainFormHeader2
					preForm={selectedForm}
					setSelectedForm={setSelectedForm}
				/>
				<section className="forms-container">
					{selectedForm === "PLATFORM_SETUP" ? (
						<PlatformSetUp setGitUrl={setGitUrl} setGitToken={setGitToken}/>
						
					) : (
						<PlatformSetupForm />
					)}
					{(selectedForm == "PLATFORM_SETUP" && gitUrl!="" && gitToken!="") && <GithubRightPanel gitUrl={gitUrl} gitToken={gitToken}/>}
				</section>
			</section>}
			{displayIntegration && <section className="main-form-container">
				<MainFormHeader
					preForm={selectedForm}
					setSelectedForm={setSelectedForm}
				/>
				<section className="forms-container">
					{selectedForm === "PLATFORM_SETUP" ? (
						<PlatformSetUp setGitUrl={setGitUrl} setGitToken={setGitToken}/>
					) : selectedForm === "SETUP_CONFIGURATION" ? (
						<SetupConfigurationForm />
					) : (
						<ManageLifeCycleForm />
					)}
					{(selectedForm == "PLATFORM_SETUP" && gitUrl!="" && gitToken!="") && <GithubRightPanel gitUrl={gitUrl} gitToken={gitToken}/>}
				</section>
			</section>}
			
		</main>
	);
};

export default MainFormContainer;
