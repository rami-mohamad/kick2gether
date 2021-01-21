import React from "react";
import "./Field.scss";

function Field(props) {
  const { blocked, field } = props;
  console.log(blocked, field);
  let points = [];
  for (let i = 1; i < 11; i++) {
    if (i <= blocked) {
      points.push(<div className={`userCircle userCircle_${i} blocked`}></div>);
    } else {
      points.push(<div className={`userCircle userCircle_${i}`}></div>);
    }
  }
  console.log(points);

  return (
    <div className="field field_1">
      {points.map((element) => {
        return element;
      })}
    </div>
  );
}

export default Field;
