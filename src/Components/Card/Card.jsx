import React, { useState } from "react";
import team from "../../Data/team";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { id, name, role } = props.team;
  return (
    <div className={`${styles.teamCard}`}>
      <p team={team.name}>Name</p>
      <p team={team.role}>Role</p>
      <div className={`${styles.counter}`}>
        <p>Counter</p>
        <p>0</p>
        <p>+ -</p>
      </div>
    </div>
  );
};

export default Card;
