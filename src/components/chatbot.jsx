import React, { useState } from "react";
import DiseasePrediction from "./diseasePrediction";
import { Link } from "react-router-dom";

const Chatbot = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(true);
  };

  const closeExpand = () => {
    setExpanded(false);
  };

  return (
    <Link to="/diseasePrediction" className="fixed bottom-4 right-4 z-50">
      <img
        onClick={toggleExpand}
        className="bg-orange-300 p-1 rounded-full hover:scale-110 duration-500 animate-bounce"
        width={70}
        src="/images/chatbot.png"
        alt="chat bot"
      />
    </Link>
  );
};

export default Chatbot;
