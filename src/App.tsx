import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoleSelector from './pages/RoleSelector';
import UserLayout from './layouts/UserLayout';
import Explore from './pages/user/Explore';
import Ticket from './pages/user/Ticket';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Subscription from './pages/admin/Subscription';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RoleSelector />} />

        {/* User Routes (B2C) */}
        <Route path='/user' element={<UserLayout />}>
          <Route path='explore' element={<Explore />} />
          <Route path='ticket' element={<Ticket />} />
        </Route>

        {/* Admin Routes (B2B) */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='subscription' element={<Subscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

