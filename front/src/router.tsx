import { createBrowserRouter } from "react-router-dom";
import {StockPage, MainPage, Root, OperationPage} from "./routes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/stock",
        element: <StockPage />,
      },
      {
        path: "/operations",
        element: <OperationPage />,
      }
    ],
  },
]);

export default router