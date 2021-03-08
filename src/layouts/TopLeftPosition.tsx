import React from "react";

export default function TopLeftPosition(props) {
  return (
    <div style={{ position: "absolute", top: "10px", left: "10px" }}>
      {props.children}
    </div>
  );
}
