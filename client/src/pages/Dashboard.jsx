// client/src/pages/Dashboard.jsx
import Balances from '../components/Balances';
import Settlements from '../components/Settlements';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <Balances />
        </div>
        <div className="dashboard-card">
          <Settlements />
        </div>
      </div>
    </div>
  );
}
