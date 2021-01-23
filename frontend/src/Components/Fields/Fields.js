import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Fields.scss";
import axios from "axios";
import Field from "../Field";

function Fields() {
  const [choosed, setChoosed] = useState("");
  const [date, setDate] = useState("2021-02-19");
  const [daySlots, setDaySlots] = useState({});

  //Booking only for 90 Days logic
  const today = new Date();
  const minDate = today.toISOString().slice(0, 10);
  const add90Days = new Date(today.setDate(today.getDate() + 90));
  const maxDate = add90Days.toISOString().slice(0, 10);
  console.log(minDate, maxDate);
  //// 90 Days booking end

  useEffect(() => {
    try {
      console.log("date changed");

      getSlots();
    } catch (error) {}
  }, [date]);

  ///////////
  const getSlots = async () => {
    const dateWrapper = { date: date };

    const daySlots = await axios.post(
      "http://localhost:4000/booking/search",
      dateWrapper
    );
    console.log(daySlots.data);
    setDaySlots(daySlots.data);
  };
  const bookingSubmitHandler = async (e) => {
    e.preventDefault();
    const myFormData = new FormData(e.target);
    const formData = myFormData.entries();
    const data = {};

    for (const pair of formData) {
      const [key, value] = pair;
      data[key] = value;
    }

    console.log(data);
  };
  ////////////
  const dataHandler = (e) => {
    console.log(e.target.value);
    const date = e.target.value;
    setDate(date);
  };
  ////
  const inputChangeHandler = (e) => {
    e.preventDefault();
    const myFormData = new FormData(e.target);
    const formData = myFormData.entries();
    const data = {};

    for (const pair of formData) {
      const [key, value] = pair;
      data[key] = value;
    }

    console.log(data);
  };
  ///
  return (
    <div className="booking">
      <Container>
        <Row>
          <Col>
            <div className="progressBar0"></div>
          </Col>
        </Row>
        <form onSubmit={bookingSubmitHandler} action="/action_page.php">
          <Row style={{ marginTop: "90px" }}>
            <Col style={{ alignItems: "center", display: "flex" }}>
              <select id="users" className="users" name="users">
                <option className="users" value="1">
                  User_Name
                </option>
                <option value="2">User_Name + 1</option>
                <option value="3">User_Name + 2</option>
                <option value="4">User_Name + 3</option>
              </select>
            </Col>

            <Col style={{ alignItems: "center", display: "flex" }}>
              <input
                onChange={dataHandler}
                id="date"
                type="date"
                className="calender"
                placeholder="Choose date"
                min={minDate}
                max={maxDate}
                name="date"
                defaultValue={minDate}
              ></input>
            </Col>

            <Col style={{ alignItems: "center", display: "flex" }}>
              <select id="startHour" className="users" name="startHour">
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
              </select>
            </Col>
            <Col style={{ alignItems: "center", display: "flex" }}>
              <input
                className="bookingButton"
                type="submit"
                value="book here"
              ></input>
            </Col>
          </Row>

          <Row>
            {/* <Col style={{ width: "170px" }}></Col>
            <Col style={{ width: "396px" }}></Col> */}
            <Col sm={{ size: "auto", offset: 7 }}>
              <select id="hoursQuantity" className="users" name="hoursQuantity">
                <option value="1">Book for 1 Hour</option>
                <option value="2">Book for 2 Hour</option>
                <option value="3">Book for 3 Hour</option>
                <option value="4">Book for 4 Hour</option>
              </select>
            </Col>

            <Col
              style={{
                alignItems: "center",
                display: "flex",
                marginLeft: "60px",
              }}
            ></Col>
          </Row>

          <Row>
            <Col sm={{ size: "auto", offset: 7 }} style={{ marginTop: "16px" }}>
              <select id="field" className="users" name="field">
                <option value="1">Field 1</option>
                <option value="2">Field 2</option>
                <option value="3">Field 3</option>
                <option value="4">Field 4</option>
              </select>
            </Col>

            <Col style={{ alignItems: "center", display: "flex" }}>
              <div>
                <div className="userInfo">
                  <div className="userInfo_circle"></div>
                  <div>Empty</div>
                </div>
                <div className="userInfo" style={{ marginTop: "13px" }}>
                  <div className="userInfo_circle userInfo_circle_red"></div>
                  <div>Booked</div>
                </div>
                <div className="userInfo" style={{ marginTop: "13px" }}>
                  <div>* Randomly picked positions for the players</div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="users">{date}</div>
        </form>
        <Row>
          <Col>
            <Field blocked={2} field={1}></Field>
          </Col>
          <Col style={{ justifyContent: "flex-end", display: "flex" }}>
            <Field blocked={8} field={2}></Field>
          </Col>
        </Row>
        <Row>
          <Col>
            <Field blocked={3} field={3}></Field>
          </Col>
          <Col style={{ justifyContent: "flex-end", display: "flex" }}>
            <Field blocked={10} field={4}></Field>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Fields;
