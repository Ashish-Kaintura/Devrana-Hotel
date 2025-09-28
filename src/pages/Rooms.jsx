// /* eslint-disable no-unused-vars */
// import { Link } from "react-router-dom";
// import rooms from "../data/rooms.json";
// import { motion } from "framer-motion";
// import Img from "../images/rooms/Banner.jpg"
// export default function Rooms() {
//     return (
//         <div className=" bg-gradient-to-br from-gray-50 to-gray-100 py-12 pt-32">

//             <div className="flex justify-center">
//                 <img src={Img} alt="" />
//             </div>

//             <div className="max-w-6xl mx-auto px-6">
//                 <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 py-7 pt-20 font-serif">
//                     Explore Our Rooms & Cotages
//                 </h1>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {rooms.map((room, index) => (
//                         <motion.div
//                             key={room.id}
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.1 }}
//                             className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all"
//                         >
//                             <img
//                                 src={room.img}
//                                 alt={room.name}
//                                 className="w-full h-56 object-cover"
//                             />
//                             <div className="p-5">
//                                 <h2 className="text-xl font-semibold text-gray-900">
//                                     {room.name}
//                                 </h2>
//                                 <p className="text-gray-600 mt-2 line-clamp-2">
//                                     {room.description}
//                                 </p>
//                                 <p className="text-lg font-bold text-primary mt-3">
//                                     ₹{room.price}/night
//                                 </p>
//                                 <Link
//                                     to={`/rooms-cottage/${room.slug}`}
//                                     className="inline-block mt-4 bg-gradient-to-r from-Secondary to-Secondary text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
//                                 >
//                                     View Details
//                                 </Link>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//             {/* <BookingForm /> */}
//         </div>
//     );
// }
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Img from "../images/rooms/Banner.jpg";
import axios from "axios";

export default function Rooms() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/rooms");
                setRooms(res.data);
            } catch (error) {
                console.error("Error fetching rooms:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRooms();
    }, []);

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 pt-32">
            <div className="flex justify-center">
                <img src={Img} alt="" className="rounded-xl shadow-lg" />
            </div>

            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 py-7 pt-20 font-serif">
                    Explore Our Rooms & Cottages
                </h1>

                {loading ? (
                    <p className="text-center text-gray-500">Loading rooms...</p>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {rooms.map((room, index) => (
                            <motion.div
                                key={room._id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                            >
                                <img
                                    src={room.img}
                                    alt={room.name}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-5">
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {room.name}
                                    </h2>
                                    <p className="text-gray-600 mt-2 line-clamp-2">
                                        {room.description}
                                    </p>
                                    <p className="text-lg font-bold text-primary mt-3">
                                        ₹{room.price}/night
                                    </p>
                                    <Link
                                        to={`/rooms-cottage/${room.slug}`}
                                        className="inline-block mt-4 bg-gradient-to-r from-Secondary to-Secondary text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
