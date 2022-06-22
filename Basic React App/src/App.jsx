import {
  Routes,
  Route,
} from "react-router-dom";
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page1 from './components/Page1';
import Layout from './components/layout/Layout';
import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [reloadCounts, setReloadCounts] = useState(0);
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Page1 reloadCounts={reloadCounts} setReloadCounts={setReloadCounts} />} />
          <Route path="/Page2" element={<Page2 count={count} setCount={setCount} />} />
          <Route path="/Page3" element={<Page3 count={count} reloadCounts={reloadCounts} />} />
        </Routes>
    </Layout>
  );
}

export default App;

