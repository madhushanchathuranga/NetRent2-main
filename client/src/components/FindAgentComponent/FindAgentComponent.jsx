import "./FindAgentComponent.scss";

function FindAgentComponent() {
  return (
    <div className="find-agent">
      <input
        className="find-agent_input"
        type="text"
        placeholder="Enter Your Suburb"
      />
      <button className="find-agent_button">Find Agent</button>
    </div>
  );
}

export default FindAgentComponent;
