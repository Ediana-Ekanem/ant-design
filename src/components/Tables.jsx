import React from "react";
import { Table } from "antd";

const Tables = () => {
  const data = [
    {
      key: "1",
      "s/n": "1",
      name: "Ediana Ekanem",
      age: 5,
      email: "ediana@gmail.com",
    },
    {
      key: "2",
      "s/n": "2",
      name: "Imoh Akpan",
      age: 50,
      email: "imohAkpan@gmail.com",
    },
    {
      key: "3",
      "s/n": "3",
      name: "Abigial Lexna",
      age: 11,
      email: "lexnaabigial@gmail.com",
    },
    {
      key: "4",
      "s/n": "4",
      name: "Gibbs peterson",
      age: 36,
      email: "peterson@gmail.com",
    },
    {
      key: "5",
      "s/n": "5",
      name: "Mercy Edem",
      age: 26,
      email: "mercyedem@gmail.com",
    },
  ];
  const columns = [
    {
      title: "Serial Number",
      dataIndex: "s/n",
      key: "s/n",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];
  return (
    <div>
      <Table dataSource={data} columns={columns}></Table>
    </div>
  );
};

export default Tables;
