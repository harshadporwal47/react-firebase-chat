import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu";
import ChatDetail from "./ChatDetail";
import './DesktopView.css';
function DesktopView() {

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

export default DesktopView;
