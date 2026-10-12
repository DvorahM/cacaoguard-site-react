import AppShell from './AppShell';
import { asset } from '../lib/asset';

const nav = [
  { key: 'dashboard', to: '/dashboard', icon: 'grid', label: 'Dashboard' },
  { key: 'monitoring', to: '/monitoring', icon: 'eye', label: 'Monitoring' },
  { key: 'farms', to: '/farms', icon: 'map', label: 'Farm' },
  { key: 'reports', to: '/reports', icon: 'report', label: 'Reports' },
  { key: 'alerts', to: '/alerts', icon: 'bell', label: 'Alerts' },
  { key: 'users', to: '/users', icon: 'users', label: 'Users' },
  { key: 'settings', to: '/settings', icon: 'settings', label: 'Settings' },
];

export default function AdminLayout({ active, title, children }) {
  return (
    <AppShell
      nav={nav}
      active={active}
      title={title}
      brandTo="/dashboard"
      bellTo="/alerts"
      avatar={<img className="avatar" src={asset('images/avatar.jpg')} alt="Profile" />}
    >
      {children}
    </AppShell>
  );
}
