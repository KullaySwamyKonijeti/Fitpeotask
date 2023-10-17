import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import {
  AppstoreOutlined,
  RightOutlined,
  CommentOutlined,
  TeamOutlined,
  FundProjectionScreenOutlined,
  DatabaseOutlined,
  DashboardOutlined,
  SettingOutlined,
  DownOutlined,
  CloseOutlined,
  DownCircleFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Pavan } from "../images/index";

const Sidebar = () => {
  const [select, setSelect] = useState(
    localStorage.getItem("selectedItem") || "dashboard"
  );

  function handleClick(index) {
    setSelect(index);
    localStorage.setItem("selectedItem", index);
  }

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem(
      <Link to="/" className="link">
        Dashboard
      </Link>,
      "dashboard",
      <AppstoreOutlined />
    ),
    getItem(
      <Link to="/about" className="link">
        <div className="contsainer">
          <p>Product</p>
          <RightOutlined />
        </div>
      </Link>,
      "Product",
      <div>
        <FundProjectionScreenOutlined />
      </div>
    ),
    getItem(
      <Link to="/about" className="link">
        <div className="contsainer">
          <p>Coustomers</p>
          <RightOutlined />
        </div>
      </Link>,
      "Coustomers",
      <div>
        <TeamOutlined />
      </div>
    ),
    getItem(
      <Link to="/about" className="link">
        <div className="contsainer">
          <p>Income</p>
          <RightOutlined />
        </div>
      </Link>,
      "Income",
      <div>
        <DatabaseOutlined />
      </div>
    ),
    getItem(
      <Link to="/about" className="link">
        <div className="contsainer">
          <p>Promote</p>
          <RightOutlined />
        </div>
      </Link>,
      "Promote",
      <div>
        <DashboardOutlined />
      </div>
    ),
    getItem(
      <Link to="/about" className="link">
        <div className="contsainer">
          <p>Help</p>
          <RightOutlined />
        </div>
      </Link>,
      "Help",
      <div>
        <CommentOutlined />
      </div>
    ),
  ];

  return (
    <>
      <>
        <div
          className="leftmenu-block app-menu"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <div className="crossMark">
              <CloseOutlined />
            </div>
            <div className="MainName">
              <span>
                <SettingOutlined />
              </span>
              <p>{select}</p>
            </div>
            <Sider trigger={null}>
              <Menu
                selectedKeys={select}
                defaultActiveFirst={"1"}
                onClick={({ key }) => handleClick(key)}
                mode="inline"
                className="leftmenu "
                items={items}
              />
            </Sider>
          </div>
          <div className="profile-container">
            <div className="names">
              <img src={Pavan} alt="img" style={{ width: 40 }} />
              <div>
                <h4>Evano</h4>
                <p>Project Manager</p>
              </div>
            </div>
            <DownCircleFilled />
          </div>
        </div>
      </>
    </>
  );
};

export default Sidebar;
