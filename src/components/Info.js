import headshot from "./headshot.jpg";
import { MdEmail } from "react-icons/md";

function Info() {
  return (
    <main className="card">
      <img src={headshot} className="headshot" alt="headshot" />
      <div className="container">
        <h1 className="card-name">Bob the Pug</h1>
        <h3 className="card-jobtitle">Food Tester</h3>
      </div>
      <button type="button" className="btn">
        <MdEmail className="btn-img" />
        <span className="btn-text">Email</span>
      </button>
    </main>
  );
}

export default Info;
