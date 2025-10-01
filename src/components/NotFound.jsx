import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  const location = useLocation();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold">Page not found</h2>
      <p className="mt-2 text-sm text-gray-600">No match for <code>{location.pathname}</code></p>
      <Link to="/" className="mt-4 inline-block text-indigo-600">Go back home</Link>
    </motion.div>
  );
}
