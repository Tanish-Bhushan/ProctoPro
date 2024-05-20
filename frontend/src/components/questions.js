import React, { useState } from "react";

export const Question = ({question}) => {
    const [selectedValue, setSelectedValue] = useState(1);
  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };
  return (
    <div>
      <div className="font-[Poppins] m-4 border rounded-lg p-4">
        <h1 className="text-xl">{question[0]}</h1>
        <div>
          <div className="flex p-2 gap-5">
            <input
              type="radio"
              checked={selectedValue === 1}
              onChange={() => handleRadioChange(1)}
            />
            <label>{question[1]}</label>
          </div>
          <div className="flex p-2 gap-5">
            <input
              type="radio"
              checked={selectedValue === 2}
              onChange={() => handleRadioChange(2)}
            />
            <label>{question[2]}</label>
          </div>
          <div className="flex p-2 gap-5">
            <input
              type="radio"
              checked={selectedValue === 3}
              onChange={() => handleRadioChange(3)}
            />
            <label>{question[3]}</label>
          </div>
          <div className="flex p-2 gap-5">
            <input
              type="radio"
              checked={selectedValue === 4}
              onChange={() => handleRadioChange(4)}
            />
            <label>{question[4]}</label>
          </div>
        </div>
      </div>
    </div>
  );
};
