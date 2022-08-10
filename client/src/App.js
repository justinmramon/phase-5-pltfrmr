import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);


  return (
    <div className="testing">
      <div className="router-test">
      <BrowserRouter>
        <Routes>
          <Route path="/testing" element={<h1>Test Route</h1>} />
          <Route path="/" element={<h1>Page Count: {count}</h1>} />
        </Routes>
      </BrowserRouter>
      </div>
      <div className="hello-world">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
    </div>
  );
}

export default App;
