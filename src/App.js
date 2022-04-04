import { Routes, Route, Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./pages/Menu";
import ChatDetail from "./pages/ChatDetail";
import { useDevice } from "./context/DeviceProvider";
import Router from "./components/Router";

import "./App.css";

function App() {
  const { isMobile } = useDevice();

  return (
    <Router>
      {!isMobile && (
        <div className="MainDiv-class">
          <Container className="Container-class">
            <Row className="Row-class">
              <Col className="Col-class" xs lg="3">
                <Menu />
              </Col>

              <Col className="Col-class">
                <ChatDetail />
              </Col>
            </Row>
          </Container>
        </div>
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
