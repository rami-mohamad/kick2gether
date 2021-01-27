import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Fields.scss";
import axios from "axios";
import Field from "../Field";

function Fields(props) {
  const setBooking = props.setBooking;
  // console.log(props.booking);

  //Booking only for 90 Days logic
  const today = new Date();
  const minDate = today.toISOString().slice(0, 10);
  const add90Days = new Date(today.setDate(today.getDate() + 90));
  const maxDate = add90Days.toISOString().slice(0, 10);
  console.log(minDate, maxDate);
  //// 90 Days booking end

  //My states
  const [choosed, setChoosed] = useState({});
  const [date, setDate] = useState(minDate);
  const [daySlots, setDaySlots] = useState({});
  const [fieldInfo, setFieldInfo] = useState({ 1: 10, 2: 10, 3: 10, 4: 10 });
  const [bookingPossibility, setBookingPossibility] = useState(false);

  ///End States

  ///References
  const myForm = useRef();
  ///End References

  //Triger submit on  change

  const submitTrigger = (e) => {
    myForm.current.click();
  };

  ////

  useEffect(() => {
    try {
      console.log("date changed");

      getSlots();
    } catch (error) {}
  }, [date]);
  useEffect(() => {
    try {
      console.log("choosed changed");

      toshowFields();
    } catch (error) {}
  }, [choosed]);

  //////////

  useEffect(() => {
    //console.log(choosed);
    //console.log(fieldInfo);
    console.log(
      choosed.field,
      fieldInfo[choosed.field],
      10 - fieldInfo[choosed.field]
    );

    if (choosed.users <= 10 - fieldInfo[choosed.field]) {
      setBookingPossibility(true);
    } else {
      setBookingPossibility(false);
    }
  }, [fieldInfo]);

  const checkPossibility = () => {};

  ////////////

  ///////////
  const getSlots = async () => {
    const dateWrapper = { date: date };

    const daySlots = await axios.post(
      "http://localhost:4000/booking/search",
      dateWrapper
    );
    console.log(daySlots.data);
    setDaySlots(daySlots.data);
    submitTrigger();
  };
  const bookingSubmitHandler = async (e) => {
    //console.log(myForm.current);

    e.preventDefault();
    const myFormData = new FormData(e.target);
    const formData = myFormData.entries();
    const data = {};

    for (const pair of formData) {
      const [key, value] = pair;
      data[key] = value;
    }

    console.log(data);
    setChoosed(data);
    //remove after test

    //remove after test
  };
  ////////////
  const dataHandler = (e) => {
    console.log(e.target.value);
    const date = e.target.value;
    setDate(date);
  };
  ////

  ///
  ///Prepare data to show fields
  const toshowFields = async () => {
    try {
      const start = choosed.startHour;
      const end = `${+choosed.startHour + +choosed.hoursQuantity}`;
      console.log(start, end);

      const checkFields = async () => {
        let newFieldInfo = {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
        };
        for (let i = start; i < end; i++) {
          console.log(daySlots[i]);

          if (daySlots[i] !== null && daySlots[i].field_1 > newFieldInfo[1]) {
            newFieldInfo[1] = daySlots[i].field_1;
          }
          if (daySlots[i] !== null && daySlots[i].field_2 > newFieldInfo[2]) {
            newFieldInfo[2] = daySlots[i].field_2;
          }
          if (daySlots[i] !== null && daySlots[i].field_3 > newFieldInfo[3]) {
            newFieldInfo[3] = daySlots[i].field_3;
          }
          if (daySlots[i] !== null && daySlots[i].field_4 > newFieldInfo[4]) {
            newFieldInfo[4] = daySlots[i].field_4;
          }
        }
        return newFieldInfo;
      };
      const newFieldInfo = await checkFields();
      console.log(newFieldInfo);
      setFieldInfo(newFieldInfo);
    } catch (error) {
      throw error;
    }
  };
  ///End of prepare date for show fields
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
              <select
                id="users"
                className="users"
                name="users"
                onChange={submitTrigger}
              >
                <option
                  className="users"
                  value="1"
                  style={{
                    backGround: "#ffffff",
                    border: "1px solid #5c5c5c",
                    boxSizing: "border-box",
                    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px",
                    fontFamily: "Roboto",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "16px",
                    lineHeight: "19px",
                  }}
                >
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
              <select
                id="startHour"
                className="users"
                name="startHour"
                onChange={submitTrigger}
              >
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
                <option value="19">19:00</option>
                <option value="20">20:00</option>
                <option value="21">21:00</option>
              </select>
            </Col>
            <Col style={{ alignItems: "center", display: "flex" }}>
              <input
                className="bookingButton"
                type="submit"
                value="book here"
                ref={myForm}
                style={{ display: "none" }}
              ></input>
              <button
                className={
                  bookingPossibility
                    ? "bookingButton"
                    : "bookingButton bookingButton_disabled"
                }
                value="book here"
                disabled={!bookingPossibility}
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Go to next progress ");
                  console.log(choosed);
                  setBooking(choosed);
                }}
              >
                book here
              </button>
            </Col>
          </Row>

          <Row>
            {/* <Col style={{ width: "170px" }}></Col>
            <Col style={{ width: "396px" }}></Col> */}
            <Col sm={{ size: "auto", offset: 7 }}>
              <select
                id="hoursQuantity"
                className="users"
                name="hoursQuantity"
                onChange={submitTrigger}
              >
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
              <select
                id="field"
                className="users"
                name="field"
                onChange={submitTrigger}
              >
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
            <Field blocked={fieldInfo[1]} field={1}></Field>
          </Col>
          <Col style={{ justifyContent: "flex-end", display: "flex" }}>
            <Field blocked={fieldInfo[2]} field={2}></Field>
          </Col>
        </Row>
        <Row>
          <Col>
            <Field blocked={fieldInfo[3]} field={3}></Field>
          </Col>
          <Col style={{ justifyContent: "flex-end", display: "flex" }}>
            <Field blocked={fieldInfo[4]} field={4}></Field>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Fields;
