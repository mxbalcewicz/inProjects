import React, { useState } from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";

const Form = ({ title, submitFn, setIsModalOpen, items, employeeId }) => {
  const employee = items.find((el) => el.id === employeeId);
  const [id, setId] = useState(employee?.id);
  const [name, setName] = useState(employee?.name);
  const [surname, setSurname] = useState(employee?.surname);
  const [profession, setProfession] = useState(employee?.profession);
  const [age, setAge] = useState(employee?.age);
  const [image, setImage] = useState("");

  const isEditModal = title === "Edytuj pracownika" ? true : false;
  
  const handleAgeInput = (e) => {
    if (e.target.value < 0) {
      e.target.value = Math.max(0, age);
      return;
    }
    setAge(e.target.value);
  };

  const handleFileInput = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className={styles.wrapper}>
      <Title>{title}</Title>
      <form
        autoComplete="off"
        className={styles.form}
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          submitFn({id, name, surname, profession, age, image});
          setIsModalOpen(false);
        }}
      >
        <Input
          name="name"
          label="Imię"
          maxLength={30}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          name="surname"
          label="Nazwisko"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <Input
          name="profession"
          label="Zawód"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
        <Input
          name="age"
          label="Wiek"
          type="number"
          value={age}
          onChange={handleAgeInput}
        />
        <Input
          name="photo"
          label="Zdjęcie"
          type="file"
          onChange={handleFileInput}
        />
        <Button type="submit">{isEditModal ? "Edytuj" : "Dodaj"}</Button>
      </form>
    </div>
  );
};

export default Form;
