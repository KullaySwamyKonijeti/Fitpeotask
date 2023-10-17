import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const Searchbar = () => {
  return (
    <div className="searchbar_main">
      <SearchOutlined /> 
      <input className="searchbar" placeholder="Search"/>
    </div>
  );
};

export default Searchbar;
