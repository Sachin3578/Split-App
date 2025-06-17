
import { Outlet, NavLink } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-brand">Split Expense</div>
          <ul className="navbar-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Add Expense
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
