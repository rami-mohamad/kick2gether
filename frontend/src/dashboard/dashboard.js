import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../auth/authContext";
import "./Dashboard.scss";

function Dashboard() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser } = authContext;
  const [user, setUser] = useState({ user: { name: "" }, bookings: [] });
  const loadData = async () => {
    const user = await loadUser();
    console.log(user.data.user.name);

    // for (const [key, value] of user.data.bookings.entries(user.data.bookings)) {
    //   booking.push(
    //     <li>
    //       ${key}: ${value}
    //     </li>
    //   );
    // }
    setUser(user.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h1>{`Hello ${user.user.name}`}</h1>

      <ul>
        {user.bookings.map((book, index) => (
          <li key={index}>
            <div>
              <p>{`Order ${index + 1}`}</p>
              {book.tshirt.map((shirt) => (
                <p>shirt</p>
              ))}
              {book.shoes.map((shoe) => (
                <p>shoe</p>
              ))}
              <p>{book._id}</p>
              <p>{book.startTime}</p>
              <p>{book.endTime}</p>
              <p>{book.numberOfPersons}</p>
              <p>{book.pin}</p>
              <p>{book.towels}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Dashboard;
