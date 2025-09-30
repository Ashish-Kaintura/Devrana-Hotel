// src/admin/pages/Rooms.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminRooms() {
    const [rooms, setRooms] = useState([]);
    const [newRoom, setNewRoom] = useState({
        name: "",
        price: "",
        guests: 4,
        quantity: 1,
        active: true,
    });

    const [editRoom, setEditRoom] = useState(null); // for modal

    const fetchRooms = async () => {
        const res = await axios.get("http://localhost:5000/api/rooms");
        setRooms(res.data);
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    const handleCreate = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/rooms", newRoom);
        setNewRoom({ name: "", price: "", guests: 4, quantity: 1, active: true });
        fetchRooms();
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this room?")) {
            await axios.delete(`http://localhost:5000/api/rooms/${id}`);
            fetchRooms();
        }
    };

    const handleUpdate = async () => {
        await axios.put(`http://localhost:5000/api/rooms/${editRoom._id}`, editRoom);
        setEditRoom(null);
        fetchRooms();
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Manage Rooms</h1>

            {/* Create Room */}
            <form onSubmit={handleCreate} className="space-y-4 mb-8 grid grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Room Name"
                    value={newRoom.name}
                    onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
                    className="border px-3 py-2 rounded w-full"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newRoom.price}
                    onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })}
                    className="border px-3 py-2 rounded w-full"
                />
                <input
                    type="number"
                    placeholder="Max Guests"
                    value={newRoom.guests}
                    onChange={(e) => setNewRoom({ ...newRoom, guests: e.target.value })}
                    className="border px-3 py-2 rounded w-full"
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={newRoom.quantity}
                    onChange={(e) => setNewRoom({ ...newRoom, quantity: e.target.value })}
                    className="border px-3 py-2 rounded w-full"
                />
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={newRoom.active}
                        onChange={(e) => setNewRoom({ ...newRoom, active: e.target.checked })}
                    />
                    Active
                </label>
                <button className="bg-blue-600 text-white px-4 py-2 rounded col-span-2">
                    Add Room
                </button>
            </form>

            {/* List Rooms */}
            <div className="grid gap-4">
                {rooms.map((room) => (
                    <div
                        key={room._id}
                        className="p-4 border rounded flex justify-between items-center bg-white shadow"
                    >
                        <div>
                            <h2 className="font-bold text-lg">{room.name}</h2>
                            <p>Price: ₹{room.price}</p>
                            <p>Max Guests: {room.guests}</p>
                            <p>Quantity: {room.quantity}</p>
                            <p>
                                Status:{" "}
                                <span
                                    className={`font-semibold ${room.active ? "text-green-600" : "text-red-600"
                                        }`}
                                >
                                    {room.active ? "Active" : "Inactive"}
                                </span>
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setEditRoom(room)}
                                className="bg-yellow-500 text-white px-3 py-1 rounded"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(room._id)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit Modal */}
            {editRoom && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Edit Room</h2>
                        <div className="space-y-3">
                            <input
                                type="text"
                                value={editRoom.name}
                                onChange={(e) =>
                                    setEditRoom({ ...editRoom, name: e.target.value })
                                }
                                className="border px-3 py-2 rounded w-full"
                            />
                            <input
                                type="number"
                                value={editRoom.price}
                                onChange={(e) =>
                                    setEditRoom({ ...editRoom, price: e.target.value })
                                }
                                className="border px-3 py-2 rounded w-full"
                            />
                            <input
                                type="number"
                                value={editRoom.guests}
                                onChange={(e) =>
                                    setEditRoom({ ...editRoom, guests: e.target.value })
                                }
                                className="border px-3 py-2 rounded w-full"
                            />
                            <input
                                type="number"
                                value={editRoom.quantity}
                                onChange={(e) =>
                                    setEditRoom({ ...editRoom, quantity: e.target.value })
                                }
                                className="border px-3 py-2 rounded w-full"
                            />
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={editRoom.active}
                                    onChange={(e) =>
                                        setEditRoom({ ...editRoom, active: e.target.checked })
                                    }
                                />
                                Active
                            </label>
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={() => setEditRoom(null)}
                                className="px-4 py-2 rounded bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpdate}
                                className="px-4 py-2 rounded bg-blue-600 text-white"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
