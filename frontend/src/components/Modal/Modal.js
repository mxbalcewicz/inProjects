import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({ title, closeModalFn, submitFn, items, employeeId }) => (
  <div className={styles.wrapper}>
    <button className={styles.closeButton} onClick={closeModalFn} />
    <Form title={title} submitFn={submitFn} setIsModalOpen={closeModalFn} items={items} employeeId={employeeId} />
  </div>  
);

export default Modal;