import React, { useState, useEffect } from 'react';
import '../style/MoneyDurationCalculator.css'; // Import the CSS file

const MoneyDurationCalculator = () => {
  const [currentMoney, setCurrentMoney] = useState(0);
  const [yearlyInterest, setYearlyInterest] = useState(0);
  const [inflation, setInflation] = useState(0);
  const [monthlySpending, setMonthlySpending] = useState(0);
  const [months, setMonths] = useState(0);

  useEffect(() => {
    if (currentMoney > 0 && yearlyInterest >= 0 && inflation >= 0 && monthlySpending > 0) {
      const monthlyInterestRate = (yearlyInterest / 100) / 12;
      const monthlyInflationRate = (inflation / 100) / 12;
      let remainingMoney = currentMoney;
      let monthCount = 0;

      while (remainingMoney > 0) {
        remainingMoney = remainingMoney * (1 + monthlyInterestRate) - monthlySpending;
        remainingMoney = remainingMoney / (1 + monthlyInflationRate);
        monthCount++;

        // Break the loop if the remaining money is less than the monthly spending
        if (remainingMoney <= 0) {
          break;
        }
      }

      setMonths(monthCount);
    }
  }, [currentMoney, yearlyInterest, inflation, monthlySpending]);

  return (
    <div className="money-duration-calculator">
      <h2>Money Duration Calculator</h2>
      <div className="input-group">
        <label>
          Current Money:
          <input
            type="number"
            value={currentMoney}
            onChange={(e) => setCurrentMoney(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Yearly Interest (%):
          <input
            type="number"
            value={yearlyInterest}
            onChange={(e) => setYearlyInterest(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Inflation (%):
          <input
            type="number"
            value={inflation}
            onChange={(e) => setInflation(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Monthly Spending:
          <input
            type="number"
            value={monthlySpending}
            onChange={(e) => setMonthlySpending(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Months Your Money Will Last:
          <input type="number" value={months} readOnly />
        </label>
      </div>
    </div>
  );
};

export default MoneyDurationCalculator;
