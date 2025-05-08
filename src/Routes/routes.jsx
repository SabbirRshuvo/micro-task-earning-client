import { createBrowserRouter } from "react-router";
import Main from "../MainLayout/Main";
import Home from "../Pages/HomePage/Home";
import Register from "../Pages/HomePage/Register";
import Login from "../Pages/HomePage/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllUsers from "../Pages/HomePage/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import WorkerHome from "../Pages/Dashboard/Worker/WorkerHome";
import TaskList from "../Pages/Dashboard/Worker/TaskList";
import MySubmission from "../Pages/Dashboard/Worker/MySubmission";
import Withdrawals from "../Pages/Dashboard/Worker/Withdrawals";
import BuyerHome from "../Pages/Dashboard/Buyer/BuyerHome";
import AddNewTaks from "../Pages/Dashboard/Buyer/AddNewTaks";
import MyTasks from "../Pages/Dashboard/Buyer/MyTasks";
import PurchaseCoin from "../Pages/Dashboard/Buyer/PurchaseCoin";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import MangeUser from "../Pages/Dashboard/Admin/MangeUser";
import ManageTaks from "../Pages/Dashboard/Admin/ManageTaks";
import PurchasePayment from "../Pages/Dashboard/Buyer/PurchasePayment";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: "error",
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allusers",
        element: <AllUsers />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "worker-home",
        element: <WorkerHome />,
      },
      {
        path: "task-list",
        element: <TaskList />,
      },
      {
        path: "my-submission",
        element: <MySubmission />,
      },
      { path: "withdrawals", element: <Withdrawals /> },
      {
        path: "buyer-home",
        element: <BuyerHome />,
      },
      {
        path: "add-new-task",
        element: <AddNewTaks />,
      },
      {
        path: "my-task",
        element: <MyTasks />,
      },
      {
        path: "purchase-coin",
        element: <PurchaseCoin />,
      },
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "maange-user",
        element: <MangeUser />,
      },
      {
        path: "manege-task",
        element: <ManageTaks />,
      },
      {
        path: "parchase-payment",
        element: <PurchasePayment />,
      },
    ],
  },
]);

export default routes;
