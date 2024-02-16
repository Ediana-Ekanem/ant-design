import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Input, Modal, Table } from "antd";
import React, { useState } from "react";

const Crud = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editingCustomer, seteditingCustomer] = useState(null);
  // All DataSource
  const [dataSource, setdataSource] = useState([
    {
      id: 1,
      sn: "1",
      name: "Ediana Ekanem",
      email: "ediana@gmail.com",
      phone: "0902345678",
    },
    {
      id: 2,
      sn: "2",
      name: "Mike Styles",
      email: "mike@gmail.com",
      phone: "0973673348",
    },
    {
      id: 3,
      sn: "3",
      name: "Peace Paul",
      email: "peacepaul@gmail.com",
      phone: "081653744",
    },
    {
      id: 4,
      sn: "4",
      name: "Dave Ume",
      email: "daveume@gmail.com",
      phone: "09056748664",
    },
    {
      id: 5,
      sn: "5",
      name: "Vimbai Uhono",
      email: "vimbaiy@gmail.com",
      phone: "081627488",
    },
  ]);

  // The columns
  const columns = [
    {
      key: 1,
      id: 1,
      title: "S/N",
      dataIndex: "sn",
    },
    {
      key: 2,
      id: 2,
      title: "Name",
      dataIndex: "name",
    },
    {
      key: 3,
      id: 3,
      title: "Email",
      dataIndex: "email",
    },
    {
      key: 4,
      id: 4,
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      key: 5,
      id: 5,
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                editCustomer(record);
              }}
              style={{ color: "blue" }}
            />
            <DeleteOutlined
              onClick={() => {
                deleteNewCustomer(record);
              }}
              style={{ color: "red", marginLeft: "12px" }}
            />
          </>
        );
      },
    },
  ];
  // All Functions
  const addNewCustomer = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newCustomer = {
      id: randomNumber,
      sn: randomNumber,
      name: "Name" + randomNumber,
      email: randomNumber + "@gmail.com",
      phone: "08023" + randomNumber,
    };
    setdataSource((prev) => {
      return [...prev, newCustomer];
    });
  };

  const deleteNewCustomer = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this customer ?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setdataSource((prev) => {
          return prev.filter((customer) => customer.id !== record.id);
        });
      },
    });
  };

  const editCustomer = (record) => {
    setIsEdit(true);
    seteditingCustomer({ ...record });
  };

  // save Edit
  const resetEditing = () => {
    setIsEdit(false);
    seteditingCustomer(null);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px auto",
        }}
      >
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "8px 16px",
            borderRadius: "5px",
            fontWeight: "bold",
            border: "none",
          }}
          onClick={addNewCustomer}
        >
          Add new Customer
        </button>
      </div>
      <Table columns={columns} dataSource={dataSource}></Table>
      <Modal
        title="Edit Customer"
        visible={isEdit}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setdataSource((prev) => {
            return prev.map((customer) => {
              if (customer.id === editingCustomer.id) {
                return editingCustomer;
              } else {
                return customer;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editingCustomer?.name}
          onChange={(e) => {
            seteditingCustomer((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        ></Input>
        <Input
          value={editingCustomer?.email}
          onChange={(e) => {
            seteditingCustomer((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        ></Input>
        <Input
          value={editingCustomer?.phone}
          onChange={(e) => {
            seteditingCustomer((prev) => {
              return { ...prev, phone: e.target.value };
            });
          }}
        ></Input>
      </Modal>
    </div>
  );
};

export default Crud;
