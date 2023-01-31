import React, { useState, useCallback } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState(50);
  const [tipPercent, setTipPercent] = useState(18);
  const [numOfPpl, setNumOfPpl] = useState(1);

  const calculateTotalTip = useCallback(() => {
    const total = bill * (tipPercent / 100).toFixed(2);

    // usecase: total = 9
    return total;

    // usecase: total = 9.50
  }, [bill, tipPercent]);

  const calculateTipPerPerson = useCallback(() => {
    const total = calculateTotalTip();
    const tipPer = total / numOfPpl;
    return tipPer;
  }, [numOfPpl, calculateTotalTip]);

  return (
    <>
      <label>
        Bill
        <input
          type="number"
          value={bill}
          id="css"
          onChange={(e) => {
            setBill(e.target.value);
          }}
        />
      </label>
      <label>
      Tip Percentage
        <input
          type="number"
          value={tipPercent}
          onChange={(e) => {
            setTipPercent(e.target.value);
          }}
        />
      </label>
      <label>
        Number of People
      <input
        type="number"
        value={numOfPpl}
        
        onChange={(e) => {
          setNumOfPpl(e.target.value);
        }}
      />
        </label>

      <p>Total Tip: {
      calculateTotalTip() > 0 ?
      "$" + calculateTotalTip().toFixed(2)
        : '-'
      
      }</p>
      <p>Tip Per Person: {
      calculateTipPerPerson() > 0 ?
      "$" + calculateTipPerPerson().toFixed(2)
      : '-'
      }</p>
    </>
  );
}
