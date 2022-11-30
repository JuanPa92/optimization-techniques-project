import React from "react";

const DemoOutput = (props) => {
  console.log("DEMO running");
  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default React.memo(DemoOutput);
