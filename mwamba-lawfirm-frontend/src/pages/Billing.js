import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/Billing.css'; // Assuming you have a CSS file for styling

const sampleInvoices = [
  {
    id: 'INV001',
    client: 'Jane Doe',
    amount: 120000,
    dateIssued: '2025-06-15',
    dueDate: '2025-07-15',
    status: 'Paid',
  },
  {
    id: 'INV002',
    client: 'Michael Ouko',
    amount: 80000,
    dateIssued: '2025-06-20',
    dueDate: '2025-07-20',
    status: 'Pending',
  },
  {
    id: 'INV003',
    client: 'Startup Ltd.',
    amount: 450000,
    dateIssued: '2025-06-25',
    dueDate: '2025-07-25',
    status: 'Overdue',
  },
];

function Billing() {
  return (
    <div className="billing-layout">
      <Navbar />
      <div className="billing-body">
        <Sidebar />
        <main className="billing-content">
          <h2>Billing & Invoices</h2>

          <table className="billing-table">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Client</th>
                <th>Amount (KES)</th>
                <th>Date Issued</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sampleInvoices.map((inv) => (
                <tr key={inv.id}>
                  <td>{inv.id}</td>
                  <td>{inv.client}</td>
                  <td>{inv.amount.toLocaleString()}</td>
                  <td>{inv.dateIssued}</td>
                  <td>{inv.dueDate}</td>
                  <td className={`status ${inv.status.toLowerCase()}`}>
                    {inv.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default Billing;
