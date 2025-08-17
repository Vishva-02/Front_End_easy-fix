import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  // Your state should now hold both types of bookings
  const [emergencyBookings, setEmergencyBookings] = useState([]);
  const [regularBookings, setRegularBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        setLoading(true);
        const res = await fetch('http://localhost:3000/api/dashboard', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          // If token is expired or invalid, server will send 401
          if (res.status === 401) {
            localStorage.removeItem('token');
            navigate('/login');
          }
          throw new Error('Failed to fetch data');
        }
    
        const data = await res.json();
        setEmergencyBookings(data.emergencyBookings || []);
        setRegularBookings(data.regularBookings || []); // Set the regular bookings

      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    return <p className="text-center mt-10">Loading your dashboard...</p>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#bfa76f]">My Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg shadow transition-colors">
          Logout
        </button>
      </div>

      {/* --- THIS IS THE NEW SECTION FOR REGULAR BOOKINGS --- */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">My Service Bookings</h2>
        <div className="space-y-4">
          {regularBookings.length > 0 ? (
            regularBookings.map((booking: any) => (
              <div key={booking._id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg text-gray-800">{booking.serviceType}</p>
                  <span className="text-sm font-medium text-gray-600">
                    {new Date(booking.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-2"><strong>Vehicle:</strong> {booking.vehicleModel} ({booking.regNumber})</p>
                <p><strong>Location:</strong> {booking.location}</p>
                {booking.destination && <p><strong>Destination:</strong> {booking.destination}</p>}
                <p><strong>Payment:</strong> {booking.paymentMethod}</p>
              </div>
            ))
          ) : (
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p>You have not made any service bookings yet.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* This is your existing section for emergency bookings */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-red-600">My Emergency Requests</h2>
        <div className="space-y-4">
          {emergencyBookings.length > 0 ? (
            emergencyBookings.map((booking: any) => (
              <div key={booking._id} className="bg-red-50 p-4 rounded-lg shadow-md border border-red-200">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg text-red-800">{booking.issue}</p>
                  <span className="text-sm font-medium text-red-600">
                    {new Date(booking.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-2"><strong>Vehicle:</strong> {booking.vehicleType}</p>
                <p><strong>Location:</strong> {booking.location}</p>
              </div>
            ))
          ) : (
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p>You have not made any emergency requests yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;