import React, { useState, useEffect, createElement } from "react";
import "./Dashboard.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
axios.defaults.withCredentials = true;

function Dashboard() {
  const history = useHistory();
  const [bookings, setBookings] = useState({
    user: { name: "test" },
    bookings: [],
  });
  const getField = (fieldId) => {
    if (fieldId === "60001b41e894950bec3046ae") {
      return "1";
    }
    if (fieldId === "60001b41e894950bec3046af") {
      return "2";
    }
    if (fieldId === "60001b41e894950bec3046b0") {
      return "3";
    }
    if (fieldId === "60001b41e894950bec3046b1") {
      return "4";
    }
  };
  const collectBookings = async (e) => {
    try {
      const result = await axios.get("http://localhost:4000/booking/dashboard");
      console.log(result.data);
      setBookings(result.data);
    } catch (error) {
      console.log(error); //later to notification
      //return history.push("/registration");
    }
  };
  useEffect(() => {
    collectBookings();
  }, []);
  const bookingsArray = [];

  useEffect(() => {
    {
      bookings.bookings.map(async (fullBooking) => {
        const oneBooking = document.createElement("div");
        oneBooking.className = "oneBooking";

        for (const [key, value] of Object.entries(fullBooking)) {
          console.log(`${key}: ${value}`);
          if (key === "_id" || "user") {
            /* return ""; */
          }
          const parent = document.createElement("div");
          //parent.className = "w100";
          const child = document.createElement("div");

          const title1 = document.createElement("div");
          title1.className = "oneBooking_title";

          title1.innerHTML = `${key}`;
          const value1 = document.createElement("div");
          value1.className = "oneBooking_value";
          value1.innerHTML = `${value}`;
          if (key === "field") {
            value1.innerHTML = `${getField(value)}`;
          }

          child.appendChild(title1);
          child.appendChild(value1);
          parent.appendChild(child);

          oneBooking.appendChild(parent);
        }
        bookingsArray.push(oneBooking);
      });
      console.log(bookingsArray);
      bookingsArray.map((elem) => {
        document.body.appendChild(elem);
      });
    }
  }, [bookings]);

  return (
    <div>
      <div className="dashboard">
        <div className="dashboard_title">{`Hello ${bookings.user.name} here is your bookings`}</div>
        {bookingsArray.map((elem) => {
          return elem;
        })}
        <div>
          <div className="oneBooking">
            <div style={{ width: "100px" }}>
              <div className="oneBooking_title">Name</div>
              <div className="oneBooking_value">Max</div>
            </div>
            <div style={{ width: "100px" }}>
              <div className="oneBooking_title">Name</div>
              <div className="oneBooking_value">Max</div>
            </div>
            <div style={{ width: "100px" }}>
              <div className="oneBooking_title">Name</div>
              <div className="oneBooking_value">Max</div>
            </div>
            <div style={{ width: "100px" }}>
              <div className="oneBooking_title">Name</div>
              <div className="oneBooking_value">Max</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
