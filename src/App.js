import Navbar from "./components/Navbar";
import "./App.css";
import PlatformSetupForm from "./components/main-form-container/platform-setup-form/PlatformSetupForm";
import MainFormContainer from "./components/main-form-container/MainFormContainer";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import IntegrationSetup from "./components/main-form-container/integration-setup/IntegrationSetup";

function App() {
  // show or hide dashboard/main forms container
  const [dashboardDisplay, setDashboardDisplay] = useState(true);
  return (
    <div className="App">
      <Navbar userName="Jackie.c" setDashboardDisplay={setDashboardDisplay} />
      {!dashboardDisplay && <MainFormContainer />}
      {dashboardDisplay && <Dashboard />}
      {/* <IntegrationSetup /> */}
    </div>
  );
}

export default App;
