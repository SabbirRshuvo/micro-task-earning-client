import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaBell } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";
import useSubmissions from "../../Hooks/useSubmissions";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { totalEarningCoins } = useSubmissions();

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[250px_1fr]">
      {/* Sidebar */}
      <aside className="bg-gray-100 border-r p-4">
        <h2 className="text-2xl font-bold mb-6">{user?.role}</h2>
        {user && user?.role === "worker" && (
          <nav className="space-y-4">
            <NavLink
              to="/dashboard/worker-home"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-semibold"
                  : "block hover:underline"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/dashboard/task-list"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-semibold"
                  : "block hover:underline"
              }
            >
              TaskList
            </NavLink>

            <NavLink
              to="/dashboard/my-submission"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-semibold"
                  : "block hover:underline"
              }
            >
              My Submissions
            </NavLink>

            <NavLink
              to="/dashboard/withdrawals"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-semibold"
                  : "block hover:underline"
              }
            >
              Withdrawals
            </NavLink>
          </nav>
        )}
        {user && user?.role === "buyer" && (
          <nav className="space-y-4">
            <NavLink
              to="/dashboard/buyer-home"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-semibold"
                  : "block hover:underline"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/dashboard/add-new-task"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-semibold"
                  : "block hover:underline"
              }
            >
              Add new Taks
            </NavLink>

            <NavLink
              to="/dashboard/my-task"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-semibold"
                  : "block hover:underline"
              }
            >
              My Task's
            </NavLink>

            <NavLink
              to="/dashboard/purchase-coin"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-semibold"
                  : "block hover:underline"
              }
            >
              Purchase Coin
            </NavLink>
            <NavLink
              to="/dashboard/payment-history"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-semibold"
                  : "block hover:underline"
              }
            >
              Payment History
            </NavLink>
          </nav>
        )}
        {user && user?.role === "admin" && (
          <nav className="space-y-4">
            <NavLink
              to="/dashboard/admin-home"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-semibold"
                  : "block hover:underline"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/dashboard/manage-user"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-semibold"
                  : "block hover:underline"
              }
            >
              Manage Users
            </NavLink>

            <NavLink
              to="/dashboard/manage-task"
              className={({ isActive }) =>
                isActive
                  ? "block text-green-600 font-semibold"
                  : "block hover:underline"
              }
            >
              Manage Task
            </NavLink>
          </nav>
        )}

        <div className="divider"></div>
        <Link to="/">Home</Link>

        {/* Footer */}
        <footer className="mt-10 text-sm text-gray-500">
          &copy; 2025 MicroTask
        </footer>
      </aside>

      {/* Main content */}
      <div className="flex flex-col">
        {/* Topbar */}
        <header className="flex justify-between items-center px-4 py-3 border-b shadow-sm">
          <div className="flex flex-col items-end gap-1 text-right">
            {totalEarningCoins ? (
              <p className="text-sm font-semibold">
                {totalEarningCoins ?? 0} coins
              </p>
            ) : (
              "Loading"
            )}
            <p className="text-sm capitalize">{user?.role ?? "User"}</p>
            <p className="text-sm text-gray-600">{user?.name}</p>
          </div>

          <div className="flex items-center gap-4">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
            )}
            <button className="relative text-xl">
              <FaBell />
              {/* Optional: Notification dot */}
              {/* <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span> */}
            </button>
          </div>
        </header>

        {/* Main content based on route */}
        <main className="p-6 flex-grow overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
