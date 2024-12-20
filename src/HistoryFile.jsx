// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom';

// const HistoryFile = () => {
//   const location = useLocation();
//   const  approvedRequest  = location.state ;
//   console.log(approvedRequest,"approvedRequest")
//   const [approvedRequests, setApprovedRequests] = useState([]);


//   localStorage.setItem('approvedRequests', JSON.stringify(approvedRequests));
//   const storedRequests = JSON.parse(localStorage.getItem('approvedRequests')) || [];
//   setApprovedRequests(storedRequests);
 

//   console.log(approvedRequests,"approvedRequests")
//   return (
//     <>
//         <div>
//       <h1>Approved Requests History</h1>
//       {approvedRequests.length > 0 ? (
//         <ul>
//           {approvedRequests.map((request, index) => (
//             <li key={index}>
//               <p><strong>User Name:</strong> {request.userName}</p>
//               <p><strong>Book Title:</strong> {request.bookTitle}</p>
//               <p><strong>Request Date:</strong> {request.requestDate}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No approved requests yet.</p>
//       )}
//     </div>
//     </>
//   )
// }

// export default HistoryFile




import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HistoryFile = () => {
  const location = useLocation();
  const approvedRequest = location.state; // This is the newly approved request
  const [approvedRequests, setApprovedRequests] = useState([]);
  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem('approvedRequests')) || [];
    setApprovedRequests(storedRequests);
  }, []);

  useEffect(() => {
    if (approvedRequest) {
      const updatedRequests = [...approvedRequests, approvedRequest];
      setApprovedRequests(updatedRequests);
      localStorage.setItem('approvedRequests', JSON.stringify(updatedRequests));
    }
  }, [approvedRequest]);

  return (
    <div>
      <h1>Approved Requests History</h1>
      {approvedRequests.length > 0 ? (
        <ul>
          {approvedRequests.map((request, index) => (
            <li key={index}>
              <p><strong>User Name:</strong> {request.userName}</p>
              <p><strong>Book Title:</strong> {request.bookTitle}</p>
              <p><strong>Request Date:</strong> {request.requestDate}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No approved requests yet.</p>
      )}
    </div>
  );
};

export default HistoryFile;
