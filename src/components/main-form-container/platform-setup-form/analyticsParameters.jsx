// const AnalyticParameters = () => {
//     return(
//         <div>Hello3</div>
//     )

// }
// export default AnalyticParameters;
import React from "react";
import "./analyticParameters.css";

const AnalyticParametersData = [
    "Parameter1",
    "Parameter2",
    "Parameter3",
    "Parameter4",
    "Parameter5",
    "Parameter6",
    "Parameter7",
    "Parameter8",
    "Parameter9",
    "Parameter10",
];

const AnalyticParameters = () => {
    return (
        <>
            <div className="thirdContainer">
                <div className="analyticsParametrsCardContainer1">
                    <div className="headingAqsparametrs">
                        <h6>Analytics Parameters</h6>
                    </div>
                    <div className="allCardsContainerAqsparametrs">
                        {AnalyticParametersData.map((query, index) => (
                            <div key={index} className={`cardContainerAqsparametrs ${index !== AnalyticParametersData.length - 1 ? 'borderBottom' : ''}`}>
                                {query}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="analyticsParametrsCardContainer2">
                    <div className="headingAqsparametrs">
                        <h6>Details of Selected query</h6>
                    </div>
                </div>

            </div>

        </>
    );
};

export default AnalyticParameters;
