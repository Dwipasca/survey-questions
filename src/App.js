import * as React from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SurveyList from "./pages/SurveyList";
import SurveyCreate from "./pages/SurveyCreate";
import SurveyEdit from "./pages/SurveyEdit";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SurveyList />} />
        <Route path="/create-survey" element={<SurveyCreate />} />
        <Route path="/edit-survey/:id" element={<SurveyEdit />} />
      </Routes>
      <Footer />
    </>
  );
}
