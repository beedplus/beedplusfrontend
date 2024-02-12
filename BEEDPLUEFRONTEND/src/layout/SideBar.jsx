import { Outlet } from "react-router";
import SideBarAdmin from "../components/SideBarAdmin/SideBarAdmin.jsx";
import './sidebar.css'
export default function  SideBar() {
    return (
        <>

            <div className="bar">
             <SideBarAdmin />
              <Outlet />
            </div>

        </>
    );
}
