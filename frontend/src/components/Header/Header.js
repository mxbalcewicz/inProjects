import React from "react";
import styles from "./Header.module.scss";
import Title from "../Title/Title";

const Header = ({ openModalFn, getReportFn }) => (
  <ul className={styles.wrapper}>
    <li className={styles.navItem}>
      <Title>inProjects</Title>
    </li>
    <li className={styles.navItem}>
      <span onClick={openModalFn}>Dodaj nowego pracownika</span>
    </li>
    <li className={styles.navItem}>
      <span onClick={getReportFn}>Pobierz raport średniej wieku</span>
    </li>
  </ul>
);

export default Header;
