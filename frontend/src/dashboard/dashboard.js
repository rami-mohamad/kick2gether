import React, { useEffect, useState, useContext } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import axios from "axios";
import AuthContext from "../auth/authContext";
import AlertContext from "../alert/alertContext";
import Alerts from "../alerts component/Alerts";
import "./Dashboard.scss";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../Components/NavbarHistory";

function Dashboard() {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { addAlert } = alertContext;
  const { loadUser } = authContext;
  const [user, setUser] = useState({ user: { name: "Test" }, bookings: [] });
  const loadData = async () => {
    const user = await loadUser();
    console.log(user);

    //console.log("123", user.data.bookings.name);
    setUser(user.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  async function deleteOrder(id) {
    console.log(id);
    const res = await axios.get(`http://localhost:4000/booking/delete/${id}`, {
      withCredintials: true,
    });
    addAlert("Order successfuly Deleted!!!!");
    loadData();
  }
  return (
    <>
      <Navbar></Navbar>

      <div className="Dashboard">
        <h1 className="UserName">{`Welcome ${user.user.name}`}</h1>
        <Alerts className="DashboardAlert" />
        <div className="Cards">
          <ul className="List">
            {user.bookings.map((book, index) => (
              <ListGroup key={index} className="Orders">
                <p key={uuidv4()} className="OrderNumber">{`Order number ${
                  index + 1
                }`}</p>

                <ListGroupItem
                  key={uuidv4()}
                >{`Book Id : ${book._id}`}</ListGroupItem>
                <ListGroupItem
                  key={uuidv4()}
                >{`Start Time : ${book.startTime}`}</ListGroupItem>
                <ListGroupItem
                  key={uuidv4()}
                >{`End Time : ${book.endTime}`}</ListGroupItem>
                <ListGroupItem
                  key={uuidv4()}
                >{`Number of players : ${book.numberOfPersons}`}</ListGroupItem>
                <ListGroupItem
                  key={uuidv4()}
                >{`your locker pin is : ${book.pin}`}</ListGroupItem>

                {book.shoes.map((shoe) => (
                  <ListGroupItem
                    key={uuidv4()}
                  >{`shoe size :${shoe}`}</ListGroupItem>
                ))}
                {book.tshirt.map((shirt) => (
                  <ListGroupItem
                    key={uuidv4()}
                  >{`Tshirt size : ${shirt}`}</ListGroupItem>
                ))}
                <ListGroupItem
                  key={uuidv4()}
                  className="Towels"
                >{`Towels : ${book.towels}`}</ListGroupItem>
                <Button
                  color="danger"
                  size="lg"
                  className="DeleteOrder"
                  onClick={() => deleteOrder(book._id)}
                >
                  Delete Order
                </Button>
              </ListGroup>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
