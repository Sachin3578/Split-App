// client/src/pages/Home.jsx
import { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import './Home.css';

export default function Home() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="home-container">
      <h1 className="home-title">Split Expense App</h1>
      <div className="home-grid">
        <div className="home-card">
          <ExpenseForm onAdded={() => setRefresh(!refresh)} />
        </div>
        <div className="home-card">
          <ExpenseList refresh={refresh} />
        </div>
      </div>
    </div>
  );
}