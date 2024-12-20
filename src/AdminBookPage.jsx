import React, { useState, useEffect } from 'react';
import "./AdminBookPage.css"

const AdminBooksApproval = () => {
  // State to hold user requests
  const [requests, setRequests] = useState([]);

  // Fetch data (replace 'requests.json' with your JSON file or endpoint)
  useEffect(() => {
    fetch('/requests.json')
      .then(response => response.json())
      .then(data => setRequests(data.requests)) // Assuming the JSON structure has "requests"
      .catch(error => console.error('Error fetching requests:', error));
  }, []);

  // Approve request handler
  const handleApprove = (id) => {
    console.log(`Approved request with ID: ${id}`);
    // Logic to approve the request (update state or backend if available)
    setRequests(requests.filter(request => request.id !== id));
  };

  // Reject request handler
  const handleReject = (id) => {
    console.log(`Rejected request with ID: ${id}`);
    // Logic to reject the request
    setRequests(requests.filter(request => request.id !== id));
  };

  return (
    <div className="admin-approval-page">
      <h1>Admin Books Approval Page</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Book Title</th>
            <th>Request Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.userName}</td>
                <td>{request.bookTitle}</td>
                <td>{request.requestDate}</td>
                <td>
                  <button onClick={() => handleApprove(request.id)}>Approve</button>
                  <button onClick={() => handleReject(request.id)}>Reject</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No requests found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBooksApproval;
