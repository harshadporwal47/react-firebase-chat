import { ReceiverProvider } from "./ReceiverProvider";

function AppProviders({ children }) {
  return <ReceiverProvider>{children}</ReceiverProvider>;
}

export default AppProviders;
