import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Destination from './pages/Destination/Destination';
import Blog from './pages/Blog/blog';
import Introduction from './pages/Introduction/introduction';
import Support from './pages/Support/support';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/:id" element={<Destination/>} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/introduction" element={<Introduction/>} />
        <Route path="/support" element={<Support/>} />
      </Routes>
    </div>
  );
}

export default App;
