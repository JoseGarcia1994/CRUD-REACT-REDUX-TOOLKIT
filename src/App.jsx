import './App.css';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Pages/Home';
import CreateUser from './Pages/CreateUser';
import UpdateUser from './pages/UpdateUser';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<UpdateUser />} />
      </Routes>
    </HashRouter>
  )
}

export default App
