import { useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ToastProvider } from './components/Toast';
import { FarmerAlertsProvider } from './context/FarmerAlerts';

import Landing from './pages/Landing';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';

import Dashboard from './pages/admin/Dashboard';
import Monitoring from './pages/admin/Monitoring';
import Farms from './pages/admin/Farms';
import FarmDetail from './pages/admin/FarmDetail';
import Reports from './pages/admin/Reports';
import Alerts from './pages/admin/Alerts';
import Users from './pages/admin/Users';
import Settings from './pages/admin/Settings';

import FarmerDashboard from './pages/farmer/Dashboard';
import FarmerMonitoring from './pages/farmer/Monitoring';
import FarmerMyFarm from './pages/farmer/MyFarm';
import FarmerScanHistory from './pages/farmer/ScanHistory';
import FarmerAlerts from './pages/farmer/Alerts';
import FarmerProfile from './pages/farmer/Profile';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ToastProvider>
        <FarmerAlertsProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Admin */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/farms" element={<Farms />} />
            <Route path="/farm-detail" element={<FarmDetail />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />

            {/* Farmer */}
            <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
            <Route path="/farmer/monitoring" element={<FarmerMonitoring />} />
            <Route path="/farmer/my-farm" element={<FarmerMyFarm />} />
            <Route path="/farmer/scan-history" element={<FarmerScanHistory />} />
            <Route path="/farmer/alerts" element={<FarmerAlerts />} />
            <Route path="/farmer/profile" element={<FarmerProfile />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </FarmerAlertsProvider>
      </ToastProvider>
    </HashRouter>
  );
}
