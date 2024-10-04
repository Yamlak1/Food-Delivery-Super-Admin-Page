// import React, { useEffect, useState } from 'react';
// import { getReports } from '../../services/adminServices';

// function Reports() {
//   const [reports, setReports] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getReports();
//         setReports(data || []);
//       } catch (error) {
//         console.error('Error fetching Reports : ', error);
//         setReports([]);
//       }
//     };
//     fetchData();
//   });

//   const handleDetailsClick = async (employeeName, employeeId, report) => {
//     try {
//       console.log('employeeName: ', employeeName);
//       console.log('Emp id : ', employeeId);
//       //   const employeeData = await getEmpByName(employeeName); // Fetch employee by name
//       //   setShowPopup(true); // Show the popup
//     } catch (error) {
//       console.error('Error fetching employee details:', error);
//     }
//   };

//   const handleClosePopup = () => {
//     // setShowPopup(false);
//     // setSelectedEmployee(null); // Reset selected employee on close
//   };

//   return (
//     <div className="mx-auto mt-16 font-poppins text-lg px-10">
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6 w-[1400px]">
//         <div className="p-4">
//           <label htmlFor="table-search" className="sr-only">
//             Search{' '}
//           </label>{' '}
//           <div className="relative mt-1">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//               <svg
//                 className="w-6 h-6 text-gray-500 dark:text-gray-400"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg">
//                 <path
//                   fillRule="evenodd"
//                   d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                   clipRule="evenodd">
//                   {' '}
//                 </path>{' '}
//               </svg>{' '}
//             </div>{' '}
//             <input
//               type="text"
//               id="table-search"
//               className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 pl-10 p-2.5 bg-white placeholder-gray-400"
//               placeholder="Search for reports"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />{' '}
//           </div>{' '}
//         </div>{' '}
//         <table className="w-full text-base text-left text-gray-700 bg-gray-100">
//           <thead className="text-base text-gray-900 uppercase bg-gray-300">
//             <tr>
//               <th scope="col" className="px-6 py-3">
//                 {' '}
//                 Report{' '}
//               </th>{' '}
//               <th scope="col" className="px-6 py-3">
//                 {' '}
//                 Sender{' '}
//               </th>{' '}
//               <th scope="col" className="px-6 py-3">
//                 {' '}
//                 Sent at{' '}
//               </th>{' '}
//               <th scope="col" className="px-6 py-3">
//                 {' '}
//                 Action{' '}
//               </th>{' '}
//             </tr>{' '}
//           </thead>{' '}
//           <tbody>
//             {' '}
//             {reports
//               .filter((report) =>
//                 report.report.toLowerCase().includes(searchTerm.toLowerCase())
//               )
//               .map((report) => (
//                 <tr
//                   key={report.id}
//                   className="bg-white border-b dark:bg-gray-200 dark:border-gray-300">
//                   <th
//                     scope="row"
//                     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
//                     {' '}
//                     {report.report}{' '}
//                   </th>{' '}
//                   <td className="px-6 py-4">
//                     {' '}
//                     {report.adminReporter.fullName}{' '}
//                   </td>{' '}
//                   <td className="px-6 py-4"> {report.updatedAt} </td>{' '}
//                   <td className="px-6 py-4 flex items-center">
//                     <button className="h-10 rounded-sm shadow-sm bg-blue-400 w-40">
//                       {' '}
//                       Details{' '}
//                     </button>{' '}
//                   </td>{' '}
//                 </tr>
//               ))}{' '}
//           </tbody>{' '}
//         </table>{' '}
//       </div>{' '}
//     </div>
//   );
// }

// export default Reports;

import React, { useEffect, useState } from 'react';
import { getReports, updateReportStatus } from '../../services/adminServices';
import ReportPopup from './ReportPopup'; // Import the new component

function Reports() {
  const [reports, setReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReport, setSelectedReport] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReports();
        setReports(data || []);
      } catch (error) {
        console.error('Error fetching Reports : ', error);
        setReports([]);
      }
    };
    fetchData();
  }, []);

  const handleDetailsClick = async (report) => {
    setSelectedReport(report);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedReport(null);
  };

  const handleResolveReport = async () => {
    try {
      if (selectedReport) {
        await updateReportStatus(selectedReport.id, 'resolved');
        const updatedReports = await getReports();
        setReports(updatedReports);
        handleClosePopup();
      }
    } catch (error) {
      console.error('Error updating report status:', error);
    }
  };

  return (
    <div className="mx-auto mt-16 font-poppins text-lg px-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6 w-[1400px]">
        <div className="p-4">
          <label htmlFor="table-search" className="sr-only">
            Search{' '}
          </label>{' '}
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd">
                  {' '}
                </path>{' '}
              </svg>{' '}
            </div>{' '}
            <input
              type="text"
              id="table-search"
              className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 pl-10 p-2.5 bg-white placeholder-gray-400"
              placeholder="Search for reports"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />{' '}
          </div>{' '}
        </div>{' '}
        <table className="w-full text-base text-left text-gray-700 bg-gray-100">
          <thead className="text-base text-gray-900 uppercase bg-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                {' '}
                Report{' '}
              </th>{' '}
              <th scope="col" className="px-6 py-3">
                {' '}
                Sender{' '}
              </th>{' '}
              <th scope="col" className="px-6 py-3">
                {' '}
                Sent at{' '}
              </th>{' '}
              <th scope="col" className="px-6 py-3">
                {' '}
                Action{' '}
              </th>{' '}
            </tr>{' '}
          </thead>{' '}
          <tbody>
            {' '}
            {reports
              .filter((report) =>
                report.report.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((report) => (
                <tr
                  key={report.id}
                  className="bg-white border-b dark:bg-gray-200 dark:border-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {' '}
                    {report.report}{' '}
                  </th>{' '}
                  <td className="px-6 py-4">
                    {' '}
                    {report.adminReporter.fullName}{' '}
                  </td>{' '}
                  <td className="px-6 py-4"> {report.updatedAt} </td>{' '}
                  <td className="px-6 py-4 flex items-center">
                    <button
                      className="h-10 rounded-sm shadow-sm bg-blue-400 w-40"
                      onClick={() => handleDetailsClick(report)}>
                      {' '}
                      Details{' '}
                    </button>{' '}
                  </td>{' '}
                </tr>
              ))}{' '}
          </tbody>{' '}
        </table>{' '}
      </div>{' '}
      {/* Use the ReportPopup component */}{' '}
      {showPopup && (
        <ReportPopup
          report={selectedReport}
          onClose={handleClosePopup}
          onResolve={handleResolveReport}
        />
      )}{' '}
    </div>
  );
}

export default Reports;
