import { Container, Navbar } from "react-bootstrap";
import logo from "../logo.svg";

import { useReceiver } from "../context/ReceiverProvider";

function ChatDetail() {
  const { receiver } = useReceiver();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
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
