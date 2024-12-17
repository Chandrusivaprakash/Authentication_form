import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.tsx';
import LoginForm from './components/LoginForm/LoginForm.tsx';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.tsx';

const App: React.FC = () => {
  return (
    <Router>
   <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
    </Routes>
    </Router>
 
  );
};

export default App;
