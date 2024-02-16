import { Table, Tag } from "antd";
import React from "react";

const Table2 = () => {
  const columns = [
    {
      title: "Student's ID",
      dataIndex: "id",
    },
    {
      title: "Student's Name",
      dataIndex: "names",
    },
    {
      title: "Student's Grade",
      dataIndex: "grade",
      render: (tag) => {
        const color = tag.includes("A")
          ? "Blue"
          : tag.includes("B")
          ? "Green"
          : tag.includes("C")
          ? "Purple"
          : "Red";
        return (
          <Tag color={color} key={tag}>
            {tag}
          </Tag>
        );
      },
    },
    {
      title: "Student's Email",
      dataIndex: "email",
    },
  ];

  const dataSource = [
    {
      id: 1,
      key: 1,
      names: "Blessing Cletus",
      grade: "B",
      email: "cletusb@gmail.com",
    },
    {
      id: 2,
      key: 2,
      names: "Matthew Edubio",
      grade: "C",
      email: "blackdubio@gmail.com",
    },
    {
      id: 3,
      key: 3,
      names: "Paul Ishaku",
      grade: "D",
      email: "ishakuoflogos@gmail.com",
    },
    {
      id: 4,
      key: 4,
      names: "Ene Emeh",
      grade: "B+",
      email: "eneemeh@gmail.com",
    },
    {
      id: 5,
      key: 5,
      names: "Dickson Akara",
      grade: "A+",
      email: "dicksonakara@gmail.com",
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        // rowSelection={true}
        rowSelection={{
          type: "checkbox",
          onSelect: (record) => {
            console.log({ record });
          },
        }}
      ></Table>
    </div>
  );
};

export default Table2;
