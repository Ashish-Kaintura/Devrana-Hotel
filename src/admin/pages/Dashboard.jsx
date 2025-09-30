// src/admin/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [stats, setStats] = useState({ rooms: 0, bookings: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            const roomsRes = await axios.get("http://localhost:5000/api/rooms");
            const bookingsRes = await axios.get("http://localhost:5000/api/bookings");
            setStats({ rooms: roomsRes.data.length, bookings: bookingsRes.data.length });
        };
        fetchStats();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
                    <h2 className="text-lg">Total Rooms</h2>
                    <p className="text-3xl font-bold">{stats.rooms}</p>
                </div>
                <div className="bg-green-500 text-white p-6 rounded-xl shadow">
                    <h2 className="text-lg">Total Bookings</h2>
                    <p className="text-3xl font-bold">{stats.bookings}</p>
                </div>
            </div>
        </div>
    );
}
