import { useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export default function Settlements() {
  const [settlements, setSettlements] = useState([]);

  useEffect(() => {
    axios.get(`${API}/settlements`).then(res => {
      setSettlements(res.data.data);
    });
  }, []);

  return (
    <div>
      <h2>Settlements</h2>
      {settlements.length === 0 ? (
        <p>No settlements required</p>
      ) : (
        <ul>
          {settlements.map((s, idx) => (
            <li key={idx}>
              💸 <strong>{s.from}</strong> pays <strong>{s.to}</strong> ₹{s.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
