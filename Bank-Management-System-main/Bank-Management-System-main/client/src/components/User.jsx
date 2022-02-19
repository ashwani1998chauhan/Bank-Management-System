import "./user.css";
import { useState, useEffect } from "react";
import axios from "../axiosInstance";
import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  const [user, setUser] = useState([]);
  const [sender, setSender] = useState([]);
  const [senderId, setSenderId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [receiver, setReceiver] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/user/${params.id}`);
      const userRes = await axios.get(`/user/`);
      setUser(res.data);
      setUsers(userRes.data);
      setSender(res.data.name);
      setSenderId(res.data._id);
    };
    fetchPosts();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/transaction/register", {
      sender: sender,
      receiver: receiver,
      amount: inputValue,
    });
    const amountRes = await axios.put(`/user/${senderId}`, {
      balance: inputValue,
    });
    const receiverRes = await axios.put(`/user/add/${receiverId}`, {
      balance: inputValue,
    });
    alert("Transaction Completed!");
    res.data &&
      amountRes.data &&
      receiverRes.data &&
      window.location.replace("/history");
  };
  return (
    <div className="user">
      <div className="innerHead">Transfer Money</div>
      <div className="userInner">
        <form onSubmit={handleSubmit}>
          <div className="formComp">
            <h5>Send To:</h5>
            <select
              className="formSelect"
              onChange={(e) => {
                const fetchPosts = async () => {
                  const res = await axios.get(`/user/${e.target.value}`);
                  res.data && setReceiver(res.data.name);
                  setReceiverId(e.target.value);
                };
                fetchPosts();
              }}
            >
              {users &&
                users.map((frag) => (
                  <option value={frag._id}> {frag.name}</option>
                ))}
            </select>
          </div>
          <div className="formComp">
            <h5>Amount:</h5>
            <input
              className="formSelect"
              type="number"
              placeholder="e.g, 1000"
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
          </div>
          <div className="formComp">
            <h5>Sending From:</h5>
            <div className="tableDiv formTable">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Balance</th>
                </tr>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.balance}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="formComp formBtn">
            <button className="tableBtn" type="submit">
              Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
