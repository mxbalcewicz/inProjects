import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";
import noImage from "../../assets/no_image.png";

const ListItem = ({
  id,
  name,
  surname,
  profession,
  age,
  image,
  openModalFn,
  deleteFn,
  editFn,
}) => {
  const imgNone = image == null ? true : false;

  return (
    <li className={styles.wrapper}>
      <img
        src={imgNone ? noImage : image}
        className={styles.image}
        alt={name}
      />
      <div>
        <Title>
          {name} {surname}
        </Title>
        <p className={styles.profession}>Zawód: {profession}</p>
        <p className={styles.age}>Wiek: {age}</p>
        <div>
          <Button onClick={() => editFn(id)}>Edytuj</Button>
          <Button onClick={() => deleteFn(id)}>Usuń</Button>
        </div>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string,
};

// ListItem.defaultProps = {
//   image: null,
//   description: "One of the React creators",
// };

export default ListItem;
