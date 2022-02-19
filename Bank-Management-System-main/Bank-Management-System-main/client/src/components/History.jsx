import "./history.css";
import { useState, useEffect } from "react";
import axios from "../axiosInstance";

function History() {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/transaction/all");
      setHistory((res.data).reverse());
    };
    fetchPosts();
  }, []);
  return (
    <div className="history">
      <div className="innerHead">Transaction History</div>
      <div className="tableDiv">
        <table>
          <tr>
            <th>Date</th>
            <th>Sender</th>
            <th>Reciever</th>
            <th>Amount</th>
          </tr>
          {history && history.map((frag) => (
            <tr>
              <td>{frag.createdAt.split('T')[0]}</td>
              <td>{frag.sender}</td>
              <td>{frag.receiver}</td>
              <td>{frag.amount}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default History;
