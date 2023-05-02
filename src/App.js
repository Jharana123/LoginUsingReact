// import logo from './logo.svg';
// import './App.css';

import {Route,Routes} from'react-router-dom';

import Authentication from './pages/Authentication';
import Login from './pages/Login';
// import auth from './pages/auth';
import Auth from './pages/auth';
function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/authentication" element={<Authentication />} />
          <Route path="/auth" element={<Auth/>}/> */}
        </Routes>
      </div>
      <div></div>
    </div>
  );
}

export default App;
