import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const LoginLayout = () => {
  return (
    <div>
      <Toaster />
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
