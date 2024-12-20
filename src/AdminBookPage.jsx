import React, { useState, useEffect } from 'react';
import "./AdminBookPage.css"
import { Alert, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const AdminBooksApproval = () => {
  
  const [requests, setRequests] = useState([]);

  // Fetch data (replace 'requests.json' with your JSON file or endpoint)
  useEffect(() => {
    fetch('/requests.json')
      .then(response => response.json())
      .then(data => setRequests(data.requests)) // Assuming the JSON structure has "requests"
      .catch(error => console.error('Error fetching requests:', error));
  }, []);

  const [approve,setApprove]=useState(false)
  const [reject,setReject]=useState(false)
  // Approve request handler
  // const handleApprove = (id) => {
  //   console.log(`Approved request with ID: ${id}`);
  //   // Logic to approve the request (update state or backend if available)
  //   setRequests(requests.filter(request => request.id !== id));
  //   setApprove(true)
  // };

//   const handleApprove = (id) => {
//   // Find the request details by ID
//   const approvedRequest = requests.find(request => request.id === id);

//   console.log(`Approved request with ID: ${id}`);
//   // Logic to approve the request (update state or backend if available)
//   setRequests(requests.filter(request => request.id !== id));
//   setApprove(true);
//   return approvedRequest;
// };

const [approvedRequests, setApprovedRequests] = useState([]);
  const navigate = useNavigate();

  const handleApprove = (id) => {
    const approvedRequest = requests.find(request => request.id === id);
    console.log(`Approved request with ID: ${id}`);

    // Update state and remove the request from the table
    setRequests(requests.filter(request => request.id !== id));

    // Add to approvedRequests history
    setApprovedRequests(prev => [...prev, approvedRequest]);
  };

  const goToHistory = () => {
    navigate('/HistoryPage', { state: { approvedRequests } });
  };



// console.log(approvedRequest,"approvedRequest")

  // Reject request handler
  const handleReject = (id) => {
    console.log(`Rejected request with ID: ${id}`);
    // Logic to reject the request
    setRequests(requests.filter(request => request.id !== id));
    setReject(true)
  };

  const handleDeleteSuccessClosed = () => {
    setApprove(false);
    setReject(false);
  };

  return (
    <>
    <div className="admin-approval-page">
  <Box className="adminBookPage">
    <Box className="sideHead">
      <Typography variant="h5">Adminify</Typography>
    </Box>
    <Box className="adminBookTable">
      {approve && (
          <Alert
            severity="success"
           style={{  position: "absolute",
                     width: "15vw",
                     right: "20px",
                    backgroundColor:"#52cd57"}}
            onClose={handleDeleteSuccessClosed}
          >
            Request approved successfully!
          </Alert>
        )}
         {reject && (
          <Alert
            severity="error"
           style={{  position: "absolute",
                     width: "15vw",
                     right: "20px",}}
            onClose={handleDeleteSuccessClosed}
          >
            Request rejected successfully!
          </Alert>
        )}
      <h1>Admin Books Approval Page</h1>
      <button onClick={goToHistory}>History</button>
      <table>
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
                  {/* <button onClick={() => handleApprove(request.id)}>Approve</button> */}
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
    </Box>
  </Box>
</div>

    </>
  );
};

export default AdminBooksApproval;
