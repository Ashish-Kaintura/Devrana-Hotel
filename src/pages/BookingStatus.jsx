import { useState } from "react";
import { FaBed, FaCalendarAlt, FaUser, FaRupeeSign, FaCheckCircle, FaPrint, FaCopy } from "react-icons/fa";

export default function BookingLookup() {
    const [bookingId, setBookingId] = useState("");
    const [booking, setBooking] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setBooking(null);

        try {
            const res = await fetch(`http://localhost:5000/api/bookings/${bookingId}`);
            if (!res.ok) throw new Error("Booking not found");
            const data = await res.json();
            setBooking(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handlePrint = () => {
        if (booking) {
            const printContent = document.getElementById("booking-details").innerHTML;
            const w = window.open("");
            w.document.write(`<html><head><title>Booking Invoice</title></head><body>${printContent}</body></html>`);
            w.document.close();
            w.print();
        }
    };

    const handleCopyId = () => {
        navigator.clipboard.writeText(bookingId);
        alert("Booking ID copied!");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Check Your Booking</h1>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-6"
            >
                <input
                    type="text"
                    placeholder="Enter Booking ID"
                    value={bookingId}
                    onChange={(e) => setBookingId(e.target.value)}
                    className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                />
                <button
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
                >
                    {loading ? "Checking..." : "Check"}
                </button>
            </form>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            {booking && (
                <div id="booking-details" className="bg-white shadow-2xl rounded-3xl w-full max-w-lg p-6 sm:p-8 relative">
                    <h2 className="text-2xl font-bold text-primary mb-4">Booking Details</h2>

                    <p className="flex items-center gap-2"><FaBed className="text-primary" /> <span className="font-semibold">Room:</span> {booking.room.name}</p>
                    <p className="flex items-center gap-2"><FaCalendarAlt className="text-primary" /> <span className="font-semibold">Check-In:</span> {new Date(booking.checkIn).toLocaleDateString()}</p>
                    <p className="flex items-center gap-2"><FaCalendarAlt className="text-primary" /> <span className="font-semibold">Check-Out:</span> {new Date(booking.checkOut).toLocaleDateString()}</p>
                    <p className="flex items-center gap-2"><FaUser className="text-primary" /> <span className="font-semibold">Guests:</span> {booking.guests}</p>
                    <p className="flex items-center gap-2"><FaRupeeSign className="text-primary" /> <span className="font-semibold">Amount:</span> ₹{booking.amount}</p>
                    <p className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> <span className="font-semibold">Payment Status:</span> {booking.paymentStatus}</p>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                        <button
                            onClick={handlePrint}
                            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                        >
                            <FaPrint /> Print Invoice
                        </button>
                        <button
                            onClick={handleCopyId}
                            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                        >
                            <FaCopy /> Copy Booking ID
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
