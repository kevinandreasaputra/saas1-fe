import { useState, useEffect } from 'react';
import api from '../api/axios';

// Static Fallback Data (Data Cadangan)
const STATIC_SERVICES = [
  {
    id: 'static-1',
    name: 'AC Cleaning (Offline)',
    description: 'Deep cleaning and maintenance for split AC units.',
    price: 75000,
    image_url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'static-2',
    name: 'House Cleaning (Offline)',
    description: 'Professional home cleaning service for all rooms.',
    price: 150000,
    image_url: 'https://images.unsplash.com/photo-1581578731117-104f2a417954?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'static-3',
    name: 'Plumbing Repair (Offline)',
    description: 'Fix leaks, unclog drains, and pipe maintenance.',
    price: 200000,
    image_url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=600'
  }
];

export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await api.get('/services');
        
        if (response.data.status === 'success') {
          setServices(response.data.data);
          setError(null);
        } else {
          throw new Error("API Error: Status not success");
        }
      } catch (err) {
        console.warn("[useServices] API Error, using fallback data:", err);
        setError(err.message || 'Failed to fetch services');
        setServices(STATIC_SERVICES);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
}
