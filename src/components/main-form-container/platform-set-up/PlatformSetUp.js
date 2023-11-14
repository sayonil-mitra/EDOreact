import { useState } from "react";
import bigQ from "../../../images/bigquery.png";
import "./PlatformSetUp.css";
function PlatformSetUp({ setGitUrl, setGitToken }) {
  const [gitUrlInput, setGitUrlInput] = useState("");
  const [gitTokenInput, setGitTokenInput] = useState("");

  return (
    <div className="platform-set-up-container">
      <div className="platform-set-up-details-1">
        <div className="platform-set-up-details-1-left">
          Platform Icon <br />
          <img src={bigQ} />
        </div>
        <div className="platform-set-up-details-1-right">
          Platform Name <br />
          <input type="text" value="Big Query" /> <br />
          Platform Url <br />
          <input type="text" value="https://cloud.google.com/bigquery/" />{" "}
          <br />
          15 Total APIs found
        </div>
      </div>
      <br />
      <div className="platform-set-up-details-2">
        Platform Description <br />
        <textarea placeholder="Enter description" />
        Documentation URL <br />
        <input type="text" /> <br />
        Git URL <br />
        <input
          type="text"
          onChange={(e) => setGitUrlInput(e.target.value)}
          placeholder="Enter Git Repo Url"
        />{" "}
        <br />
        Git Token <br />
        <input
          type="text"
          onChange={(e) => setGitTokenInput(e.target.value)}
          placeholder="Enter Git Access Token"
        />
        <br />
        <button
          onClick={() => {
            setGitUrl(gitUrlInput);
            setGitToken(gitTokenInput);
          }}
        >
          Get Repo
        </button>
        <br />
      </div>
    </div>
  );
}

export default PlatformSetUp;
