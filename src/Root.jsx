import { Navigation } from "./Navigation"; // Import Navigation component
import { Outlet } from "react-router-dom";

const Root = () => {
  console.log("Rendering Root");
  return (
    <div className="root">
      <Navigation />
      <Outlet />
    </div>
  );
};

export { Root }; // Corrected export statement
