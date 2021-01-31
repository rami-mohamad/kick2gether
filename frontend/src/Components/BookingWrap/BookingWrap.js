import React, { useState, Children } from "react";
import Fields from "../Fields";
import Additional from "../Additional";
import { Route } from "react-router-dom";
import Payment from "../Payment";

function BookingWrap() {
  const [booking, setBooking] = useState(false);

  console.log(booking);

  return (
    <div>
      {/* {!booking ? (
        <Fields booking={booking} setBooking={setBooking}></Fields>
      ) : (
        <Additional booking={booking} setBooking={setBooking}></Additional>
      )} */}
      <Payment></Payment>
    </div>
  );
}

export default BookingWrap;
