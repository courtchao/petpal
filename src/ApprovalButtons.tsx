import React from "react";

class ApprovalButtons extends React.Component {
  render() {
    return (
      <>
        <button
          onClick={() => {
            return console.log("yaaaaaa");
          }}
        >
          YES
        </button>
        <button
          onClick={() => {
            return console.log("noooooo");
          }}
        >
          NO
        </button>
      </>
    );
  }
}

export default ApprovalButtons;
