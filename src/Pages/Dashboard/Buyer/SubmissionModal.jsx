import React from "react";

const SubmissionModal = ({ submission, onClose }) => {
  if (!submission) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md relative">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-red-500 hover:text-red-700"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Submission Detail</h2>

        <p>
          <span className="font-semibold">Worker:</span>{" "}
          {submission.worker_name}
        </p>
        <p>
          <span className="font-semibold">Task:</span> {submission.task_title}
        </p>
        <p>
          <span className="font-semibold">Payable Amount:</span> $
          {submission.payable_amount}
        </p>
        <p>
          <span className="font-semibold">Submitted Info:</span>
        </p>
        <div className="bg-gray-100 p-3 rounded mt-1">
          {submission.submission_detail || "No details provided."}
        </div>

        {submission.submission_image && (
          <div className="mt-3">
            <p className="font-semibold mb-1">Submitted Image:</p>
            <img
              src={submission.submission_image}
              alt="Submitted"
              className="rounded border max-h-64"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmissionModal;
