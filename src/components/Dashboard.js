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
import DashboardModal from "./DashboardModal";

function Dashboard() {
  // set display for dashboard modal
  const [modalDisplay, setModalDisplay] = useState(false);
  // set which graph will be displayd in modal
  const [dashboardModalGraph, setDashboardModalGraph] = useState(0);
  // function to toggle modal
  function displayModal(chart) {
    setModalDisplay(true);
    setDashboardModalGraph(chart);
  }
  return (
    <div className="Dashboard">
      {/* Dashboard is divided into top roq and bottom row
      top row has 3 columns
      bottom row has 2 columns */}
      <div className="dashboard-top-row">
        {/* top row has 3 columns */}
        <div className="dashboard-top-left-column">
          <div
            className="dashboard-top-left-graph-1"
            onClick={() => displayModal("BasicLineChart")}
          >
            <BasicLineChart />
          </div>
          <div
            className="dashboard-top-left-graph-2"
            onClick={() => displayModal("GradientStackedAreaChart")}
          >
            <GradientStackedAreaChart />
          </div>
        </div>
        <div
          className="dashboard-top-middle-column"
          onClick={() => displayModal("PieChart")}
        >
          <PieChart />
        </div>
        <div className="dashboard-top-right-column">
          <div
            className="dashboard-top-right-graph-1"
            onClick={() => displayModal("WaterfallChart")}
          >
            <WaterfallChart />
          </div>
          <div
            className="dashboard-top-right-graph-2"
            onClick={() => displayModal("DoubleYAxisLineCharts")}
          >
            <DoubleYAxisLineCharts />
          </div>
        </div>
      </div>
      <div className="dashboard-bottom-row">
        {/* bottom row has 2 columns */}
        <div
          className="dashboard-bottom-left"
          onClick={() => displayModal("HorizontalPieCharts")}
        >
          <HorizontalPieCharts />
        </div>
        <div
          className="dashboard-bottom-right"
          onClick={() => displayModal("PolarBarChart")}
        >
          <PolarBarChart />
        </div>
      </div>
      {modalDisplay && (
        <DashboardModal
          dashboardModalGraph={dashboardModalGraph}
          setModalDisplay={setModalDisplay}
        />
      )}
    </div>
  );
}

export default Dashboard;
