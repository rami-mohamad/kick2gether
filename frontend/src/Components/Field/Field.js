import React from "react";
import "./Field.scss";

function Field(props) {
  const { blocked, field } = props;
  //console.log(blocked, field);
  let points = [];

  for (let i = 1; i < 11; i++) {
    if (i <= blocked) {
      points.push(<div className={`userCircle userCircle_${i} blocked`}></div>);
    } else {
      points.push(<div className={`userCircle userCircle_${i}`}></div>);
    }
  }
  //console.log(points);

  return (
    <div className="flexCenter">
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