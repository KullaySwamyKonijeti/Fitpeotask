import React from "react";
import Searchbar from "../../Utils/Searchbar";
import { Table, Image } from "antd";
import "./DashboardTable.scss";
import { Bhavani, Chandra } from "../../images/index";

const DashboardTable = () => {
  const data = [
    {
      key: 1,
      productName: "Abstarct 3D",
      stock: 50,
      price: "$10.0",
      totalSale: 500.0,
      imageUrl: Bhavani,
    },
    {
      key: 2,
      productName: "Sarphens illustration",
      stock: 30,
      price: "$15.0",
      totalSale: 450.0,
      imageUrl: Chandra,
    },
  ];

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      render: (text, record) => {
        return (
          <>
            <Image src={record.imageUrl} style={{ width: 45 }} /> &nbsp;
            <span>{text}</span>
          </>
        );
      },
      width: "60%",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Total Sale",
      dataIndex: "totalSale",
      key: "totalSale",
    },
  ];

  return (
    <>
      <div className="table_card">
        <div className="headings_container">
          <h3>Product Sell</h3>
          <div className="headings_container heading_second_container ">
            <Searchbar />
            <select className="dropdown">
              <option>Last 30 days</option>
            </select>
          </div>
        </div>
        <Table dataSource={data} columns={columns} className="table-header" />
      </div>
    </>
  );
};

export default DashboardTable;
