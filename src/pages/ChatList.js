import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useReceiver } from "../context/ReceiverProvider";
import John from "../Assets/John.svg";
import "./ChatList.css";
import { useDevice } from "../context/DeviceProvider";

const receiverList = ["John", "Alice", "Alex", "Dev", "Paul"];

function ChatList() {
  const navigate = useNavigate();
  const { isMobile } = useDevice();
  const { setReceiver } = useReceiver();

  const onItemClicked = (receiver) => {
    setReceiver(receiver);
    if (isMobile) {
      navigate("/chatDetail");
    }
  };

  return (
    <>
      <ListGroup className="List-Chat-class">
        {receiverList.map((receiver) => (
          <ListGroup.Item onClick={() => onItemClicked(receiver)} action>
            <div className="card mb-3 Card-Class">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={John}
                    className="Image-Class card-img"
                    alt="..."
                  ></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{receiver}</h5>
                    <p className="card-text">Message</p>
                  </div>
                </div>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default ChatList;
