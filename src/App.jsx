import './App.css';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import CreateUser from './Pages/CreateUser';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
    </HashRouter>
  )
}

export default App
