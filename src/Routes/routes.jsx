import { createBrowserRouter } from "react-router";
import Main from "../MainLayout/Main";
import Home from "../Pages/HomePage/Home";
import Register from "../Pages/HomePage/Register";
import Login from "../Pages/HomePage/Login";

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
import PaymentHistory from "../Pages/Dashboard/Buyer/PaymentHistory";
import TaskDetails from "../Pages/Dashboard/Worker/TaskDetails";

// protected Routes

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../PrivateRoute/AdminRoute";
import BuyerRoute from "../PrivateRoute/BuyerRoute";
import WorkerRoute from "../PrivateRoute/WorkerRoute";
import ErrorPage from "../ShearedCompo/ErrorPage";
import Forbidden from "../ShearedCompo/Forbidden";
import BestWorkers from "../HomeComponents/BestWorkers";
import About from "../Pages/HomePage/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/best-workers",
        element: (
          <PrivateRoute>
            <BestWorkers />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/forbidden",
        element: <Forbidden />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "worker-home",
        element: (
          <WorkerRoute>
            <WorkerHome />
          </WorkerRoute>
        ),
      },
      {
        path: "task-list",
        element: (
          <WorkerRoute>
            <TaskList />
          </WorkerRoute>
        ),
      },
      {
        path: "my-submission",
        element: (
          <WorkerRoute>
            <MySubmission />
          </WorkerRoute>
        ),
      },
      {
        path: "withdrawals",
        element: (
          <WorkerRoute>
            <Withdrawals />
          </WorkerRoute>
        ),
      },
      {
        path: "buyer-home",
        element: (
          <BuyerRoute>
            <BuyerHome />
          </BuyerRoute>
        ),
      },
      {
        path: "add-new-task",
        element: (
          <BuyerRoute>
            <AddNewTaks />
          </BuyerRoute>
        ),
      },
      {
        path: "my-task",
        element: (
          <BuyerRoute>
            <MyTasks />
          </BuyerRoute>
        ),
      },
      {
        path: "purchase-coin",
        element: (
          <BuyerRoute>
            <PurchaseCoin />
          </BuyerRoute>
        ),
      },
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "manage-user",
        element: (
          <AdminRoute>
            <MangeUser />
          </AdminRoute>
        ),
      },
      {
        path: "manage-task",
        element: (
          <AdminRoute>
            <ManageTaks />
          </AdminRoute>
        ),
      },
      {
        path: "parchase-payment",
        element: (
          <BuyerRoute>
            <PurchasePayment />
          </BuyerRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <BuyerRoute>
            <PaymentHistory />
          </BuyerRoute>
        ),
      },
      {
        path: "task-details/:id",
        element: (
          <WorkerRoute>
            <TaskDetails />
          </WorkerRoute>
        ),
      },
    ],
  },
]);

export default routes;
