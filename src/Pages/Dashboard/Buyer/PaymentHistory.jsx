import usePayments from "../../../Hooks/usePayments";

const PaymentHistory = () => {
  const [payments] = usePayments();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Payment History..{payments.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Transaction ID</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Coins</th>
              <th className="px-4 py-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{payment.transactionId}</td>
                <td className="px-4 py-2 border">${payment.price}</td>
                <td className="px-4 py-2 border">{payment.coins}</td>
                <td className="px-4 py-2 border">
                  {new Date(payment.date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
