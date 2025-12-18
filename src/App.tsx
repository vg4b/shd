import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';
import WebhostingNoLimitPage from './pages/WebhostingNoLimitPage';
import WebhostingLowCostPage from './pages/WebhostingLowCostPage';
import DomainsPage from './pages/DomainsPage';
import VpsOnPage from './pages/VpsOnPage';
import VpsSsdPage from './pages/VpsSsdPage';
import WebsitePage from './pages/WebsitePage';
// import CdPage from './pages/CdPage';
import DiskPage from './pages/DiskPage';
import MailhostingPage from './pages/MailhostingPage';
import RenewalPage from './pages/RenewalPage';

const AppContent: React.FC = () => {
  const routes = [
    { path: "", element: <HomePage /> },
    { path: "webhosting-nolimit", element: <WebhostingNoLimitPage /> },
    { path: "webhosting-lowcost", element: <WebhostingLowCostPage /> },
    { path: "domains", element: <DomainsPage /> },
    { path: "vps-on", element: <VpsOnPage /> },
    { path: "vps-ssd", element: <VpsSsdPage /> },
    { path: "website", element: <WebsitePage /> },
    { path: "disk", element: <DiskPage /> },
    { path: "mailhosting", element: <MailhostingPage /> },
    { path: "renewal", element: <RenewalPage /> }
  ];

  return (
    <Routes>
      {/* Routes with language prefixes (including default 'cs') */}
      {["cs", "en", "pl", "sk", "de", "it"].map(lang => 
        routes.map(({ path, element }) => {
          const routePath = lang === "cs" 
            ? `/${path}` // Default language without prefix
            : `/${lang}${path ? `/${path}` : ""}`; // Other languages with prefix
          
          return (
            <Route 
              key={`${lang}/${path}`} 
              path={routePath}
              element={element} 
            />
          );
        })
      ).flat()}

      {/* Catch-all redirect to home page */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}

export default App;
