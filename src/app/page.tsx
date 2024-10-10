"use client"

import Login from "../Components/Login"
import { Button } from "react-bootstrap";
import logo from "../../public/background.svg";

export default function Home() {
  return (
      <div style={{
        background: "linear-gradient(to bottom, #121f1d, #0b5871, #eda800)", 
        width: "100%",
        margin: "0", 
        padding: "0", 
        display: "flex", 
        height: "100%" 
        }}>
        <Login />

      </div>
  );
}
