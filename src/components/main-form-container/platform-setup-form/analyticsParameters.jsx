import React from "react";
import "./analyticParameters.css";
const analyticParametersData = [
    {
        name: "Usage by Product over MoM",
        queryDescription: "Average Compensation of Employees",
        UUID: "c3d75891-7083-44d6-beb7-e051c7845fd6",
        rawQuery: "WITH monthly_usage.....",
        evaluationType: "Scheduled",
        createdBy: "Sri Cherry Kotamreddy",
        createdOn: "11 Mar 2023, 9:34 am",
        lastModifiedBy: "P jahnavi",
        lastModifiedOn: "11 Mar 2023, 9:34 am",
    },
];

const AnalyticParameters = () => {
    return (
        <>
            <div className="thirdContainer">
                <div className="analyticsParametrsCardContainer1">
                    <div className="headingOuter">
                        <h6>Analytics Parameters</h6>
                    </div>
                    {analyticParametersData.map((data, index) => (
                        <div className="analyticsParametrsCardContainer2">
                            <div className="headingAqsparametrs">
                                <p>{data.name}</p>
                            </div>
                            <div className="queryNameContainer">
                                <p className="queryNameHeading">Query Description</p>
                                <p className="queryName">{data.queryDescription}</p>
                            </div>
                            <div className="queryNameContainer">
                                <p className="queryNameHeading">UUID / URI</p>
                                <p className="queryName">{data.UUID}</p>
                            </div>
                            <div className="queryNameContainer">
                                <p className="queryNameHeading">Raw Query</p>
                                <p className="queryName">{data.RawQuery}</p>
                            </div>
                            <div className="queryNameContainer">
                                <p className="queryNameHeading">Evaluation Type</p>
                                <p className="queryName">{data.evaluationType}</p>
                            </div>
                            <div className="creationMainContainer">
                                <div className="creatednameContainer">
                                    <div className="creationHeading">Created by</div>
                                    <div className="creationName">{data.createdBy}</div>
                                    <div className="creationCompany">{data.createdOn}</div>
                                </div>
                                <div className="createdtimeContainer">
                                    <div className="creationHeading">last Modified by</div>
                                    <div className="creationName">{data.lastModifiedBy}</div>
                                    <div className="creationCompany">{data.lastModifiedOn}</div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </>
    );
};

export default AnalyticParameters;