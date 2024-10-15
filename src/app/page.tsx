"use client"
import React, {useState} from "react";
import Login from "../Components/Login"
import LoadingWeb from "../Components/LoadingWeb"

export default function Home() {

  /* Show welcome page webpage*/
  const [page, setPage] = useState(false);
	setTimeout(() => {
    setPage(true);
  }, 3000);

  return (
    <>
      {page && <Login /> }
      {!page && <LoadingWeb />}  
    </>
  );
}
