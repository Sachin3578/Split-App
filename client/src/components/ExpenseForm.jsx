import { useState } from 'react';
import axios from 'axios';
import './ExpenseForm.css';

const API = import.meta.env.VITE_API_URL;

export default function ExpenseForm({ onAdded }) {
  const [formData, setFormData] = useState({
    amount: '',
    description: '',
    paid_by: '',
    participants: '',
    split_type: 'equal',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      amount: parseFloat(formData.amount),
      participants: formData.participants.split(',').map(p => p.trim()),
    };

    try {
      await axios.post(`${API}/expenses`, payload);
      alert('✅ Expense added!');
      setFormData({
        amount: '',
        description: '',
        paid_by: '',
        participants: '',
        split_type: 'equal',
      });
      onAdded();
    } catch (err) {
      alert(err.response?.data?.message || '❌ Error adding expense');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add Expense</h2>

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="paid_by"
        placeholder="Paid By"
        value={formData.paid_by}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="participants"
        placeholder="Participants (comma-separated)"
        value={formData.participants}
        onChange={handleChange}
        required
      />

      <select name="split_type" value={formData.split_type} onChange={handleChange}>
        <option value="equal">Equal</option>
        <option value="percentage">Percentage</option>
        <option value="exact">Exact</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Expense'}
      </button>
    </form>
  );
}