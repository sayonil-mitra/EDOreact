import "../styles/Dashboard.css";
import "../styles/DashboardModal.css";
import BasicLineChart from "./Charts/BasicLineChart";
import DoubleYAxisLineCharts from "./Charts/DoubleYAxisLineCharts";
import GradientStackedAreaChart from "./Charts/GradientStackedAreaChart";
import PieChart from "./Charts/PieChart";
import WaterfallChart from "./Charts/WaterfallChart";
import HorizontalPieCharts from "./Charts/HorizontalPieCharts";
import PolarBarChart from "./Charts/PolarBarChart";
import { useState } from "react";

function Dashboard() {
  const [modalDisplay, setModalDisplay] = useState(false);
  function displayModal() {
    setModalDisplay(true);
  }
  return (
    <div className="Dashboard">
      {/* Dashboard is divided into top roq and bottom row
      top row has 3 columns
      bottom row has 2 columns */}
      <div className="dashboard-top-row">
        {/* top row has 3 columns */}
        <div className="dashboard-top-left-column">
          <div className="dashboard-top-left-graph-1" onClick={displayModal}>
            <BasicLineChart />
          </div>
          <div className="dashboard-top-left-graph-2" onClick={displayModal}>
            <GradientStackedAreaChart />
          </div>
        </div>
        <div className="dashboard-top-middle-column" onClick={displayModal}>
          <PieChart />
        </div>
        <div className="dashboard-top-right-column">
          <div className="dashboard-top-right-graph-1" onClick={displayModal}>
            <WaterfallChart />
          </div>
          <div className="dashboard-top-right-graph-2" onClick={displayModal}>
            <DoubleYAxisLineCharts />
          </div>
        </div>
      </div>
      <div className="dashboard-bottom-row">
        {/* bottom row has 2 columns */}
        <div className="dashboard-bottom-left" onClick={displayModal}>
          <HorizontalPieCharts />
        </div>
        <div className="dashboard-bottom-right" onClick={displayModal}>
          <PolarBarChart />
        </div>
      </div>
      {modalDisplay && (
        <div className="dashboard-modal-background">
          <div className="dashboard-modal">
            <div className="dashboard-modal-left-chart"></div>
            <div className="dashboard-modal-right-chart-suggestions"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
