import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Fields.scss";

function Fields() {
  return (
    <div className="booking">
      <form action="/action_page.php">
        <label className="label" htmlFor="users">
          Number of persons
        </label>
        <select id="users" className="users" name="users">
          <option className="users" value="1">
            User_Name
          </option>
          <option value="2">User_Name + 1</option>
          <option value="3">User_Name + 2</option>
          <option value="4">User_Name + 3</option>
        </select>
        <label className="label" htmlFor="date">
          Date
        </label>
        <input
          id="date"
          type="date"
          className="calender"
          placeholder="Choose date"
          min="2021-01-22"
          max="2021-04-25"
        ></input>
        <label className="label" htmlFor="startHour">
          Start Hour
        </label>
        <select id="startHour" className="users" name="users">
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
        </select>
        <label className="label" htmlFor="hoursQuantity">
          Hours Quantity
        </label>
        <select id="hoursQuantity" className="users" name="users">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <label className="label" htmlFor="field">
          Field
        </label>
        <select id="field" className="users" name="field">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input
          className="bookingButton"
          type="submit"
          value="book here"
        ></input>
      </form>
    </div>
  );
}

export default Fields;
