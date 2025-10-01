import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
export function useCart() { return useContext(CartContext); }

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart_events');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed.filter(Boolean));
      }
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem('cart_events', JSON.stringify(items)); } catch {}
  }, [items]);

  const addToCart = (eventToAdd) => {
    if (!eventToAdd?.id) return;
    setItems((prev) =>
      prev.some((p) => p.id === eventToAdd.id) ? prev : [...prev, { ...eventToAdd }]
    );
  };

  const removeFromCart = (id) => setItems((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setItems([]);

  const total = useMemo(() => items.reduce((s, it) => s + Number(it.price || 0), 0), [items]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
