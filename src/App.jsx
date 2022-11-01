import React from "react";
import { Footer, Header } from "./components";
import { useAuth, useTheme } from "./context";
import { ToastContainer } from "react-toastify";

import { WebsiteRoutes } from "./routes";

const App = () => {
  const { theme } = useTheme();
  const { authenticated } = useAuth();

  return (
    <div className={`${theme === "light" ? "bg-orange-100" : "bg-slate-900"}`}>
      <ToastContainer
        theme={theme === "light" ? "light" : "dark"}
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />

      {authenticated && <Header />}
      <WebsiteRoutes />
      {authenticated && <Footer />}
    </div>
  );
};

export default App;
