import React, { useState } from "react";
import DiseasePrediction from "./diseasePrediction";

const Chatbot = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(true);
  };

  const closeExpand = () => {
    setExpanded(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={` text-white cursor-pointer ${
          expanded ? "w-[1200px] h-[800px] " : "w-16"
        }`}
      >
        {expanded ? (
          <>
            <p onClick={closeExpand}>Close</p>
            <div className="mb-24">
              <DiseasePrediction />
            </div>
          </>
        ) : (
          <img
            onClick={toggleExpand}
            width={50}
            src="public/images/chatbot.png"
            alt="chat bot"
          />
        )}
      </div>
    </div>
  );
};

export default Chatbot;
