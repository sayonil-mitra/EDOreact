import BasicLineChart from "./Charts/BasicLineChart";
import DoubleYAxisLineCharts from "./Charts/DoubleYAxisLineCharts";
import GradientStackedAreaChart from "./Charts/GradientStackedAreaChart";
import HorizontalPieCharts from "./Charts/HorizontalPieCharts";
import PieChart from "./Charts/PieChart";
import PolarBarChart from "./Charts/PolarBarChart";
import WaterfallChart from "./Charts/WaterfallChart";
import { useState } from "react";
// image imports
import searchIcon from "../images/searchIcon.svg";
import chartImage1 from "../images/charts (1).png";
import chartImage2 from "../images/charts (2).png";
import chartImage3 from "../images/charts (3).png";
import chartImage4 from "../images/charts (4).png";
import chartImage5 from "../images/charts (5).png";
import chartImage6 from "../images/charts (6).png";
import messageFrame from "../images/Frame 1000003562.png";
import emailFrame from "../images/Frame 1000003564.png";
import twitterFrame from "../images/Frame 1000003565.png";
import facebookFrame from "../images/Frame 1000003566.png";

function DashboardModal({ dashboardModalGraph, setModalDisplay }) {
  // set display of chart suggestions or alerts
  const [alertDisplay, setAlertDisplay] = useState(false);

  // set button styles on click
  const [buttonBorderBottom, setbtnBorderBottom] = useState(3);

  // static data for chart suggestions for now
  // later, need to fetch data from schema regarding chart suggestions
  const chart_suggestions_data = {
    BasicLineChart: [chartImage4, chartImage5, chartImage6],
    GradientStackedAreaChart: [chartImage1, chartImage2, chartImage3],
    PieChart: [chartImage1, chartImage6],
    WaterfallChart: [chartImage1, chartImage2],
    DoubleYAxisLineCharts: [
      chartImage1,
      chartImage2,
      chartImage3,
      chartImage4,
      chartImage6,
    ],
    HorizontalPieCharts: [chartImage1, chartImage3, chartImage6],
    PolarBarChart: [chartImage1, chartImage6],
  };
  let current_charts_suggestions = chart_suggestions_data[dashboardModalGraph];
  // change above code in order to get relevant data from schema

  // render content
  return (
    <div className="dashboard-modal-background">
      <div className="dashboard-modal">
        <div className="dashboard-modal-left-chart">
          {/* display chosen graphs */}
          {dashboardModalGraph == "BasicLineChart" && <BasicLineChart />}
          {dashboardModalGraph == "GradientStackedAreaChart" && (
            <GradientStackedAreaChart />
          )}
          {dashboardModalGraph == "PieChart" && <PieChart />}
          {dashboardModalGraph == "WaterfallChart" && <WaterfallChart />}
          {dashboardModalGraph == "DoubleYAxisLineCharts" && (
            <DoubleYAxisLineCharts />
          )}
          {dashboardModalGraph == "HorizontalPieCharts" && (
            <HorizontalPieCharts />
          )}
          {dashboardModalGraph == "PolarBarChart" && <PolarBarChart />}
          {/* display options */}
          <select className="dashboard-modal-dropdown">
            <option value="">Query 1</option>
            <option value="">Query 2</option>
            <option value="">Query 3</option>
          </select>
          <div>Evaluation Frequency</div>
          <div>
            <form className="dashboard-modal-options">
              <span>
                <input type="radio" value="Dynamic" name="eval_freq" /> Dynamic
              </span>
              <span>
                <input type="radio" value="OnDemand" name="eval_freq" /> On
                Demand
              </span>
            </form>
          </div>
        </div>
        <div className="dashboard-modal-right-chart-suggestions">
          <div className="dashboard-modal-right-chart-suggestions-buttons">
            <button
              style={{ borderBottom: `${buttonBorderBottom}px solid #039` }}
              onClick={() => {
                setbtnBorderBottom(3);
                setAlertDisplay(false);
              }}
            >
              Visualization
            </button>
            <button
              style={{ borderBottom: `${4 - buttonBorderBottom}px solid #039` }}
              onClick={() => {
                setbtnBorderBottom(1);
                setAlertDisplay(true);
              }}
            >
              Alert
            </button>
          </div>
          {!alertDisplay && (
            <>
              <div className="dashboard-modal-right-chart-suggestions_search">
                <img src={searchIcon} />
                <input placeholder="Search graphs, charts" />
              </div>
              <div className="dashboard-modal-right-chart-suggestions-list">
                {/* render chart suggestions */}
                {current_charts_suggestions.map((item) => {
                  return (
                    <div>
                      <img src={item} />
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {alertDisplay && (
            <>
              <div className="dashboard-modal-right-alerts">
                When <br />
                <select>
                  <option>Select</option>
                  <option>Daily</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                </select>{" "}
                <br />
                Engage with
                <div className="dashboard-modal-right-alerts-images">
                  <img src={messageFrame} />
                  <img src={emailFrame} />
                  <img src={twitterFrame} />
                  <img src={facebookFrame} />
                </div>
                For <br />
                <select>
                  <option>Select</option>
                  <option>UseCase1</option>
                  <option>UseCase2</option>
                  <option>UseCase3</option>
                </select>{" "}
                <br />
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className="dashboard-modal-close-button"
        onClick={() => setModalDisplay(false)}
      >
        Close
      </div>
    </div>
  );
}

export default DashboardModal;
