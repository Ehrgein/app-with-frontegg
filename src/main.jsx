import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://app-gu8t3duj7a8d.frontegg.com",
  clientId: "cbf94696-a259-4d1a-9a2f-d7876bf6240d",
};

// Changed the authOptions so that if the user has authenticated before, they will not see a 'Login' button. They will be taken to the portal automatically.
// Could potentially add a Suspense for a loading spinner perhaps for better UX
const authOptions = {
  hostedLoginOptions: {
    loadUserOnFirstLoad: true,
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true}
      authOptions={authOptions}
    >
      <App />
    </FronteggProvider>
  </StrictMode>
);
