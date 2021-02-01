import React, { useState, Children } from "react";
import Fields from "../Fields";
import Additional from "../Additional";
import { Route } from "react-router-dom";
import Payment from "../Payment";

function BookingWrap() {
  const [booking, setBooking] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  console.log(booking);

  const showLogic = () => {
    if (!booking && !showPayment) {
      return <Fields booking={booking} setBooking={setBooking}></Fields>;
    } else if (booking && !showPayment) {
      return (
        <Additional
          booking={booking}
          setBooking={setBooking}
          setShowPayment={setShowPayment}
        ></Additional>
      );
    } else if (showPayment) {
      return <Payment booking={booking}></Payment>;
    }
  };

  return (
    <div>
      {/*  {!booking && !showPayment ? (
        <Fields booking={booking} setBooking={setBooking}></Fields>
      ) : (
        <Additional
          booking={booking}
          setBooking={setBooking}
          setShowPayment={setShowPayment}
        ></Additional>
      )}
      <Payment booking={booking}></Payment> */}
      {showLogic()}
    </div>
  );
}

export default BookingWrap;
