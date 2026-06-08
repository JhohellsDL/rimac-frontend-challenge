import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginView } from './views/Login/LoginView';
import { PlansView } from './views/Plans/PlansView';
import { SummaryView } from './views/Summary/SummaryView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<LoginView />} />
        <Route path="/planes"  element={<PlansView />} />
        <Route path="/resumen" element={<SummaryView />} />
        <Route path="*"        element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;