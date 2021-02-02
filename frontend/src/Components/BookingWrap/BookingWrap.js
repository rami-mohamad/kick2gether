import React, { useState, Children } from "react";
import Fields from "../Fields";
import Additional from "../Additional";
import { Route } from "react-router-dom";
import Payment from "../Payment";
import BookingConfirmation from "../BookingConfirmation";
import FieldsMobile from "../FieldsMobile";

function BookingWrap() {
  const [booking, setBooking] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  console.log(booking);
  const mql = window.matchMedia("(max-width: 800px)");
  const mobileView = mql.matches;
  console.log("mobile view is ", mobileView);

  const showLogic = () => {
    if (!booking && !showPayment) {
      if (mobileView) {
        return (
          <FieldsMobile
            booking={booking}
            setBooking={setBooking}
          ></FieldsMobile>
        );
      } else {
        return <Fields booking={booking} setBooking={setBooking}></Fields>;
      }
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
      {showLogic()}
      {/*  <BookingConfirmation></BookingConfirmation> */}
      {/* <FieldsMobile></FieldsMobile> */}
    </div>
  );
}

export default BookingWrap;
