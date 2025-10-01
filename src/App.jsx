import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import EventListPage from './components/EventListPage';
import EventDetailsPage from './components/EventDetailsPage';
import BookingCartPage from '../src/components/BookingcartPage';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="py-6">
            <Routes>
              <Route path="/" element={<EventListPage />} />
              <Route path="/events/:id" element={<EventDetailsPage />} />
              <Route path="/cart" element={<BookingCartPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
