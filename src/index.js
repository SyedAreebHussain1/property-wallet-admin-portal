import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Ruter,
  HashRouter,
  Route,
  Routes,
  Switch, Link
} from "react-router-dom";
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
// import App from './App';
import reportWebVitals from './reportWebVitals';




import Login from './views/Login/Login';
import Home from './views/home/home';
import About from './views/about/about';
import Dashboard from './views/Dashboard/dashboard';



const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {/* <Route path="/auth/login" element={<Home />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}> <App /></Provider>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();