import useSubmissions from "../../../Hooks/useSubmissions";

const WorkerHome = () => {
  const { submissions, totalEarningCoins, isLoading, isError } =
    useSubmissions();

  const totalSubmission = submissions.length;
  const totalPending = submissions.filter(
    (item) => item.status === "pending"
  ).length;

  const approvedSubmissions = submissions.filter(
    (item) => item.status === "approved"
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching submissions.</p>;

  if (isLoading)
    return <div className="text-center text-red-400">Loading...</div>;
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Worker Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Submissions</h3>
          <p className="text-2xl">{totalSubmission}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Pending Submissions</h3>
          <p className="text-2xl">{totalPending}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Earnings</h3>
          <p className="text-2xl">{totalEarningCoins} coins</p>
        </div>
      </div>

      {/* Approved Submission Table */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Approved Submissions</h3>
        {approvedSubmissions.length === 0 ? (
          <p>No approved submissions.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border">#</th>
                  <th className="px-4 py-2 border">Task Title</th>
                  <th className="px-4 py-2 border">Payable</th>
                  <th className="px-4 py-2 border">Buyer</th>
                  <th className="px-4 py-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {approvedSubmissions.map((item, index) => (
                  <tr key={item._id} className="text-center">
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{item.task_title}</td>
                    <td className="px-4 py-2 border">
                      {item.payable_amount} coins
                    </td>
                    <td className="px-4 py-2 border">{item.Buyer_name}</td>
                    <td className="px-4 py-2 border">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkerHome;
