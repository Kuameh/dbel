import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./shared/Layout";
import Program from "./pages/Program";
import NotFound from "./pages/NotFound"; // Import the NotFound component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Program />} />
          <Route path="/dbel/" element={<Program />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
