import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';
import WebhostingNoLimitPage from './pages/WebhostingNoLimitPage';
import WebhostingLowCostPage from './pages/WebhostingLowCostPage';
// import DomainsPage from './pages/DomainsPage';
import VpsPage from './pages/VpsPage';
import WebsitePage from './pages/WebsitePage';
// import CdPage from './pages/CdPage';
import DiskPage from './pages/DiskPage';
import MailhostingPage from './pages/MailhostingPage';
import RenewalPage from './pages/RenewalPage';

const AppContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/webhosting-nolimit" element={<WebhostingNoLimitPage />} />
      <Route path="/webhosting-lowcost" element={<WebhostingLowCostPage />} />
      {/* <Route path="/domains" element={<DomainsPage />} /> */}
      <Route path="/vps" element={<VpsPage />} />
      <Route path="/website" element={<WebsitePage />} />
      {/* <Route path="/cd" element={<CdPage />} /> */}
      <Route path="/disk" element={<DiskPage />} />
      <Route path="/mailhosting" element={<MailhostingPage />} />
      <Route path="/renewal" element={<RenewalPage />} />
    </Routes>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
      <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
