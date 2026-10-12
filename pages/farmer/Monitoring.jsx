import FarmerLayout from '../../components/FarmerLayout';
import MonitoringContent from '../shared/MonitoringContent';

export default function FarmerMonitoring() {
  return (
    <FarmerLayout active="monitoring" title="Monitoring">
      <MonitoringContent />
    </FarmerLayout>
  );
}
