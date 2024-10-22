"use client"
import Login from "@/app/login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "./register";
import PasswortVergessen from "./passwortvergessen";

export default function Home() {
  return (
   <div className="h-screen bg-gradient-to-b bg-fixed from-gradient-start to-gradient-end">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path="/passwort-vergessen" element={<PasswortVergessen/>} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}
