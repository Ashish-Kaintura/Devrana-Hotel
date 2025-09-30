// src/admin/components/AdminSidebar.jsx
import { Link } from "react-router-dom";

export default function AdminSidebar() {
    return (
        <aside className="w-64 bg-gray-900 text-white h-screen fixed">
            <h1 className="text-2xl font-bold p-6 border-b border-gray-700">
                Admin Panel
            </h1>
            <nav className="flex flex-col gap-3 p-4">
                <Link to="/admin/dashboard" className="hover:bg-gray-700 p-2 rounded">
                    Dashboard
                </Link>
                <Link to="/admin/rooms" className="hover:bg-gray-700 p-2 rounded">
                    Rooms
                </Link>
                <Link to="/admin/bookings" className="hover:bg-gray-700 p-2 rounded">
                    Bookings
                </Link>
            </nav>
        </aside>
    );
}
