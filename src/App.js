
// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import Home from './components/Home';
// import Detail from './components/Detail';
// import store from './redux/store';

// function App() {
//   return (

//     <Provider store={store}>
//       <Router>
//         <Route exact path="/" component={Home} />
//         <Route path="/item/:id" component={Detail} />
//       </Router>
//     </Provider>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Detail from './components/Detail';
import store from './redux/store';
import Navbar from './Navbar';
import './navbar.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Detail />} />
        
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
