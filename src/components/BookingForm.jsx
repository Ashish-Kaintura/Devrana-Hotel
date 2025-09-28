// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { openRazorpay } from "../utils/razorpay";

// export default function BookingForm({ selectedRoom }) {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         checkIn: "",
//         checkOut: "",
//         guests: 1,
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handlePayment = () => {
//         openRazorpay(selectedRoom.price, formData, selectedRoom, (newBooking) => {
//             navigate(`/booking-success/${newBooking.bookingId}`, {
//                 state: { booking: newBooking },
//             });
//         });
//     };

//     return (
//         <div>
//             <h2 className="text-xl font-bold mb-4 text-gray-900">
//                 Book Your Stay
//             </h2>
//             <div className="space-y-3">
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 />
//                 <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 />
//                 <div className="flex gap-3">
//                     <input
//                         type="date"
//                         name="checkIn"
//                         value={formData.checkIn}
//                         onChange={handleChange}
//                         className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                     />
//                     <input
//                         type="date"
//                         name="checkOut"
//                         value={formData.checkOut}
//                         onChange={handleChange}
//                         className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                     />
//                 </div>
//                 <input
//                     type="number"
//                     name="guests"
//                     min="1"
//                     value={formData.guests}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 />
//             </div>
//             <button
//                 onClick={handlePayment}
//                 className="w-full mt-5 bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
//             >
//                 Pay ₹{selectedRoom.price}
//             </button>
//         </div>
//     );
// }

// without price multiplication 

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { openRazorpay } from "../utils/razorpay";

// export default function BookingForm({ selectedRoom }) {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         checkIn: "",
//         checkOut: "",
//         guests: 1,
//     });
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handlePayment = () => {
//         openRazorpay(selectedRoom.price, formData, selectedRoom, async (newBooking) => {
//             try {
//                 // Save booking to backend
//                 const bookingPayload = {
//                     customer: {
//                         name: formData.name,
//                         email: formData.email,
//                         phone: formData.phone,
//                     },
//                     room: selectedRoom._id, // send ObjectId of room
//                     checkIn: formData.checkIn,
//                     checkOut: formData.checkOut,
//                     guests: formData.guests,
//                     amount: selectedRoom.price,
//                     paymentStatus: "Success",
//                     razorpayId: newBooking.razorpayId,
//                 };

//                 const res = await fetch("http://localhost:5000/api/bookings", {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(bookingPayload),
//                 });
//                 const savedBooking = await res.json();

//                 // Navigate to success page
//                 navigate(`/booking-success/${savedBooking._id}`, { state: { booking: savedBooking } });
//             } catch (err) {
//                 console.error("Booking save failed:", err);
//                 alert("Failed to save booking. Check console.");
//             }
//         });
//     };

//     return (
//         <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8">
//             <h2 className="text-2xl font-bold mb-4">{selectedRoom.name} Booking</h2>
//             <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//             <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//             <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//             <div className="flex gap-3 mb-3">
//                 <input
//                     type="date"
//                     name="checkIn"
//                     value={formData.checkIn}
//                     onChange={handleChange}
//                     className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 />
//                 <input
//                     type="date"
//                     name="checkOut"
//                     value={formData.checkOut}
//                     onChange={handleChange}
//                     className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 />
//             </div>
//             <input
//                 type="number"
//                 name="guests"
//                 min="1"
//                 value={formData.guests}
//                 onChange={handleChange}
//                 className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//             <button
//                 onClick={handlePayment}
//                 className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition font-semibold"
//             >
//                 Pay ₹{selectedRoom.price}
//             </button>
//         </div>
//     );
// }


import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { openRazorpay } from "../utils/razorpay";

function formatDateToInput(date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
}

function addDaysToDateString(dateStr, days) {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + days);
    return formatDateToInput(d);
}

export default function BookingForm({ selectedRoom }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // localised today string for input min attribute (Asia/Kolkata — uses client local tz)
    const todayStr = formatDateToInput(new Date());
    // default min for checkOut is tomorrow
    const defaultMinCheckOut = addDaysToDateString(todayStr, 1);

    // compute effective max guests (cap global max 6)
    const maxGuestsAllowed = Math.min(selectedRoom?.guests || 1, 6);

    // keep a dynamic min for checkOut based on chosen checkIn
    const minCheckOut = formData.checkIn ? addDaysToDateString(formData.checkIn, 1) : defaultMinCheckOut;

    // Validate and compute total price (nights * price)
    const totalPrice = useMemo(() => {
        if (!formData.checkIn || !formData.checkOut) return selectedRoom.price;
        const checkInDate = new Date(formData.checkIn);
        const checkOutDate = new Date(formData.checkOut);
        const diffTime = checkOutDate - checkInDate;
        if (diffTime <= 0) return selectedRoom.price;
        const nights = diffTime / (1000 * 60 * 60 * 24);
        // nights should be integer; guard just in case
        return Math.max(1, Math.round(nights)) * selectedRoom.price;
    }, [formData.checkIn, formData.checkOut, selectedRoom.price]);

    useEffect(() => {
        // keep guests within allowed bounds if selectedRoom or limit changes
        setFormData((f) => {
            const guests = Math.max(1, Math.min(f.guests, maxGuestsAllowed));
            if (guests !== f.guests) return { ...f, guests };
            return f;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRoom?.guests]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // enforce numeric range for guests
        if (name === "guests") {
            let v = Number(value || 0);
            if (isNaN(v)) v = 1;
            v = Math.max(1, Math.min(v, maxGuestsAllowed));
            setFormData({ ...formData, [name]: v });
            return;
        }
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        setError("");
        // basic checks
        if (!formData.name.trim()) return setError("Please enter your name.");
        if (!formData.email.trim()) return setError("Please enter your email.");
        if (!formData.phone.trim()) return setError("Please enter your phone number.");
        if (!formData.checkIn) return setError("Please select check-in date.");
        if (!formData.checkOut) return setError("Please select check-out date.");
        // prevent past dates
        if (formData.checkIn < todayStr) return setError("Check-in cannot be in the past.");
        if (formData.checkOut <= formData.checkIn) return setError("Check-out must be after check-in.");
        // guests range
        if (formData.guests < 1 || formData.guests > maxGuestsAllowed) {
            return setError(`Number of guests must be between 1 and ${maxGuestsAllowed}.`);
        }
        return true;
    };

    const handlePayment = () => {
        // revalidate before opening checkout
        const ok = validateForm();
        if (ok !== true) return; // error state already set

        setLoading(true);
        // openRazorpay will call onSuccess when payment completed & verified (existing flow)
        openRazorpay(totalPrice, formData, selectedRoom, async (newBooking) => {
            try {
                // send to backend to save booking
                const bookingPayload = {
                    customer: {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                    },
                    room: selectedRoom._id, // backend expects ObjectId (or slug if you changed)
                    checkIn: formData.checkIn,
                    checkOut: formData.checkOut,
                    guests: formData.guests,
                    amount: totalPrice,
                    paymentStatus: "Success",
                    razorpayId: newBooking.razorpayId,
                };

                const res = await fetch("http://localhost:5000/api/bookings", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(bookingPayload),
                });

                if (!res.ok) {
                    const body = await res.json().catch(() => ({}));
                    throw new Error(body.message || "Failed to save booking");
                }

                const savedBooking = await res.json();
                navigate(`/booking-success/${savedBooking._id}`, { state: { booking: savedBooking } });
            } catch (err) {
                console.error("Booking save failed:", err);
                setError(err.message || "Failed to save booking. Please contact support.");
            } finally {
                setLoading(false);
            }
        });
    };

    return (
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-4">{selectedRoom.name} Booking</h2>

            <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <div className="flex gap-3 mb-3">
                <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    min={todayStr}
                    className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    min={minCheckOut}
                    className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
            </div>

            <div className="mb-3">
                <input
                    type="number"
                    name="guests"
                    min={1}
                    max={maxGuestsAllowed}
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <p className="text-xs text-gray-500 mt-1">
                    Max guests allowed: {maxGuestsAllowed}
                </p>
            </div>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <div className="flex items-center justify-between gap-3">
                <div className="text-gray-700">
                    <div className="text-sm">Total</div>
                    <div className="text-xl font-bold">₹{totalPrice}</div>
                </div>

                <button
                    onClick={handlePayment}
                    disabled={loading}
                    className={`px-6 py-3 rounded-lg font-semibold text-white transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:opacity-90"
                        }`}
                >
                    {loading ? "Processing..." : `Pay ₹${totalPrice}`}
                </button>
            </div>
        </div>
    );
}
