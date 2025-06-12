import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* a seguir, defina o componente que será exibido quando o caminho path foi acessado */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
