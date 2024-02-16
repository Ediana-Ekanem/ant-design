import { Table } from "antd";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const columns = [
    {
      key: "id",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "userId",
      title: "User ID",
      dataIndex: "userId",

      sorter: (record1, record2) => {
        return record1.userId > record2.userId;
      },
    },
    {
      key: "completed",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Complete " : "In Progress"}</p>;
      },
      filters: [
        { text: "Complete", value: true },
        { text: "In Progress", value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];
  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          // current: 4,
          pageSize: 5,
        }}
      ></Table>
    </div>
  );
};

export default Pagination;
