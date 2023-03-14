import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

const AppProvider = ({ childern }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const openSidebar = () => {
    setisSidebarOpen(true);
  };

  const closeSidebar = () => {
    setisSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        closeSidebar,
        openSidebar,
      }}
    >
      {childern}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
