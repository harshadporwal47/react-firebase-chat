import { ListGroup } from "react-bootstrap";

import { useReceiver } from "../context/ReceiverProvider";

function ChatList() {
  const { setReceiver } = useReceiver();

  return (
    <div style={{ height: "100%" }}>
      <ListGroup>
        <ListGroup.Item onClick={() => setReceiver("One")} action>
          One
        </ListGroup.Item>
        <ListGroup.Item onClick={() => setReceiver("Two")} action>
          Two
        </ListGroup.Item>
        <ListGroup.Item onClick={() => setReceiver("Three")} action>
          Three
        </ListGroup.Item>
        <ListGroup.Item onClick={() => setReceiver("Four")} action>
          Four
        </ListGroup.Item>
        <ListGroup.Item onClick={() => setReceiver("Five")} action>
          Five
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default ChatList;
