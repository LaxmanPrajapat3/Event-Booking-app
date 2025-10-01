import { useParams } from "react-router-dom";
import { useState,useEffect} from "react";
// import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { fetchEventByIdMock } from "../api/events";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {useCart} from "../context/CartContext";

export default function 
EventDetailsPage() {
const { id } = useParams();
const [event, setEvent] = useState(null);
const [loading, setLoading] = useState(true);
const { addToCart, items } = useCart();
const navigate = useNavigate();


useEffect(() => {
let active = true;
setLoading(true);
fetchEventByIdMock(id).then((ev) => { if (active) { setEvent(ev); setLoading(false); } }).catch(() => { if (active) setLoading(false); });
return () => { active = false; };
}, [id]);


if (loading) return <div className="max-w-5xl mx-auto px-4 py-6">Loading...</div>;
if (!event) return <div className="max-w-5xl mx-auto px-4 py-6">Event not found</div>;


const alreadyBooked = Array.isArray(items) && items.some((i) => i.id === event.id);


return (
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto px-4 py-6">
<div className="border rounded p-6 bg-white shadow-sm">
<h1 className="text-2xl font-bold mb-2">{event.title}</h1>
<p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()} • {event.location}</p>
<div className="mt-4 text-lg">₹{event.price}</div>
<p className="mt-4 text-gray-700">{event.description}</p>


<div className="mt-6 flex gap-3">
<motion.button
whileTap={{ scale: 0.95 }}
className={`px-4 py-2 rounded ${alreadyBooked ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white'}`}
disabled={!!alreadyBooked}
onClick={() => { addToCart(event); navigate('/cart'); }}
>
{alreadyBooked ? 'Already in Cart' : 'Book Now'}
</motion.button>
<Link to="/" className="px-4 py-2 rounded border">Back</Link>
</div>
</div>
</motion.div>
);
}