import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link to="/">App . . .</Link>
    </div>
  );
};

export default Header;
