import { assets } from "../../../assets/assets";
import "./JoinUsAgent.scss";

function JoinUsAgent() {
  return (
    <div className="join-us-agent">
      {/* Join Us as Agent Button */}
      <button className="join-us-button">Join us as agent</button>

      {/* Call Customer Care Button */}
      <button className="call-us-button">
        <img src={assets.call} alt="Call Icon" />
        <span>Call customer care</span>
      </button>
    </div>
  );
}

export default JoinUsAgent;
