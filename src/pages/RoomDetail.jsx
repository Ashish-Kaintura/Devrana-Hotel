/* eslint-disable no-unused-vars */
// import { useParams } from "react-router-dom";
// import rooms from "../data/rooms.json";
// import { openRazorpay } from "../utils/razorpay";

// export default function RoomDetail() {
//     const { slug } = useParams();
//     const room = rooms.find((r) => r.slug === slug);

//     if (!room) return <p className="p-6">Room not found</p>;

//     const handleBooking = () => {
//         const customer = {
//             name: "Test User",
//             email: "test@example.com",
//             phone: "9876542410",
//         };
//         openRazorpay(room.price, customer);
//     };

//     return (
//         <div className="max-w-4xl mx-auto p-6">
//             <img src={room.img} alt={room.name} className="w-full h-80 object-cover rounded-lg" />
//             <h1 className="text-3xl font-bold mt-4">{room.name}</h1>
//             <p className="text-gray-700 mt-2">{room.description}</p>
//             <ul className="mt-3 text-gray-600 list-disc list-inside">
//                 {room.amenities.map((a, i) => (
//                     <li key={i}>{a}</li>
//                 ))}
//             </ul>
//             <p className="text-2xl font-semibold mt-4">₹{room.price} / night</p>
//             <button
//                 onClick={handleBooking}
//                 className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
//             >
//                 Book & Pay Now
//             </button>
//         </div>
//     );
// }
// import { useParams } from "react-router-dom";
// import rooms from "../data/rooms.json";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Img from "../images/rooms/Banner.jpg"
// import BookinForm from "../components/BookingForm"
// export default function RoomDetails() {
//     const { id } = useParams();
//     const room = rooms.find((r) => r.id === parseInt(id));
//     const [showBooking, setShowBooking] = useState(false);

//     if (!room) return <p className="text-center text-gray-500">Room not found</p>;

//     return (
//         <div className="relative">
//             {/* Hero Banner */}
//             <div className="relative h-[60vh] mt-24">
//                 <img
//                     src={Img}
//                     alt={room.name}
//                     className="w-full h-full object-cover rounded-b-3xl"
//                 />
//                 <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">
//                     <h1 className="text-5xl font-bold">{room.name}</h1>
//                     <p className="mt-3 text-lg">{room.price} / night</p>
//                 </div>
//             </div>

//             {/* Room Content */}
//             <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
//                 <div>
//                     <img src={room.img} alt="" />
//                 </div>
//                 <section>
//                     <h2 className="text-2xl font-semibold mb-3">Overview</h2>
//                     <p className="text-gray-700 leading-relaxed">{room.description}</p>
//                 </section>

//                 <section>
//                     <h2 className="text-2xl font-semibold mb-3">Amenities</h2>
//                     <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                         {room.amenities.map((a, i) => (
//                             <li
//                                 key={i}
//                                 className="bg-gray-100 px-4 py-2 rounded-xl text-gray-600"
//                             >
//                                 {a}
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="pt-10">
//                         <button
//                             onClick={() => setShowBooking(true)}
//                             className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
//                         >
//                             Book Now
//                         </button>
//                     </div>
//                 </section>


//             </div>

//             {/* Booking Modal */}
//             <AnimatePresence>
//                 {showBooking && (
//                     <motion.div
//                         className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                     >
//                         <motion.div
//                             className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative"
//                             initial={{ y: 100, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             exit={{ y: 100, opacity: 0 }}
//                             transition={{ type: "spring", stiffness: 100 }}
//                         >
//                             {/* Close button */}
//                             <button
//                                 onClick={() => setShowBooking(false)}
//                                 className="absolute top-4 right-4 text-gray-500 hover:text-black"
//                             >
//                                 ✕
//                             </button>

//                           <BookinForm/>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// }



// import { useParams } from "react-router-dom";
// import rooms from "../data/rooms.json";
// import BookingForm from "../components/BookingForm";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function RoomDetails() {
//     const { slug } = useParams();
//     const room = rooms.find((r) => r.slug === slug);
//     const [showBooking, setShowBooking] = useState(false);
//     const [selectedImg, setSelectedImg] = useState(room?.img);

//     if (!room) return <h2 className="text-center mt-10">Room not found</h2>;

//     return (
//         <div
//             className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 mt-28"
//             style={{
//                 backgroundImage:
//                     "url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-4.png')",
//             }}
//         >
//             <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:gap-10">
//                 {/* Left - Image Gallery */}
//                 <div className="lg:w-2/3">
//                     {/* Main Image */}
//                     <motion.div
//                         key={selectedImg}
//                         initial={{ opacity: 0, scale: 1.05 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.5 }}
//                         className="overflow-hidden rounded-2xl shadow-lg"
//                     >
//                         <img
//                             src={selectedImg}
//                             alt={room.name}
//                             className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover rounded-2xl transition-transform duration-500 hover:scale-150"
//                         />
//                     </motion.div>

//                     {/* Thumbnails */}
//                     <div className="flex flex-wrap gap-3 mt-5">
//                         {room.images.map((img, i) => (
//                             <button
//                                 key={i}
//                                 onClick={() => setSelectedImg(img)}
//                                 className={`w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden border-2 transition 
//                 ${selectedImg === img ? "border-primary" : "border-transparent"}`}
//                             >
//                                 <img
//                                     src={img}
//                                     alt={`Room thumbnail ${i + 1}`}
//                                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                                 />
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right - Details */}
//                 <section className="lg:w-1/2 mt-10 lg:mt-0">
//                     <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8">
//                         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{room.name}</h1>
//                         <p className="text-gray-600 mt-3 leading-relaxed text-sm sm:text-base">
//                             {room.description}
//                         </p>

//                         {/* Amenities */}
//                         <section className="mt-6">
//                             <h2 className="text-xl sm:text-2xl font-semibold mb-3">Amenities</h2>
//                             <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                                 {room.amenities.map((a, i) => (
//                                     <li
//                                         key={i}
//                                         className="bg-gray-100 px-3 py-2 rounded-xl text-gray-600 text-sm flex items-center gap-2 shadow-sm hover:bg-gray-200 transition"
//                                     >
//                                      {a}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </section>

//                         {/* Price */}
//                         <p className="text-xl sm:text-2xl font-bold text-primary mt-6">
//                             ₹ {room.price.toLocaleString()}/night
//                         </p>

//                         {/* Book Button */}
//                         <button
//                             onClick={() => setShowBooking(true)}
//                             className="bg-primary text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:scale-105 transition mt-6 text-sm sm:text-base"
//                         >
//                             Book Now
//                         </button>
//                     </div>
//                 </section>
//             </div>

//             {/* Booking Modal */}
//             <AnimatePresence>
//                 {showBooking && (
//                     <motion.div
//                         className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                     >
//                         <motion.div
//                             className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6 sm:p-8 relative"
//                             initial={{ y: 100, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             exit={{ y: 100, opacity: 0 }}
//                             transition={{ type: "spring", stiffness: 100 }}
//                         >
//                             {/* Close button */}
//                             <button
//                                 onClick={() => setShowBooking(false)}
//                                 className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
//                             >
//                                 ✕
//                             </button>

//                             <BookingForm selectedRoom={room} />
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// }


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { BsFillPeopleFill } from "react-icons/bs";

export default function RoomDetails() {
    const { slug } = useParams();
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showBooking, setShowBooking] = useState(false);
    const [selectedImg, setSelectedImg] = useState("");

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/rooms/${slug}`);
                setRoom(res.data);
                setSelectedImg(res.data.img);
            } catch (error) {
                console.error("Error fetching room:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRoom();
    }, [slug]);

    if (loading) return <p className="text-center mt-10">Loading room details...</p>;
    if (!room) return <p className="text-center mt-10">Room not found</p>;

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 mt-28"
            style={{
                backgroundImage:
                    "url('https://html.tonatheme.com/2022/royalking/assets/images/shape/pattern-4.png')",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row lg:gap-10">
                {/* Left - Image Gallery */}
                <div className="lg:w-2/3">
                    <motion.div
                        key={selectedImg}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden rounded-2xl shadow-lg"
                    >
                        <img
                            src={selectedImg}
                            alt={room.name}
                            className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover rounded-2xl transition-transform duration-500 hover:scale-150"
                        />
                    </motion.div>

                    <div className="flex flex-wrap gap-3 mt-5">
                        {room.images?.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedImg(img)}
                                className={`w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden border-2 transition ${selectedImg === img ? "border-primary" : "border-transparent"
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Room thumbnail ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right - Details */}
                <section className="lg:w-1/2 mt-10 lg:mt-0">
                    <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{room.name}</h1>
                        <p className="text-gray-600 mt-3 leading-relaxed text-sm sm:text-base">{room.description}</p>

                        <section className="mt-6">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Amenities</h2>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {room.amenities?.map((a, i) => (
                                    <li
                                        key={i}
                                        className="bg-gray-100 px-3 py-2 rounded-xl text-gray-600 text-sm flex items-center gap-2 shadow-sm hover:bg-gray-200 transition"
                                    >
                                        {a}
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <div className="flex items-center">
                            <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base px-2"> <BsFillPeopleFill /> </p>
                            <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base px-2"> {room.guests} </p>
                        </div>

                        <p className="text-xl sm:text-2xl font-bold text-primary mt-6">
                            ₹ {room.price.toLocaleString()}/night
                        </p>

                        <button
                            onClick={() => setShowBooking(true)}
                            className="bg-primary text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:scale-105 transition mt-6 text-sm sm:text-base"
                        >
                            Book Now
                        </button>
                    </div>
                </section>
            </div>

            {/* Booking Modal */}
            <AnimatePresence>
                {showBooking && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6 sm:p-8 relative"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <button
                                onClick={() => setShowBooking(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                            >
                                ✕
                            </button>

                            <BookingForm selectedRoom={room} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

