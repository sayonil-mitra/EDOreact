import Navbar from "./components/Navbar";
import "./App.css";
import PlatformSetupForm from "./components/main-form-container/platform-setup-form/PlatformSetupForm";
import MainFormContainer from "./components/main-form-container/MainFormContainer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <MainFormContainer /> */}
      <Dashboard />
    </div>
  );
}

export default App;
