import { Container, Row, Col } from "react-bootstrap";
import Menu from "./pages/Menu";
import ChatDetail from "./pages/ChatDetail";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
