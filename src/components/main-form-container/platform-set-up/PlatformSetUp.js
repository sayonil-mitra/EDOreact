import { useState, useEffect } from "react";
import bigQ from "../../../images/bigquery.png";
import "./PlatformSetUp.css";

function PlatformSetUp({ setGitUrl, setGitToken }) {
  const [gitUrlInput, setGitUrlInput] = useState("");
  const [gitTokenInput, setGitTokenInput] = useState("");

  // Variables
  const [platformName, setPlatformName] = useState("");
  const [platformUrl, setPlatformUrl] = useState("");
  const [platformDescription, setPlatformDescription] = useState("");
  const [docUrl, setDocUrl] = useState("");
  const [gitUrl1, setGitUrl1] = useState("");
  const [gitToken1, setGitToken1] = useState("");

  const id = "SamplePlatform"; // Replace with the desired id

  useEffect(() => {
    // Fetch data from the API
    fetch(`https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65531cdfa5cb97115f84922b/instances/list`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "SUCCESS" && data.entities && data.entities.length > 0) {
          // Find the entity with the matching id
          const matchingEntity = data.entities.find((entity) => entity.platformName === id);

          if (matchingEntity) {
            // Update the component state with the values from the matching entity
            setPlatformName(matchingEntity.platformName || "");
            setPlatformUrl(matchingEntity.platformURL || "");
            setPlatformDescription(matchingEntity.platformDescription || "");
            setDocUrl(matchingEntity.documentationURL || "");
            setGitUrl1(matchingEntity.gitURL || "");
            setGitToken1(matchingEntity.gitToken || "");
          }
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleSaveClick = () => {
    // Data to be posted
    const dataToPost = {
      "documentationURL": docUrl,
      "platformURL": platformUrl,
      "platformDescription": platformDescription,
      "gitToken": gitToken1,
      "platformName": platformName,
      "gitURL": gitUrl1
    };
    console.log(dataToPost);

    // Perform the logic to make a POST request with the data
    fetch("https://ig.aidtaas.com/tf-web/v1.0/64e1fd3d1443eb00018cc231/schemas/65531cdfa5cb97115f84922b/instance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToPost),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "SUCCESS") {
          // Success case
          alert(`Success: ${data.msg}`);
        } else {
          // Failure case
          alert(`Failure: ${data.msg}`);
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error making POST request:", error);
        alert("Error making POST request");
      });
  };

  return (
    <div className="platform-set-up-container">
      <div className="platform-set-up-details-1">
        <div className="platform-set-up-details-1-left">
          Platform Icon <br />
          <img src={bigQ} alt="Big Query Icon" />
        </div>
        <div className="platform-set-up-details-1-right">
          Platform Name <br />
          <input type="text" value={platformName} onChange={(e) => setPlatformName(e.target.value)} /> <br />
          Platform Url <br />
          <input type="text" value={platformUrl} onChange={(e) => setPlatformUrl(e.target.value)} /> <br />
          15 Total APIs found
        </div>
      </div>
      <div className="platform-set-up-details-2">
        Platform Description <br />
        <textarea
          placeholder="Enter description"
          value={platformDescription}
          onChange={(e) => setPlatformDescription(e.target.value)}
        />
        Documentation URL <br />
        <input type="text" value={docUrl} onChange={(e) => setDocUrl(e.target.value)} /> <br />
        Git URL <br />
        <input type="text" value={gitUrl1} onChange={(e) => setGitUrl1(e.target.value)} placeholder="Enter Git Repo Url" /> <br />
        Git Token <br />
        <input type="text" value={gitToken1} onChange={(e) => setGitToken1(e.target.value)} placeholder="Enter Git Access Token" />
        <br />
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={() => { setGitUrl(gitUrlInput); setGitToken(gitTokenInput); }}>
          Get Repo
        </button>
        &nbsp;
        <br />
      </div>
    </div>
  );
}

export default PlatformSetUp;
