import React, { useState } from "react";
import "./Field.scss";
import { v4 as uuidv4 } from "uuid";

function Field(props) {
  const { blocked, field } = props;
  //console.log(blocked, field);
  const mql = window.matchMedia("(max-width: 500px)");
  const mobileView = mql.matches;

  let points = [];

  for (let i = 1; i < 11; i++) {
    if (i <= blocked) {
      points.push(
        <div
          className={`userCircle userCircle_${i} blocked`}
          key={uuidv4()}
        ></div>
      );
    } else {
      points.push(
        <div className={`userCircle userCircle_${i}`} key={uuidv4()}></div>
      );
    }
  }
  //console.log(points);

  return (
    <div className={mobileView ? "flexCenter_mobile" : "flexCenter"}>
      <div
        className={
          blocked === 10 ? "bookedPlayers bookedPlayers_full" : "bookedPlayers"
        }
      >{`${blocked}  /  10`}</div>
      <div
        className={
          blocked === 10
            ? `field field_${field} bookedOut`
            : `field field_${field}`
        }
      >
        {points.map((element) => {
          return element;
        })}
      </div>
    </div>
  );
}

export default Field;
