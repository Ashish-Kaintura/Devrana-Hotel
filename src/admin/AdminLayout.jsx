// src/admin/AdminLayout.jsx
import AdminSidebar from "./components/AdminSidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="flex">
            <AdminSidebar />
            <main className="ml-64 p-6 w-full">
                <Outlet />
            </main>
        </div>
    );
}
