import HomeView from './components/Home/Home';
import TheHeader from './components/TheHeader/TheHeader';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import PostDetail from './components/Posts/PostDetail';
import Search from './components/Search/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TheHeader />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/search/:postName" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
