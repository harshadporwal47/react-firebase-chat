import React, { createContext, useContext, useState } from "react";

const ReceiverContext = createContext();

function ReceiverProvider({ children }) {
  const [receiver, setReceiver] = useState("");

  return (
    <ReceiverContext.Provider value={{ receiver, setReceiver }}>
      {children}
    </ReceiverContext.Provider>
  );
}

const useReceiver = () => useContext(ReceiverContext);

export { ReceiverProvider, useReceiver };
