import React, { useState, useEffect } from "react";
import "./index.css";
import List from "../../components/List/List";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import axios from "axios";
import api from "../../services/api";

const Root = () => {
  const [employeesList, setEmployeesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(null);

  const refreshEmployeesList = () => {
    api
      .get("/")
      .then((res) => {
        setEmployeesList(res.data);
      })
      .catch(console.error);
  };

  const openEditModalFn = (id) => {
    setIsModalOpen(false);
    setIsEditModalOpen(id);
  };

  const postFn = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    api
      .post("/", formData)
      .then(() => {
        refreshEmployeesList();
      })
      .catch((e) => console.log(e));
  };

  const putFn = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    
    api
      .put(`/${data.id}/`, formData)
      .then(() => refreshEmployeesList());
  };

  const deleteFn = (id) => {
    api.delete(`/${id}/`).then((response) => refreshEmployeesList());
  };

  const getReportFn = () => {
    axios({
      url: "http://localhost:8000/report/",
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "report.json");
      document.body.appendChild(link);
      link.click();
    });
  };

  useEffect(() => {
    refreshEmployeesList();
  }, []);

  return (
    <>
      <Header
        openModalFn={() => {
          setIsModalOpen(true);
          setIsEditModalOpen(null);
        }}
        getReportFn={getReportFn}
      />
      <List
        items={employeesList}
        deleteFn={deleteFn}
        editFn={openEditModalFn}
      />
      {isModalOpen && (
        <Modal
          title={"Dodaj pracownika"}
          closeModalFn={() => setIsModalOpen(false)}
          submitFn={postFn}
          items={employeesList}
        />
      )}
      {isEditModalOpen && (
        <Modal
          title={"Edytuj pracownika"}
          closeModalFn={() => setIsEditModalOpen(false)}
          submitFn={putFn}
          items={employeesList}
          employeeId={isEditModalOpen}
        />
      )}
    </>
  );
};

export default Root;
