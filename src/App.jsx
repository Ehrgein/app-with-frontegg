import "./App.css";
import React from "react";
import {
  useAuth,
  useLoginWithRedirect,
  ContextHolder,
  AdminPortal,
} from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Displays the admin portal on trigger
  const handleShowAdminPortal = () => {
    AdminPortal.openHosted();
  };

  // Logs out of the account and redirects back to the home page where they can log in again
  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <img
            className="profile-image"
            src={user?.profilePictureUrl || undefined}
            alt={user?.name}
          />
          <div className="login-container">
            <div className="login-status"></div>
            <span>{user?.name}</span>
          </div>
          <div className="btn-list">
            <div>
              <button onClick={logout}>Logout</button>
            </div>
            <div>
              <button onClick={handleShowAdminPortal}>Settings</button>
            </div>

          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;
