import AdminLayout from '../../components/AdminLayout';
import MonitoringContent from '../shared/MonitoringContent';

export default function Monitoring() {
  return (
    <AdminLayout active="monitoring" title="Monitoring">
      <MonitoringContent />
    </AdminLayout>
  );
}
