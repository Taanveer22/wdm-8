import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import MyLayout from "../layouts/MyLayout";
import HomePage from "../pages/HomePage";
import StatisticsPage from "../pages/StatisticsPage";
import DashboardPage from "../pages/DashboardPage";
const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout></MyLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("/dataType.json"),
      },
      {
        path: "/statisticspage",
        element: <StatisticsPage></StatisticsPage>,
      },
      {
        path: "/dashboardpage",
        element: <DashboardPage></DashboardPage>,
      },
    ],
  },
]);

export default MyRouter;
