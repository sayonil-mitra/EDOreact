import React from "react";
import "./analyticsStyle.css";

const analyticStylesData = [
  {
    name: "Analytics style name 1",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    createdBy: "Sri Cherry Kotamreddy",
    company: "Gaian Solutions",
    createdOn: "11 Mar 2023, 9:34 am",
  },
  {
    name: "Analytics style name 1",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    createdBy: "Sri Cherry Kotamreddy",
    company: "Gaian Solutions",
    createdOn: "11 Mar 2023, 9:34 am",
  },
  {
    name: "Analytics style name 1",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    createdBy: "Sri Cherry Kotamreddy",
    company: "Gaian Solutions",
    createdOn: "11 Mar 2023, 9:34 am",
  },
  {
    name: "Analytics style name 1",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    createdBy: "Sri Cherry Kotamreddy",
    company: "Gaian Solutions",
    createdOn: "11 Mar 2023, 9:34 am",
  },
  {
    name: "Analytics style name 1",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    createdBy: "Sri Cherry Kotamreddy",
    company: "Gaian Solutions",
    createdOn: "11 Mar 2023, 9:34 am",
  },
  {
    name: "Analytics style name 1",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    createdBy: "Sri Cherry Kotamreddy",
    company: "Gaian Solutions",
    createdOn: "11 Mar 2023, 9:34 am",
  },
  {
    name: "Analytics style name 1",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    createdBy: "Sri Cherry Kotamreddy",
    company: "Gaian Solutions",
    createdOn: "11 Mar 2023, 9:34 am",
  },
  {
    name: "Analytics style name 1",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    createdBy: "Sri Cherry Kotamreddy",
    company: "Gaian Solutions",
    createdOn: "11 Mar 2023, 9:34 am",
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
