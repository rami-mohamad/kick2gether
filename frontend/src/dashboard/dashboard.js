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
    setUser(user.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="Dashboard">
      <h1 className="UserName">{`Welcome ${user.user.name}`}</h1>
      <div className="Cards">
        <ul className="List">
          {user.bookings.map((book, index) => (
            <li key={index} className="Orders">
              <div>
                <p>{`Order number ${index + 1}`}</p>

                <p>{`Book Id : ${book._id}`}</p>
                <p>{`Start Time : ${book.startTime}`}</p>
                <p>{`End Time : ${book.endTime}`}</p>
                <p>{`Number of players : ${book.numberOfPersons}`}</p>
                <p>{`your locker pin is : ${book.pin}`}</p>
                <p>{`Towels : ${book.towels}`}</p>
                {book.shoes.map((shoe) => (
                  <p>{`shoe size ${shoe}`}</p>
                ))}
                {book.tshirt.map((shirt) => (
                  <p>{`Tshirt size : ${shirt}`}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Dashboard;
