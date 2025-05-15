import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../ShearedCompo/Spinner";
import axios from "axios";

const WorkerHome = () => {
  const { user } = useAuth();
  const email = user?.email;

  const { data: stats = {}, isLoading: statsLoading } = useQuery({
    queryKey: ["workerStats", email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/worker-stats?email=${email}`
      );
      return res.data;
    },
    enabled: !!email,
  });

  const { data: approvedSubmissions = [], isLoading: approvedLoading } =
    useQuery({
      queryKey: ["approvedSubmissions", email],
      queryFn: async () => {
        const res = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/approved-submissions?workerEmail=${email}`
        );
        return res.data;
      },
      enabled: !!email,
    });

  if (statsLoading || approvedLoading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6"> Worker Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Submissions</h3>
          <p className="text-3xl">{stats.totalSubmission}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Pending Submissions</h3>
          <p className="text-3xl">{stats.totalPending}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Earnings</h3>
          <p className="text-3xl">{stats.totalEarning} coins</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">My Approved Submissions</h3>
        {approvedSubmissions.length === 0 ? (
          <p className="text-gray-500">No approved submissions found.</p>
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
                    <td className="px-4 py-2 border">{item.buyer_name}</td>
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
