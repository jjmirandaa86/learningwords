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
    <div>
      
      {page && <Login /> }
      {!page && <LoadingWeb />}  
    </div>
  );
}
