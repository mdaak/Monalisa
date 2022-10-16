import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>,
  rootElement
);






// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Routes>
//     <App />
//     </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// reportWebVitals();