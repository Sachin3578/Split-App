import { useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export default function Balances() {
  const [balances, setBalances] = useState({});

  useEffect(() => {
    axios.get(`${API}/balances`).then(res => {
      setBalances(res.data.data);
    });
  }, []);

  return (
    <div>
      <h2>Net Balances</h2>
      <ul>
        {Object.entries(balances).map(([person, amount]) => (
          <li key={person}>
            {person} {amount > 0 ? 'will receive' : 'owes'} ₹{Math.abs(amount)}
          </li>
        ))}
      </ul>
    </div>
  );
}
