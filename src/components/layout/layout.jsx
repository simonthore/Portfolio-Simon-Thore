import Nav from "../Nav";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    
        <div>
          <Nav />
          <Outlet />
        </div>
   
  );
}

export default BaseLayout;
