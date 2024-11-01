import React, { useState, useEffect } from 'react';
import '../style/SimpleReturn.css'; // Import the CSS file

const SimpleReturn = () => {
  const [amount, setAmount] = useState(100);
  const [percentage, setPercentage] = useState(15);
  const [interest, setInterest] = useState(0);
  const [period, setPeriod] = useState('daily');

  useEffect(() => {
    let calculatedInterest = 0;
    switch (period) {
      case 'daily':
        calculatedInterest = (amount * (percentage / 100)) / 365;
        break;
      case 'weekly':
        calculatedInterest = (amount * (percentage / 100)) / 52;
        break;
      case 'monthly':
        calculatedInterest = (amount * (percentage / 100)) / 12;
        break;
      case 'yearly':
      default:
        calculatedInterest = (amount * percentage) / 100;
        break;
    }
    setInterest(calculatedInterest);
  }, [amount, percentage, period]);

  return (
    <div className="simple-return">
      <h2>Simple Interest Calculator Return Investment</h2>
      <div className="input-group">
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Percentage:
          <input
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="input-group">
        <label>Calculation Period:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="daily"
              checked={period === 'daily'}
              onChange={(e) => setPeriod(e.target.value)}
            />
            Daily
          </label>
          <label>
            <input
              type="radio"
              value="weekly"
              checked={period === 'weekly'}
              onChange={(e) => setPeriod(e.target.value)}
            />
            Weekly
          </label>
          <label>
            <input
              type="radio"
              value="monthly"
              checked={period === 'monthly'}
              onChange={(e) => setPeriod(e.target.value)}
            />
            Monthly
          </label>
          <label>
            <input
              type="radio"
              value="yearly"
              checked={period === 'yearly'}
              onChange={(e) => setPeriod(e.target.value)}
            />
            Yearly
          </label>
        </div>
      </div>
      <div className="input-group">
        <label>
          Interest Amount:
          <input type="number" value={interest} readOnly />
        </label>
      </div>
    </div>
  );
};

export default SimpleReturn;
