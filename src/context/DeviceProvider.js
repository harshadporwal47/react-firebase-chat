import React, { createContext, useContext, useState, useEffect } from "react";

const DeviceContext = createContext();

function DeviceProvider({ children }) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 800) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [setIsMobile]);

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
}

const useDevice = () => useContext(DeviceContext);

export { DeviceProvider, useDevice };
