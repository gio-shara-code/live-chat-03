import React from "react";

export default function LeftCenterPosition(props) {
  return (
    <div style={{ position: "absolute", left: "5px", top: "50%" }}>
      {props.children}
    </div>
  );
}
