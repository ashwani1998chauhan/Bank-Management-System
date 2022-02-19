import "./transact.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { Button, Modal } from "react-bootstrap";

function Transact() {
  const [transact, setTransact] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState("");
  const handleClose = () => setShow(false);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/user/");
      setTransact((res.data).reverse());
    };
    fetchPosts();
  }, []);
  const getNewUserList = async () => {
    const res = await axios.get("/user/");
    setTransact(res.data.reverse());
  };
  const handleAddUser = async (e) => {
    e.preventDefault();
    const res = await axios.post("/user/register", {
      name: name,
      email: email,
      balance: balance,
    });
    alert("User Added!");
    if (res.data) {
      setShow(false);
      getNewUserList();
    }
  };
  return (
    <div className="history">
      <Modal show={show} onHide={handleClose} style={{ color: "darkgreen" }}>
        <Modal.Header closeButton>
          <Modal.Title>Add User Here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Enter the user details here:
          <div className="modalInputDiv">
            Name:{" "}
            <input
              className="modalInput"
              type="text"
              placeholder="e.g, Jack"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="modalInputDiv">
            Email:{" "}
            <input
              className="modalInput"
              type="email"
              placeholder="e.g, jack@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="modalInputDiv">
            Balance:{" "}
            <input
              className="modalInput"
              type="number"
              placeholder="e.g, 1000"
              onChange={(e) => setBalance(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddUser}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="innerHead">View and Transfer Money</div>
      <div className="innerBtnDiv">
        <button className="innerBtn" onClick={() => setShow(true)}>
          Add User
        </button>
      </div>
      <div className="tableDiv">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Balance</th>
            <th>Send Money</th>
          </tr>
          {transact &&
            transact.map((frag) => (
              <tr>
                <td>{frag.name}</td>
                <td>{frag.email}</td>
                <td>{frag.balance}</td>
                <td>
                  <Link to={`/user/${frag._id}`}>
                    <button className="tableBtn">Transfer</button>
                  </Link>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}

export default Transact;
