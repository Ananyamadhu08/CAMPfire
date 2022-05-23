import React from "react";
import { Footer, Header } from "./components";
import { useTheme } from "./context";

import { WebsiteRoutes } from "./routes";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "light" ? "bg-orange-100" : "bg-slate-900"}`}>
      <Header />
      <WebsiteRoutes />
      <Footer />
    </div>
  );
};

export default App;
