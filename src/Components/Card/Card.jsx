import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const teamData = props;
  return (
    <div className={`${styles.teamCard}`}>
      <p>Name</p>
      <p>Role</p>
      <div className={`${styles.counter}`}>
        <p>Counter</p>
        <p>0</p>
        <p>+ -</p>
      </div>
    </div>
  );
};

export default Card;
