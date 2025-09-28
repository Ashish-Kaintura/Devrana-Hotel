// import { useLocation, useParams, Link } from "react-router-dom";

// export default function BookingSuccess() {
//     const { bookingId } = useParams();
//     const location = useLocation();
//     const booking = location.state?.booking;

//     if (!booking) {
//         return (
//             <div className="p-6 text-center">
//                 <h2 className="text-xl font-bold">Booking not found</h2>
//                 <Link to="/" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded">
//                     Go Back
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg text-center">
//             <h2 className="text-2xl font-bold text-green-600 mb-4">
//                 Booking Confirmed 🎉
//             </h2>
//             <p className="mb-2">Booking ID: <b>{bookingId}</b></p>
//             <p className="mb-2">Room: <b>{booking.room}</b></p>
//             <p className="mb-2">Check-in: {booking.checkIn}</p>
//             <p className="mb-2">Check-out: {booking.checkOut}</p>
//             <p className="mb-2">Guests: {booking.guests}</p>
//             <p className="mb-2">Amount Paid: ₹{booking.amount}</p>
//             <p className="mb-4">Payment ID: {booking.razorpayId}</p>

//             <Link
//                 to="/"
//                 className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//             >
//                 Back to Home
//             </Link>
//         </div>
//     );
// }


import { FaCopy } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

export default function BookingSuccess() {
    const location = useLocation();
    const booking = location.state?.booking;

    if (!booking) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    No booking found
                </h2>
                <Link
                    to="/rooms-cottage"
                    className="text-white bg-primary px-6 py-3 rounded-lg hover:opacity-90 transition"
                >
                    Explore Rooms
                </Link>
            </div>
        );
    }
    const handleCopyId = () => {
        navigator.clipboard.writeText(booking._id);
        alert("Booking ID copied!");
    };
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
            <div className="bg-white shadow-2xl rounded-3xl max-w-2xl w-full p-8 sm:p-12 text-center">
                <h1 className="text-3xl font-bold mb-6 text-primary">
                    🎉 Booking Confirmed!
                </h1>
                <p className="text-gray-700 mb-4">
                    Thank you, <span className="font-semibold">{booking.customer.name}</span>, for booking{" "}
                    <span className="font-semibold">{booking.room?.name || booking.room}</span>.
                </p>

                <div className="text-left bg-gray-100 p-5 rounded-xl shadow-inner mb-6">
                    <p>
                        <span className="font-semibold">Booking ID:</span> {booking._id}
                    </p>
                    <p>
                        <span className="font-semibold">Check-In:</span> {new Date(booking.checkIn).toLocaleDateString()}
                    </p>
                    <p>
                        <span className="font-semibold">Check-Out:</span> {new Date(booking.checkOut).toLocaleDateString()}
                    </p>
                    <p>
                        <span className="font-semibold">Guests:</span> {booking.guests}
                    </p>
                    <p>
                        <span className="font-semibold">Amount Paid:</span> ₹{booking.amount}
                    </p>
                    <p>
                        <span className="font-semibold">Payment Status:</span> {booking.paymentStatus}
                    </p>
                </div>
                <div className="flex  gap-x-5">
                    <button
                        onClick={handleCopyId}
                        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                    >
                        <FaCopy /> Copy Booking ID
                    </button>
                    <Link
                        to="/rooms-cottage"
                        className="text-white bg-primary px-6 py-3 rounded-lg hover:opacity-90 transition"
                    >
                        Book Another Room
                    </Link>
                </div>

                <div>
                    <p className="text-sm text-red-700 pt-6">  Disclaimer Please. Copy your Booking id So you can. check. Your booking status and booking information.
                    </p> </div>
            </div>
        </div>
    );
}

