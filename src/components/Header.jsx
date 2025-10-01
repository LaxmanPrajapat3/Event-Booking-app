import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { items } = useCart();
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/" className="text-2xl font-semibold text-indigo-600">EventBook</Link>
        </motion.div>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Events</Link>
          <Link to="/cart" className="hover:underline">Cart ({items.length})</Link>
        </nav>
      </div>
    </header>
  );
}
