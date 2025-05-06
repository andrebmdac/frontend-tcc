import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import AlunoHome from './pages/aluno/home';
import AlunoUpload from './pages/aluno/upload';
import ProfessorRelatorios from './pages/professor/relatorios';
import RelatorioDetalhes from './pages/professor/relatorios/detalhes';
import ProtectedRoute from './components/protectedRoute';
import RoleRoute from './components/roleRoute';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />

        <Route
          path="/aluno"
          element={
            <ProtectedRoute>
              <RoleRoute perfil="AL">
                <AlunoHome />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <RoleRoute perfil="AL">
                <AlunoUpload />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/relatorios"
          element={
            <ProtectedRoute>
               <RoleRoute perfil="PR">
                <ProfessorRelatorios />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/relatorio/:id"
          element={
            <ProtectedRoute>
               <RoleRoute perfil="PR">
                <RelatorioDetalhes />
              </RoleRoute>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
