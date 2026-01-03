import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import ServiceCard from '../components/features/ServiceCard';

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get('/services');
        if (response.data.status === 'success') {
            setServices(response.data.data);
        }
      } catch (err) {
        setError('Gagal mengambil data services.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <div className="text-center py-20 font-bold text-gray-500">Loading services...</div>;
  if (error) return <div className="text-center py-20 text-red-500 font-bold">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-main dark:text-white mb-2">Our Services</h1>
        <p className="text-text-sub">Choose professional services for your home needs.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.length > 0 ? (
            services.map((service) => (
            <ServiceCard key={service.id} service={service} />
            ))
        ) : (
            <p>No services available properly.</p>
        )}
      </div>
    </div>
  );
}