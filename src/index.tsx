import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './index.css';
import SetContext from "./views/SetContext";
import SetState from './views/SetState';
import SetTimeout from './views/SetTimeout';
import PageMemo from "./views/PageMemo";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <div className="app">
    <BrowserRouter>
      <nav>
        <Link to="/set-timeout">SetTimeout</Link>
        <Link to="/set-state">SetState</Link>
        <Link to="/set-context">SetContext</Link>
        <Link to="/memo">Memo</Link>
      </nav>
      <Routes>
        <Route path="/set-timeout" element={<SetTimeout />} />
        <Route path="/set-state" element={<SetState />} />
        <Route path="/set-context" element={<SetContext />} />
        <Route path="/memo" element={<PageMemo />} />
      </Routes>
    </BrowserRouter>
  </div>
);
