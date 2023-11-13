import React from "react";
import "./analyticQueries.css";

const analyticQueriesData = [
  "time",
  "product_type",
  "user_id",
  "user_type",
  "avg_cost",
  "avg_usage",
  "storage_cost",
  "rolling_avg_cost",
  "cost_fluctuation",
  "avg_usage_growth_rate",
  "time",
  "product_type",
  "user_id",
  "user_type",
  "avg_cost",
  "avg_usage",
  "storage_cost",
  "rolling_avg_cost",
  "cost_fluctuation",
  "avg_usage_growth_rate",
  "time",
  "product_type",
  "user_id",
  "user_type",
  "avg_cost",
  "avg_usage",
  "storage_cost",
  "rolling_avg_cost",
  "cost_fluctuation",
  "avg_usage_growth_rate"
];

const AnalyticQueries = () => {
  return (
    <>
      <div className="analyticsQueriesCardContainer">
        <div className="headingAqs">
          <h6>Analytics Queries</h6>
        </div>
        <div className="allCardsContainerAqs">
          {analyticQueriesData.map((query, index) => (
            <div key={index} className={`cardContainerAqs ${index % 2 !== 0 ? 'even-bg' : ''}`}>
              {query}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnalyticQueries;
