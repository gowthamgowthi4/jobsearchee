import {
  RouterProvider,
  createBrowserRouter,
  // Route,
  // Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import LoginCompany from "./pages/LoginCompany/LoginCompany";
import LoginUser from "./pages/LoginUser/LoginUser";
import RegisterCompany from "./pages/RegisterCompany/RegisterCompany";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import HomeCompany from "./pages/HomeCompany/HomeCompany";
import Hiringform from "./pages/Hiringform/Hiringform";
import Applyform from "./pages/Applyform/Applyform";

const router = createBrowserRouter([
  {
    path: "/logincompany",
    element: <LoginCompany />,
  },
  {
    path: "/loginuser",
    element: <LoginUser />,
  },
  {
    path: "/registercompany",
    element: <RegisterCompany />,
  },
  {
    path: "/registeruser",
    element: <RegisterUser />,
  },
  {
    path: "/homecompany",
    element: <HomeCompany />,
  },
  {
    path: "/hiringform",
    element: <Hiringform />,
  },
  {
    path: "/applyform",
    element: <Applyform />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return(
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
