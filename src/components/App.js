import React from 'react'

import {
  Routes,
  Route,
} from "react-router-dom";

import { Home } from '../Page/home';
import { Apropos } from '../Page/Apropos';
import '../styles/App.css';
import '../styles/gallery.css';
import '../styles/apropos.css';
import '../styles/footer.css';
import '../styles/error.css';
import '../styles/logement.css'
import { PageNotFound } from '../Page/pageNotFound';
import { Logement } from '../Page/Logement';


export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Apropos" element={<Apropos />} />
      <Route exact path="/detail/:id" element={<Logement />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}



// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import { Home } from '../Page/home';
// import '../styles/App.css';
// import '../styles/gallery.css';




// function App() {

//   return (
//     <React.StrictMode>
//       <Router>
//         <Routes>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/ouuuuuuuuok" exact>
//             <p>ouiouifsdfsoui</p>
//           </Route>
//         </Routes>
//       </Router>
//     </React.StrictMode>
//   );
// }

// export default App;


