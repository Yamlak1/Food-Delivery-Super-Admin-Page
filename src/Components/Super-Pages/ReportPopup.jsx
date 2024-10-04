import React from 'react';

const ReportPopup = ({ report, onClose, onResolve }) => {
  if (!report) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4"> Report Details </h2>{' '}
        <p>
          {' '}
          <strong> Report: </strong> {report.report}
        </p>
        <p>
          {' '}
          <strong> Sender Name: </strong> {report.adminReporter.fullName}
        </p>
        <p>
          {' '}
          <strong> Sender Email: </strong> {report.adminReporter.email}
        </p>
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded mr-2"
            onClick={onClose}>
            Close{' '}
          </button>{' '}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={onResolve}>
            Resolve{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
};

export default ReportPopup;
