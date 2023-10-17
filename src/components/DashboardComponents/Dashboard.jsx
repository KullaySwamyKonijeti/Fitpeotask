// Dashboard.js
import React, { useState } from "react";
import "./Dashboard.scss";
import InformationCards from "./DashboardCards/InformationCards";
import cardData from "./DashboardCards/CardsData";
import DashboardBarchart from "./DashboardCharts/DashboardBarchart";
import DashboardPiechart from "./DashboardCharts/DashboardPiechart";
import DashboardTable from "./DashboardTable/DashboardTable";

const Dashboard = () => {
  const [cardInfo, setCardInfo] = useState(cardData);
  return (
    <div className="dashboard">
      <div className="first_container">
        {cardInfo.map((card) => (
          <InformationCards key={card?.id} data={card} />
        ))}
      </div>
      <div className="Charts_main_container">
        <DashboardBarchart />
        <DashboardPiechart />
      </div>
      <div>
        <DashboardTable />
      </div>
    </div>
  );
};

export default Dashboard;
