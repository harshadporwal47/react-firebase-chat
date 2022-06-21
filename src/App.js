import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./pages/Menu";
import ChatDetail from "./pages/ChatDetail";
import DesktopView from "./pages/DesktopView";
import { useDevice } from "./context/DeviceProvider";
import Router from "./components/Router";

import "./App.css";

function App() {
  const { isMobile } = useDevice();

  return (
    <Router>
      {!isMobile && (
       <Routes>
          <Route path="/home" element={<DesktopView />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      )}
      {isMobile && (
        <Routes>
          <Route path="/home" element={<Menu />} />
          <Route path="/chatDetail" element={<ChatDetail />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
