import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../../ShearedCompo/Spinner";
import axios from "axios";

const MySubmission = () => {
  const { user } = useAuth();
  const { data: submissions = [], isLoading } = useQuery({
    queryKey: ["mySubmissions", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/submissions?workerEmail=${user.email}`
      );
      return res.data;
    },
  });

  if (isLoading) return <Spinner />;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Submissions</h2>
      {submissions.length === 0 ? (
        <p>No submissions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Task Title</th>
                <th className="px-4 py-2 border">Submitted On</th>
                <th className="px-4 py-2 border">Payable Amount</th>
                <th className="px-4 py-2 border">Buyer</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((item, index) => (
                <tr key={item._id} className="text-center">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{item.task_title}</td>
                  <td className="px-4 py-2 border">
                    {new Date(item.current_date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border">
                    {item.payable_amount} coins
                  </td>
                  <td className="px-4 py-2 border">{item.buyer_name}</td>
                  <td className="px-4 py-2 border">
                    <span
                      className={`px-3 py-1 rounded-full text-white 
                        ${
                          item.status === "pending"
                            ? "bg-yellow-500"
                            : item.status === "approved"
                            ? "bg-green-600"
                            : "bg-red-600"
                        }`}
                    >
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
  );
};

export default MySubmission;
