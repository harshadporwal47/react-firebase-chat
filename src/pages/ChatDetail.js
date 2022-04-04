import { Container, Navbar, Button } from "react-bootstrap";
import logo from "../logo.svg";
import { useDevice } from "../context/DeviceProvider";
import { useReceiver } from "../context/ReceiverProvider";
import { useNavigate } from "react-router-dom";

function ChatDetail() {
  const navigate = useNavigate();
  const { receiver } = useReceiver();
  const { isMobile } = useDevice();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {isMobile && (
            <Button variant="primary" onClick={() => navigate("/")}>
              Back
            </Button>
          )}
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          {receiver ? receiver : "Chat App"}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default ChatDetail;
