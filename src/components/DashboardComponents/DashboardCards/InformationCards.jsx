// Dashboard.js
import React from "react";
import "./InformationCards.scss";
import { DollarOutlined, ArrowUpOutlined } from "@ant-design/icons";

const InformationCards = (props) => {
  const {
    title,
    amount,
    icon,
    iconStyle,
    icon_container,
    percentChange,
    timeFrame,
    icon_and_info,
    percentChangeIcon,
    icon_color,
  } = props.data;
  return (
    <div className="card_main_container">
      <div className={`${icon_container}`}>
        <span className={`${iconStyle}`}> {icon}</span>
      </div>
      <div className="card_info_container">
        <p>{title}</p>
        <h3>{amount}</h3>
        <div className={`${icon_and_info}`}>
          <span className={`${icon_color}`}>{percentChangeIcon}</span>
          <p className={`${icon_color}`}>{percentChange}</p>
          <h6>{timeFrame}</h6>
        </div>
      </div>
    </div>
  );
};

export default InformationCards;
