import { Button, Layout, Menu } from "antd";
import Searchbar from "../Utils/Searchbar";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
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
  MenuUnfoldOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header } = Layout;

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [select, setSelect] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const menuFunc = () => {
    setMenu(!menu);
  };
  function handleClick(index) {
    setSelect(index);
    localStorage.setItem("selectedItem", index);
  }
  useEffect(() => {
    sessionStorage.setItem("menuValue", menu);
  }, [menu]);

  console.log(menu);

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

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
    <div className="navbar">
      <div className="app-container">
        <Button
          style={{
            marginBottom: 7,
          }}
          className="navmenubutton menuIcon"
          type="primary"
          onClick={toggleCollapsed}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuOutlined />}
          {null}
        </Button>
      </div>
      <h3>Hello Shahrukh 👋,</h3>
      <Searchbar />
      {collapsed ? (
        <Menu
          style={{ width: "200px", marginTop: 200 }}
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="dark"
          items={items}
          className="menuIcon"
          onClick={({ key }) => handleClick(key)}
        />
      ) : null}
    </div>
  );
};

export default Navbar;
