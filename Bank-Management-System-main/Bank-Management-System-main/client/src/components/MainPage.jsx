import "./mainpage.css";
import bankImg from "../img/Bank.png";

function MainPage() {
  return (
    <div className="main">
      <img className="bankImg" src={bankImg} alt="bankImage" />
      <div className="frontContent">
        <div className="mainH1">Welcome to Bank Management System</div>
      </div>
    </div>
  );
}

export default MainPage;
