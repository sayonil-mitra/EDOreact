
import React from "react";
import "./analyticsStyle.css";

const analyticStylesData = [
  {
    name: "Storage Queries",
    content: "This set of queries are used fetch details related Storage",
    createdBy: "Sri Cherry Kotamreddy",
    company: "Gaian Solutions",
    createdOn: "11 Mar 2023, 9:34 am",
  },
  {
    name: "Storage Queries",
    content: "This set of queries are used fetch details usage of services",
    createdBy: "Sri Cherry Kotamreddy",
    company: "Gaian Solutions",
    createdOn: "11 Mar 2023, 10:05 am",
  }
  // Add more data items as needed
];

const AnalyticStyle = () => {
  return (
    <>
      <div className="analyticsCardContainer">
        <div className="heading">
          <h6>Analytics Style</h6>
        </div>
        <div className="allCardsContainer">
          {analyticStylesData.map((styleData, index) => (
            <div key={index} className="cardContainer">
              <div className="styleName">{styleData.name}</div>
              <div className="styleContent">{styleData.content}</div>
              <div className="creationMainContainer">
                <div className="creatednameContainer">
                  <div className="creationHeading">Created by</div>
                  <div className="creationName">{styleData.createdBy}</div>
                  <div className="creationCompany">{styleData.company}</div>
                </div>
                <div className="createdtimeContainer">
                  <div className="creationHeading">Created on</div>
                  <div className="creationName">{styleData.createdOn}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnalyticStyle;
