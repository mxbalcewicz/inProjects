import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({tag: Tag, name, label, maxLength, type, onChange, value}) => (
  <div className={styles.formItem}>
    <Tag
      className={Tag === 'textarea' ? styles.textarea : styles.input}
      type={type ? type : "text"}
      name={name}
      id={name}
      required={type ? false : true}
      maxLength={maxLength}
      value={value}
      placeholder=" "
      accept={type ? "image/*" : "*"}
      onChange={onChange}
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.formItemBar} />
  </div>
);

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
}

Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
}

export default Input;