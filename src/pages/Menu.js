import { Container, Navbar } from "react-bootstrap";
import logo from "../logo.svg";
import ChatList from "./ChatList";


function Menu() {

  return (
    <>
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
            Chat App
          </Navbar.Brand>
        </Container>
      </Navbar>
      <ChatList />
    </>
  );
}

export default Menu;
