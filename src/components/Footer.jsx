import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mt-10 py-6 text-sm text-center text-gray-500">
      Built for React.js Intern Assignment • Demo
    </motion.footer>
  );
}
