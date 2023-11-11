import BasicLineChart from "./Charts/BasicLineChart";
import DoubleYAxisLineCharts from "./Charts/DoubleYAxisLineCharts";
import GradientStackedAreaChart from "./Charts/GradientStackedAreaChart";
import HorizontalPieCharts from "./Charts/HorizontalPieCharts";
import PieChart from "./Charts/PieChart";
import PolarBarChart from "./Charts/PolarBarChart";
import WaterfallChart from "./Charts/WaterfallChart";
// image imports
import searchIcon from "../images/searchIcon.svg";
import chartImage1 from "../images/charts (1).png";
import chartImage2 from "../images/charts (2).png";
import chartImage3 from "../images/charts (3).png";
import chartImage4 from "../images/charts (4).png";
import chartImage5 from "../images/charts (5).png";
import chartImage6 from "../images/charts (6).png";

function DashboardModal({ dashboardModalGraph, setModalDisplay }) {
  console.log(dashboardModalGraph);
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
          <div>Visualization</div>
          <div className="dashboard-modal-right-chart-suggestions_search">
            <img src={searchIcon} />
            <input placeholder="Search graphs, charts" />
          </div>
          <div className="dashboard-modal-right-chart-suggestions-list">
            <div>
              <img src={chartImage1} />
              Bump Chart
            </div>
            <div>
              <img src={chartImage2} />
              Basic Scatter Chart
            </div>
            <div>
              <img src={chartImage3} />
              Basic Scatter Chart
            </div>
            <div>
              <img src={chartImage4} />
              Line Race
            </div>
            <div>
              <img src={chartImage5} />
              Simple Distribution
            </div>
            <div>
              <img src={chartImage6} />
              Stacked Bar
            </div>
          </div>
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
