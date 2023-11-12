import { useEffect } from "react";
import { useState } from "react";
import { Octokit } from "octokit";
import "./githubRightPanel.css";
import GitRepoLanguages from "../../Charts/GitRepoLanguages";
// import images
import star from "../../../images/star.svg";
import eye from "../../../images/eye.svg";
import gitfork from "../../../images/heartbeat.svg";
import book from "../../../images/book.svg";
import heartbeat from "../../../images/heartbeat.svg";
import weights from "../../../images/weights.svg";
import greenBug from "../../../images/Bug.svg";
import redBug from "../../../images/Bug Antivirus Debugging.svg";
import angular from "../../../images/Angular.svg";
import devIcon from "../../../images/Devicon.svg";
import isoImg from "../../../images/download 1.png";
import w3cImg from "../../../images/w3c-logo-11609381742g5r3kjtsjv 1.png";

function GithubRightPanel() {
  const [gitHubApiResponse, setGitHubApiResponse] = useState([]);
  const [repoStars, setRepoStars] = useState(0);
  const [repoSubs, setRepoSubs] = useState(0);
  const [repoForks, setRepoForks] = useState(0);
  const [repoCreateDate, setRepoCreateDate] = useState("");
  const [repoUpdateDate, setRepoUpdateDate] = useState("");
  const [issues, setIssues] = useState(0);
  const [commits, setCommits] = useState(0);

  // github info
  const auth_token = "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";
  const repo_owner = "sayonil-mitra";
  const repo_name = "EDOreact";
  const apiConfig = {
    owner: repo_owner,
    repo: repo_name,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  };

  // set up github client
  const octokit = new Octokit({
    auth: auth_token,
  });

  // make github api call when component renders initially
  useEffect(() => {
    async function gitApiCall() {
      // get repo general info
      const repoInfoRes = await octokit.request(
        "GET /repos/{owner}/{repo}",
        apiConfig
      );
      setRepoStars(repoInfoRes.data.stargazers_count);
      setRepoSubs(repoInfoRes.data.subscribers_count);
      setRepoForks(repoInfoRes.data.forks_count);
      setRepoCreateDate(repoInfoRes.data.created_at);
      setRepoUpdateDate(repoInfoRes.data.updated_at);
      //get collaborators
      const gitApiRes = await octokit.request(
        "GET /repos/{owner}/{repo}/collaborators",
        apiConfig
      );
      const collaborators = gitApiRes.data;
      setGitHubApiResponse(collaborators);
      // get issues
      const gitIssuesRes = await octokit.request(
        "GET /repos/{owner}/{repo}/issues",
        apiConfig
      );
      setIssues(gitIssuesRes.data.length);
      // get commits
      const commitsNum = await octokit.request(
        "GET /repos/{owner}/{repo}/commits",
        apiConfig
      );
      setCommits(commitsNum.data.length);
    }
    gitApiCall();
  }, []);

  function dateFormatter(timestamp) {
    // Create a Date object from the input string
    const date = new Date(timestamp);

    // Define an array of month names
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Get day, month, and year from the Date object
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    // Format the output string
    const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

    return formattedDate; // Output: 11 Nov 2023
  }

  return (
    <div className="github-right-panel">
      <div className="git-repo-general-info">
        <span>
          <img src={book} /> README
        </span>
        <br />
        <span>
          <img src={weights} /> MIT license
        </span>
        <br />
        <span>
          <img src={heartbeat} /> Activity
        </span>
        <br />
        <span>
          <img src={star} /> <b>{repoStars}</b> stars
        </span>
        <br />
        <span>
          <img src={eye} /> <b>{repoSubs}</b> watching
        </span>
        <br />
        <span>
          <img src={gitfork} /> <b>{repoForks}</b> forks
        </span>
        <br />
      </div>
      <div className="git-repo-collab">
        Collaborators <span>{gitHubApiResponse.length}</span> <br />
        <div className="git-repo-collab-avatars">
          {gitHubApiResponse.map((item) => {
            return (
              <>
                <img src={item.avatar_url} />
              </>
            );
          })}
        </div>
      </div>
      <div className="git-repo-languages">
        <b>Languages</b>
        <div>
          <GitRepoLanguages
            auth_token={auth_token}
            repo_owner={repo_owner}
            repo_name={repo_name}
            apiConfig={apiConfig}
          />
        </div>
      </div>
      <div className="git-repo-compatible">
        <b>Compatible with</b> <br />
        <img src={angular} /> <img src={devIcon} />
      </div>
      <div className="git-repo-compliance">
        <b>Compliance</b> <br />
        <img src={isoImg} /> <img src={w3cImg} />
      </div>
      <div className="git-repo-issues">
        <div>
          Created <br />
          <b className="git-repo-issues-data">
            {dateFormatter(repoCreateDate)}
          </b>
        </div>
        <div>
          Modified <br />
          <b className="git-repo-issues-data">
            {dateFormatter(repoUpdateDate)}
          </b>
        </div>
        <div>
          Bugs <br />
          <b className="git-repo-issues-data">
            <img src={greenBug} />
            {commits} <img src={redBug} />
            {issues}
          </b>
        </div>
      </div>
    </div>
  );
}

export default GithubRightPanel;
