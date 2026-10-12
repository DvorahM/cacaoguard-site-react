import { createContext, useContext, useState } from 'react';

const initialAlerts = [
  {
    id: 1,
    color: 'red',
    sev: 'critical',
    status: 'active',
    label: 'Critical',
    farm: 'Initao Cacao Farm',
    time: '15 minutes ago',
    title: 'Pathogen Spreading Outbreak — Waypoint 5',
    text: 'Severe infection parameters of Black Pod Disease detected during drone analysis in cacao area canopy Waypoint 5. Risk of nearby contamination is high.',
  },
  {
    id: 2,
    color: 'orange',
    sev: 'warning',
    status: 'active',
    label: 'Warning',
    farm: 'Initao Cacao Farm',
    time: '2 hours ago',
    title: 'Moisture Levels Elevated',
    text: 'Agricultural telemetry reports high relative humidity (92%) within Waypoint 3 canopy. This creates ideal environments for cacao pathogen propagation.',
  },
  {
    id: 3,
    color: 'green',
    sev: 'notification',
    status: 'resolved',
    label: 'Notification',
    farm: 'Initao Cacao Farm',
    time: '1 day ago',
    title: 'Scheduled Diagnostic Run Completed',
    text: 'UAV autopilot routine successfully audited farm waypoints. No pathogenic signs were found in Waypoint 1 scan parameters.',
  },
];

const FarmerAlertsContext = createContext({ alerts: [], activeCount: 0, resolve: () => {} });

// Keeps the farmer's alerts in one place so the sidebar badge stays in sync
export function FarmerAlertsProvider({ children }) {
  const [alerts, setAlerts] = useState(initialAlerts);
  const resolve = (id) =>
    setAlerts((list) => list.map((a) => (a.id === id ? { ...a, status: 'resolved' } : a)));
  const activeCount = alerts.filter((a) => a.status !== 'resolved').length;
  return (
    <FarmerAlertsContext.Provider value={{ alerts, activeCount, resolve }}>
      {children}
    </FarmerAlertsContext.Provider>
  );
}

export const useFarmerAlerts = () => useContext(FarmerAlertsContext);
