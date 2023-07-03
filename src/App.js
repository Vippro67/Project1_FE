import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Destination from './pages/Destination/Destination';
import Blog from './pages/Blog/blog';
import Introduction from './pages/Introduction/introduction';
import Support from './pages/Support/support';
import Booking from './pages/Booking/Booking';
import SearchBooking from './pages/Search/searchbooking';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:id" element={<Destination />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/support" element={<Support />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/search" element={<SearchBooking />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
