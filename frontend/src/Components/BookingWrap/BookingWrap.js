import React, { useState, Children } from "react";
import Fields from "../Fields";
import Additional from "../Additional";
import { Route } from "react-router-dom";

function BookingWrap() {
  const [booking, setBooking] = useState(false);
  console.log(booking);

  return (
    <div>
      {/* <Route
        path="/booking/search"
        render={() => <Fields booking={booking} setBooking={setBooking} />}
      />
      <Route
        booking={booking}
        setBooking={setBooking}
        path="/booking/additional"
        render={() => <Additional booking={booking} setBooking={setBooking} />}
      /> */}
      {!booking ? (
        <Fields booking={booking} setBooking={setBooking}></Fields>
      ) : (
        <Additional booking={booking} setBooking={setBooking}></Additional>
      )}
    </div>
  );
}

export default BookingWrap;
