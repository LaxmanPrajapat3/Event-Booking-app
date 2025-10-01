import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
export default function BookingCartPage() {
const { items, removeFromCart, total, clearCart } = useCart();


return (
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto px-4 py-6">
<h1 className="text-2xl font-bold mb-4">Booking Cart</h1>
{(!Array.isArray(items) || items.length === 0) ? (
<div className="p-6 bg-white border rounded">Your cart is empty. Browse <Link to="/" className="text-indigo-600">events</Link> to add.</div>
) : (
<div className="space-y-4">
<AnimatePresence>
{items.map((it) => (
<motion.div
key={it.id}
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: 20 }}
transition={{ duration: 0.3 }}
className="flex justify-between items-center p-4 border rounded bg-white"
>
<div>
<div className="font-semibold">{it.title}</div>
<div className="text-sm text-gray-600">{new Date(it.date).toLocaleDateString()} • {it.location}</div>
</div>
<div className="text-right">
<div className="font-bold">₹{it.price}</div>
<button className="text-sm mt-2 text-red-600" onClick={() => removeFromCart(it.id)}>Remove</button>
</div>
</motion.div>
))}
</AnimatePresence>


<div className="p-4 border rounded bg-white flex justify-between items-center">
<div>Total</div>
<div className="font-bold">₹{total}</div>
</div>


<div className="flex gap-3">
<motion.button whileTap={{ scale: 0.95 }} className="px-4 py-2 rounded bg-green-600 text-white" onClick={() => alert('Demo checkout - no payment integrated')}>Checkout (Demo)</motion.button>
<motion.button whileTap={{ scale: 0.95 }} className="px-4 py-2 rounded border" onClick={() => clearCart()}>Clear Cart</motion.button>
</div>
</div>
)}
</motion.div>
);
}