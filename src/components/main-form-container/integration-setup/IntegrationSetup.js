import "./IntegrationSetup.css";

function IntegrationSetup() {
  return (
    <div className="integration-setup">
      <div className="integration-setup-container">
        <form className="integration-setup-form">
          <label className="integration-setup-label">Integration Name</label>
          <input
            placeholder="Integration Name"
            className="integration-setup-input"
          />
          <label className="integration-setup-label">
            Integration Description
          </label>
          <input
            placeholder="Short description about the integration"
            className="integration-setup-input"
          />
          <label className="integration-setup-label">API reference</label>
          <input
            placeholder="API reference"
            className="integration-setup-input"
          />
          <label className="integration-setup-label">Documentation</label>
          <input
            placeholder="Documentation"
            className="integration-setup-input"
          />
          <label className="integration-setup-label">Documentation</label>
          <input placeholder="Big Query" className="integration-setup-input" />
          <label className="integration-setup-label">
            Operational Endpoint
          </label>
          <input
            placeholder="Operational Endpoint"
            className="integration-setup-input"
          />
          <div className="integration-setup-radio-cont">
            <label for="html">Credentials</label>
            <input
              type="radio"
              id="username"
              name="username"
              value="Username"
              checked
            />
            <label className="integration-setup-radio">Username/Password</label>
            <input type="radio" id="api" name="api" value="api" />
            <label className="integration-setup-radio">API Key</label>
          </div>
          <label className="integration-setup-label">Username</label>
          <input placeholder="Enter" className="integration-setup-input" />
          <label className="integration-setup-label">Password</label>
          <input placeholder="Enter" className="integration-setup-input" />
        </form>
      </div>
    </div>
  );
}

export default IntegrationSetup;
