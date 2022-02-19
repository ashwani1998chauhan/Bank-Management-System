import "./exchangemenu.css";
import viewImg from '../img/View.png'
import historyImg from '../img/History.png'
import { Link } from "react-router-dom";

function ExchangeMenu() {
  return (
    <div className="exchangeMenu">
    <h2>Here you can transact money as well as view the transaction history.</h2>
      <div className="counters">
        <div className="counter">
        <img className="counterImg" src={viewImg} alt="viewImage"/>
        <div className="counterText"><Link to="transact"><button className="counterBtn">Do a Transaction</button></Link></div></div>
        <div className="counter">
        <img className="counterImg" src={historyImg} alt="historyImage"/>
        <div className="counterText"><Link to="history"><button className="counterBtn">View Transaction History</button></Link></div></div>
      </div>
    </div>
  );
}

export default ExchangeMenu;
