// export const openRazorpay = (amount, customer) => {
//     const options = {
//         key: "rzp_test_EkjufYBy2zEkGi", // Replace with your Razorpay Key
//         // key: "rzp_test_123456789", // Replace with your Razorpay Key
//         amount: amount * 100, // amount in paise
//         currency: "INR",
//         name: "Devrana Hotel",
//         description: "Room Booking Payment",
//         handler: function (response) {
//             alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
//             window.location.href = "/payment-success";
//         },
//         prefill: {
//             name: customer?.name || "Guest User",
//             email: customer?.email || "guest@example.com",
//             contact: customer?.phone || "9999999999",
//         },
//         theme: {
//             color: "#1E3A8A",
//         },
//     };



//     const rzp = new window.Razorpay(options);
//     rzp.open();
// };

// for loacl 

// import { saveBooking } from "./storage";
// export function openRazorpay(amount, formData, room, onSuccess) {
//     const options = {
//         key: "rzp_test_1234567890", // replace with your Razorpay test key
//         amount: amount * 100,
//         currency: "INR",
//         name: "Devrana Hotel",
//         description: "Room Booking Payment",
//         image: "https://i.postimg.cc/X7r2sfB2/DR-LOGO.png",
//         handler: function (response) {
//             const newBooking = {
//                 bookingId: `BKG${Date.now()}`,
//                 customer: formData,
//                 room: room.name,
//                 checkIn: formData.checkIn,
//                 checkOut: formData.checkOut,
//                 guests: formData.guests,
//                 amount: amount,
//                 paymentStatus: "Success",
//                 razorpayId: response.razorpay_payment_id,
//             };

//             console.log("Booking saved:", newBooking);
//             // ✅ Save in mock DB (localStorage)
//             saveBooking(newBooking);
//             onSuccess(newBooking); // callback to redirect
//         },
//         prefill: {
//             name: formData.name,
//             email: formData.email,
//             contact: formData.phone,
//         },
//         theme: { color: "#A12C28" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
// }

import axios from "axios";

export async function openRazorpay(amount, formData, room, onSuccess) {
    try {
        // 1️⃣ Create order on backend
        const { data: order } = await axios.post(
            "http://localhost:5000/api/payments/create-order",
            { amount }
        );

        // 2️⃣ Razorpay options
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID, // test key only needed for checkout, can also send from backend
            amount: order.amount,
            currency: order.currency,
            name: "Devrana Hotel",
            description: `Booking ${room.name}`,
            image: "https://i.postimg.cc/X7r2sfB2/DR-LOGO.png",
            order_id: order.id,
            prefill: {
                name: formData.name,
                email: formData.email,
                contact: formData.phone,
            },
            theme: { color: "#A12C28" },
            handler: async function (response) {
                // 3️⃣ Verify payment on backend
                const verifyRes = await axios.post(
                    "http://localhost:5000/api/payments/verify-payment",
                    {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    }
                );

                if (verifyRes.data.success) {
                    // ✅ Payment verified, save booking in localStorage for now
                    const newBooking = {
                        bookingId: `BKG${Date.now()}`,
                        customer: formData,
                        room: room.name,
                        checkIn: formData.checkIn,
                        checkOut: formData.checkOut,
                        guests: formData.guests,
                        amount: order.amount / 100, // in rupees
                        paymentStatus: "Success",
                        razorpayId: response.razorpay_payment_id,
                    };
                    onSuccess(newBooking);
                } else {
                    alert("Payment verification failed!");
                }
            },
            modal: {
                ondismiss: function () {
                    alert("Payment cancelled.");
                },
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    } catch (error) {
        console.error("Payment error:", error);
        alert("Payment failed. Check console for details.");
    }
}
