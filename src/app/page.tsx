"use client"
import React, {useState} from "react";
import Login from "../Components/Login"
import LoadingWeb from "../Components/General/LoadingWeb"
import { Button } from "react-bootstrap";
import logo from "../../public/background.svg";

export default function Home() {

  const [page, setPage] = useState(false);
	setTimeout(() => {
    setPage(true);
  }, 3000);

  return (
    <>
      {page &&  
          <div style={{
            background: "linear-gradient(to bottom, #121f1d, #0b5871, #eda800)", 
            width: "100%",
            margin: "0", 
            paddingTop: "100px", 
            paddingBottom: "100px",
            display: "relative", 
            height: "" 
            }} className="">
              <Login />
          </div>
      }

      {!page && <LoadingWeb />}  
    </>
  );
}
