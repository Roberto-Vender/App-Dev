import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard";
import ChoosePuzzle from "../pages/ChoosePuzzle";
import Riddles from "../pages/Riddles";
import Correct from "../pages/Correct";
import Incorrect from "../pages/Incorrect";
import Logic from "../pages/Logic";
import Endurance from "../pages/Endurance";
import LeaderBoard from "../pages/LeaderBoard";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="HomePage" element={<HomePage />} />
      <Route path="Login" element={<Login />} />
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="ChoosePuzzle" element={<ChoosePuzzle />} />
      <Route path="Riddles" element={<Riddles />} />
      <Route path="Correct" element={<Correct />} />
      <Route path="Incorrect" element={<Incorrect />} />
      <Route path="Logic" element={<Logic />} />
      <Route path="Endurance" element={<Endurance />} />
      <Route path="LeaderBoard" element={<LeaderBoard />} />
    </Routes>
  );
}