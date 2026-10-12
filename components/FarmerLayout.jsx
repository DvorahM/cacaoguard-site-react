import AppShell from './AppShell';
import { useFarmerAlerts } from '../context/FarmerAlerts';

export default function FarmerLayout({ active, title, children }) {
  const { activeCount } = useFarmerAlerts();
  const nav = [
    { key: 'dashboard', to: '/farmer/dashboard', icon: 'grid', label: 'Dashboard' },
    { key: 'monitoring', to: '/farmer/monitoring', icon: 'eye', label: 'Monitoring' },
    { key: 'myfarm', to: '/farmer/my-farm', icon: 'map', label: 'My Farm' },
    { key: 'scans', to: '/farmer/scan-history', icon: 'report', label: 'Scan History' },
    { key: 'alerts', to: '/farmer/alerts', icon: 'bell', label: 'Alerts', badge: activeCount || null },
    { key: 'profile', to: '/farmer/profile', icon: 'user', label: 'Profile' },
  ];
  return (
    <AppShell
      nav={nav}
      active={active}
      title={title}
      brandTo="/farmer/dashboard"
      bellTo="/farmer/alerts"
      avatar={<span className="avatar mono">M</span>}
    >
      {children}
    </AppShell>
  );
}
