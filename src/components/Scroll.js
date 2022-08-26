import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid darkgrey",
        height: "76vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
