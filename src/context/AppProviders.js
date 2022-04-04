import { ReceiverProvider } from "./ReceiverProvider";
import { DeviceProvider } from "./DeviceProvider";

function AppProviders({ children }) {
  return (
    <ReceiverProvider>
      <DeviceProvider>{children}</DeviceProvider>
    </ReceiverProvider>
  );
}

export default AppProviders;
