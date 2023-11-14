import React, { useState } from "react";
import "../styles/SidePanel.css";
import search from "../images/search.png";
import integrationimg from "../images/integration.png";
import sort from "../images/sort.png";
import settingsVertical from "../images/settingsVertical.png";
import biqquerylogoimage from "../images/bigquerylogo.png";
import bqLogsApipercentage from "../images/bqLogsApipercentage.png";
import bqUsageMetricspercentage from "../images/bqUsageMetricspercentage.png";
import apisetupcompletelogo from "../images/apisetupcompletelogo.png";
import apiadditionplussymbol from "../images/apiadditionplussymbol.png";
import kafkalogo from "../images/kafka-logo.png";
import AmazonS3Logo from "../images/AmazonS3Logo.png";
import jiralogo from "../images/jiralogo.png";
import gitIconLogo from "../images/gitIconLogo.png";
import mongodbLogoIcon from "../images/mongodbLogoIcon.png";
import Accordion from "react-bootstrap/Accordion";

const integrationsData = [
  {
    id: 1,
    name: "Big Query",
    logo: biqquerylogoimage,
    apis: [
      {
        name: "Big Query Logs Integration",
        logo: bqLogsApipercentage,
        content: "Big Query Logs Integration",
      },
      {
        name: "Big Query Usage Metrics Integ..",
        logo: bqLogsApipercentage,
        content: "Big Query Usage Metrics Integration",
      },
      {
        name: "Big Query Metadata Metrics Inte..",
        logo: bqUsageMetricspercentage,
        content: "Big Query Metadata Metrics Integration",
      },
      {
        name: "Big Query Storage Metrics Inte..",
        logo: apisetupcompletelogo,
        content: "Big Query Storage Metrics Integration",
      },
      {
        name: "Big Query Licensing Information",
        logo: apisetupcompletelogo,
        content: "Big Query Licensing Information",
      },
      {
        name: "Create Integration",
        logo: apiadditionplussymbol,
        content: "Create Integration",
      },
    ],
  },
  {
    id: 2,
    name: "Kafka",
    logo: kafkalogo,
    apis: [
      {
        name: "Create Integration",
        logo: apiadditionplussymbol,
        content: "Create Integration",
      },
    ],
  },
  {
    id: 3,
    name: "Amazon S3",
    logo: AmazonS3Logo,
    apis: [
      {
        name: "Create Integration",
        logo: apiadditionplussymbol,
        content: "Create Integration",
      },
    ],
  },
  {
    id: 4,
    name: "Jira",
    logo: jiralogo,
    apis: [
      {
        name: "Create Integration",
        logo: apiadditionplussymbol,
        content: "Create Integration",
      },
    ],
  },
  {
    id: 5,
    name: "Git",
    logo: gitIconLogo,
    apis: [
      {
        name: "Create Integration",
        logo: apiadditionplussymbol,
        content: "Create Integration",
      },
    ],
  },
  {
    id: 6,
    name: "MongoDB",
    logo: mongodbLogoIcon,
    apis: [
      {
        name: "Create Integration",
        logo: apiadditionplussymbol,
        content: "Create Integration",
      },
    ],
  },
];

export default function SidePanel({ setdisplayIntegration }) {
  const [activeIntegration, setActiveIntegration] = useState(null);

  const handleAccordionClick = (integrationId) => {
    setdisplayIntegration(false);
    setActiveIntegration(integrationId);
  };

  const handleSecAccordtionClick = (integrationId) =>{
    setdisplayIntegration(true)
    setActiveIntegration(integrationId);
  }
  return (
    <>
      <div className="sidepanel">
        <div className="searchbar">
          <p id="integrationheading">Integrations</p>
          <div>
            <img id="sidepanelimg" src={sort} alt="Sort" />
            <img id="sidepanelimg" src={search} alt="Search" />
            <img
              id="sidepanelimg"
              src={settingsVertical}
              alt="SettingsVertical"
            />
          </div>
        </div>
        
        <Accordion defaultActiveKey="0">
          {integrationsData.map((integration) => (
            <Accordion.Item
              key={integration.id}
              eventKey={integration.id.toString()}
            >
              <Accordion.Header onClick={() => handleAccordionClick(integration.id)}>
                <div className="bqHeadingParent">
                  <div className="bqLogoParent">
                    <img id="bqLogo" src={integration.logo} />
                  </div>
                  <div className="bqHeadingNameParent">
                    <p id="bqHeadingName">{integration.name}</p>
                  </div>
                  <div className="bqApisNumberParent">
                    <div id="bqApisNumber" style={{
                        backgroundColor: activeIntegration === integration.id ? "#eee" : "#DFF7FF"
                      }}>{integration.apis.length - 1}</div>
                  </div>
                </div>
                
              </Accordion.Header>
              
        <hr className="my-hr-line"/>
              <Accordion.Body onClick={() => handleSecAccordtionClick(integration.id)}>
                {/* <div className="bqAllApis"> */}
                {integration.apis.map((api, index) => (
                  <div className="bqLogsApiHeading" key={index}>
                    <div className="bqLogsApiLogoParent">
                      <img id="bqLogsApiLogo" src={api.logo} />
                    </div>
                    <div className="bqLogsApiHeadingNameParent">
                      <p id="bqLogsApiHeadingName">{api.name}</p>
                    </div>
                  </div>
                ))}
                {/* </div> */}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  );
}
