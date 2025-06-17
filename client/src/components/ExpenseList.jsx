// client/src/components/ExpenseList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ExpenseList.css';

const API = import.meta.env.VITE_API_URL;

export default function ExpenseList({ refresh }) {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get(`${API}/expenses`);
    setExpenses(res.data.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, [refresh]);

  return (
    <div className="expense-list">
      <h2 className="expense-list-title">All Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses yet</p>
      ) : (
        <ul className="expense-items">
          {expenses.map(exp => (
            <li key={exp._id} className="expense-item">
              <strong>{exp.description}</strong> — ₹{exp.amount} paid by {exp.paid_by}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
