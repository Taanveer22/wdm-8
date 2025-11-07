import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import MyLayout from "../layouts/MyLayout";
import HomePage from "../pages/HomePage";
import StatisticsPage from "../pages/StatisticsPage";
import DashboardPage from "../pages/DashboardPage";
import AllCards from "../components/AllCards";
import CardDetail from "../components/CardDetail";

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
        children: [
          {
            path: "/",
            element: <AllCards></AllCards>,
            loader: () => fetch("/data.json"),
          },
          {
            path: "/allcards/:categoryType",
            element: <AllCards></AllCards>,
            loader: () => fetch("/data.json"),
          },
        ],
      },
      {
        path: "/cardDetail/:id",
        element: <CardDetail></CardDetail>,
        loader: () => fetch("/data.json"),
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
