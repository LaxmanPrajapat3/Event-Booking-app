import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchEventsMock } from '../api/events'; // adjust path if needed

export default function EventListPage() {
const [events, setEvents] = useState([]);
const [loading, setLoading] = useState(true);
const [sortBy, setSortBy] = useState('date');


useEffect(() => {
let active = true;
setLoading(true);
fetchEventsMock().then((data) => { if (active) { setEvents(data); setLoading(false); } }).catch(() => { if (active) setLoading(false); });
return () => { active = false; };
}, []);


const sorted = useMemo(() => {
const copy = (events || []).slice();
if (sortBy === 'date') return copy.sort((a,b) => new Date(a.date) - new Date(b.date));
if (sortBy === 'price') return copy.sort((a,b) => Number(a.price) - Number(b.price));
return copy.sort((a,b) => String(a.title).localeCompare(String(b.title)));
}, [events, sortBy]);


return (
<div className="max-w-5xl mx-auto px-4 py-6">
<div className="flex justify-between items-center mb-4">
<h1 className="text-2xl font-bold">Upcoming Events</h1>
<div className="flex items-center gap-2">
<label className="text-sm">Sort:</label>
<select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border px-2 py-1 rounded">
<option value="date">Date</option>
<option value="price">Price</option>
<option value="title">Title</option>
</select>
</div>
</div>


{loading ? (
<div>Loading events...</div>
) : (
<motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
<AnimatePresence>
{sorted.map((ev) => (
<motion.div
key={ev.id}
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.9 }}
transition={{ duration: 0.3 }}
className="border rounded p-4 shadow-sm bg-white"
>
<div className="flex justify-between items-start">
<div>
<h2 className="text-lg font-semibold">{ev.title}</h2>
<p className="text-sm text-gray-600">{new Date(ev.date).toLocaleDateString()}</p>
<p className="text-sm">{ev.location}</p>
</div>
<div className="text-right">
<div className="text-xl font-bold">₹{ev.price}</div>
<Link to={`/events/${ev.id}`} className="inline-block mt-2 text-sm text-indigo-600 hover:underline">View</Link>
</div>
</div>
</motion.div>
))}
</AnimatePresence>
</motion.div>
)}
</div>
);
}